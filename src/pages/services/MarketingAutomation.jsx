import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

const MarketingAutomation = () => {
    const data = {
        title: "Marketing Automation",
        subtitle: "Klaviyo flows, AI-generated campaigns, content repurposing. Your marketing runs itself.",
        price: "€2,000/mo",
        description: "We eliminate the manual grind of social media management and email deployments. By linking AI reasoning engines to your marketing distribution platforms, we build systems that automatically write, review, and send high-converting campaigns.",
        features: [
            { title: "Advanced Klaviyo Flows", desc: "Dynamic email sequencing triggered by precise user behaviors and CRM updates." },
            { title: "AI Content Repurposing", desc: "Transform a single blog post into an automated LinkedIn thread, Twitter thread, and newsletter." },
            { title: "Automated QA Pipelines", desc: "AI-driven quality assurance that checks links, copy, and design before a campaign ever deploys." }
        ]
    };

    return <ServicePageTemplate {...data} />;
};

export default MarketingAutomation;
