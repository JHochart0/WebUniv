import { useEffect } from "react";

// Update or create a meta tag
function updateMetaTag(selector, attributes, content) {
    let element = document.head.querySelector(selector);

    if (!element) {
        element = document.createElement("meta");

        Object.entries(attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });

        document.head.appendChild(element);
    }

    element.setAttribute("content", content);
}

// Update the page metadata
function usePageMetadata(title, description) {
    useEffect(() => {
        // Page title
        document.title = title;

        // Standard SEO description
        updateMetaTag(
            'meta[name="description"]',
            { name: "description" },
            description
        );

        // Open Graph metadata
        updateMetaTag(
            'meta[property="og:title"]',
            { property: "og:title" },
            title
        );

        updateMetaTag(
            'meta[property="og:description"]',
            { property: "og:description" },
            description
        );

    }, [title, description]);
}

export default usePageMetadata;