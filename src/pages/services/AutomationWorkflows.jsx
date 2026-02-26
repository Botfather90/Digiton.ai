import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

const AutomationWorkflows = () => {
    const data = {
        title: "Automation Workflows",
        subtitle: "Connect your tools and kill manual work. Average client saves 42.5 hours/week.",
        price: "€3,000/mo",
        description: "If it has an API, we can automate it. We build robust, error-proof pipelines using natively hosted n8n, Make, Zapier, and custom scripts to force disparate SaaS tools to talk to each other so your human team doesn't have to.",
        features: [
            { title: "n8n Architecture", desc: "Self-hosted, cost-effective automation pipelines connecting 100+ tools seamlessly." },
            { title: "Custom API Sync", desc: "Bridging legacy systems with modern SaaS using robust error handling and retry logic." },
            { title: "Data Ingestion & Formatting", desc: "Automatically scrape, normalize, and push data from email, slack, or CRMs to structured databases like Supabase." }
        ]
    };

    return <ServicePageTemplate {...data} />;
};

export default AutomationWorkflows;
