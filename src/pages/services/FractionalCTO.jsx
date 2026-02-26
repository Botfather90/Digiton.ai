import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

const FractionalCTO = () => {
    const data = {
        title: "Fractional CTO",
        subtitle: "Technical leadership without the £150K salary. Architecture, management, roadmaps. Cancel anytime.",
        price: "€5,000/mo",
        description: "Your business is scaling, and you need a high-level technical architect to oversee your engineering team, decide on infrastructure stacks, and ensure the code quality doesn't crumble under pressure. We step in as your on-demand Chief Technology Officer.",
        features: [
            { title: "System Architecture", desc: "Designing cloud infrastructure and database schemas to ensure a secure, scalable product." },
            { title: "Code Audits & Reviews", desc: "Rigorous oversight of your existing developers' pull requests to enforce best practices." },
            { title: "Technical Roadmap", desc: "Translating business goals into a structured, sprint-based technical milestone plan." }
        ]
    };

    return <ServicePageTemplate {...data} />;
};

export default FractionalCTO;
