import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, canonicalUrl, keywords = '' }) => {
    // Default fallback values
    const siteName = "Digiton AI";
    const defaultTitle = "Digiton - AI Transformation & Workflow Automation";
    const defaultDescription = "Digiton transforms businesses through custom AI agents, workflow automation, modern web platform development, and intelligent marketing funnels.";
    const defaultUrl = "https://www.digiton.ai";

    const renderTitle = title ? `${title} | ${siteName}` : defaultTitle;
    const renderDescription = description || defaultDescription;
    const renderCanonical = canonicalUrl ? `${defaultUrl}${canonicalUrl}` : defaultUrl;

    return (
        <Helmet>
            <html lang="en" />
            <title>{renderTitle}</title>
            <meta name="description" content={renderDescription} />
            
            {/* Hreflang Tags (Targeting EN and PT as specified) */}
            <link rel="alternate" hreflang="en" href={renderCanonical} />
            <link rel="alternate" hreflang="pt" href={renderCanonical} />
            <link rel="alternate" hreflang="x-default" href={renderCanonical} />
            
            {/* Canonical Link */}
            <link rel="canonical" href={renderCanonical} />

            {/* Open Graph / Social */}
            <meta property="og:title" content={renderTitle} />
            <meta property="og:description" content={renderDescription} />
            <meta property="og:url" content={renderCanonical} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteName} />

            {/* Keywords if provided */}
            {keywords && <meta name="keywords" content={keywords} />}
            
            {/* Indexing instructions (can be expanded per-page if needed) */}
            <meta name="robots" content="index, follow" />
        </Helmet>
    );
};
