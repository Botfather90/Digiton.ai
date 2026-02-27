import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

const PlatformDevelopment = () => {
    const data = {
        title: "Platform Development",
        subtitle: "React, Next.js, Python, Flutter. From MVP to production in weeks.",
        
        description: "We don't build WordPress templates. We engineer full-scale, scalable SaaS applications, customized internal dashboards, and dynamic data visualization tools tailored exactly to your unique enterprise requirements.",
        features: [
            { title: "React & Next.js Frontends", desc: "Lightning-fast, highly animated, and responsive user interfaces built on modern web standards." },
            { title: "Scalable Backends", desc: "Robust data architectures leveraging Python, Node, and Supabase / PostgreSQL." },
            { title: "Mobile & Cross-Platform", desc: "Deploying natively for iOS and Android simultaneously using Flutter." }
        ]
    };

    return <ServicePageTemplate {...data} />;
};

export default PlatformDevelopment;
