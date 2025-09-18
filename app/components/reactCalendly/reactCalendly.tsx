"use client";

import dynamic from "next/dynamic";
const PopupModal = dynamic(
    () => import("react-calendly").then(mod => mod.PopupModal),
    { ssr: false }
);
import { useEffect, useState } from "react";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function CalendlyWrapper({ open, onClose }: Props) {
    const [rootElem, setRootElem] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setRootElem(document.getElementById("__next")); // Next.js root div
    }, []);

    if (!rootElem) return null;
    console.log('popmodel');
    
    return (
        <PopupModal
            open={open}
            url="https://calendly.com/aliyark145/30min"
            /*
              Next.js root element is "__next".
              The dynamic import guarantees this runs only in the browser,
              so document is defined.
            */
            rootElement={document.getElementById("__next") as HTMLElement}
            onModalClose={onClose}
        />
    );
}
