import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';

// Disable body parsing so we can handle multipart/form-data
export const config = {
    api: { bodyParser: false },
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Parse the incoming form (with optional file)
        const { fields, files } = await new Promise<{ fields: any; files: any }>(
            (resolve, reject) => {
                const form = formidable({ multiples: false });
                form.parse(req, (err, fields, files) => {
                    if (err) reject(err);
                    else resolve({ fields, files });
                });
            }
        );

        const { name, email, mobile, message } = fields;

        // Prepare Discord message content
        const content = [
            `**New Contact Form Submission**`,
            `**Name:** ${name}`,
            `**Email:** ${email}`,
            `**Mobile:** ${mobile || 'N/A'}`,
            `**Message:** ${message}`,
        ].join('\n');

        // Build the payload
        const payload: any = { content };

        // Optional: attach a file (image/pdf) if provided
        const fileArray = files.attachment as formidable.File[] | undefined;
        const uploadedFile = Array.isArray(fileArray) ? fileArray[0] : fileArray;

        if (uploadedFile && uploadedFile.filepath) {
            const buffer = fs.readFileSync(uploadedFile.filepath);
            const formData = new FormData();
            formData.append('payload_json', JSON.stringify({ content }));
            formData.append(
                'file',
                new Blob([buffer]),
                uploadedFile.originalFilename || 'attachment'
            );

            const resp = await fetch(process.env.DISCORD_WEBHOOK_URL as string, {
                method: 'POST',
                body: formData,
            });

            if (!resp.ok) throw new Error('Discord upload failed');
        } else {
            // Simple JSON payload if no file
            const resp = await fetch(process.env.DISCORD_WEBHOOK_URL as string, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!resp.ok) throw new Error('Discord webhook failed');
        }

        return res.status(200).json({ success: true, message: 'Sent to Discord' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to send message' });
    }
}
