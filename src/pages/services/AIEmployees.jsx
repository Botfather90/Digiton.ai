import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

const AIEmployees = () => {
    const data = {
        title: "AI Employees",
        subtitle: "Your next hire isn't human. Deploy intelligent agents that work 24/7 with zero onboarding.",
        
        description: "We build custom AI agents that integrate directly into your existing communication channels. Whether it's answering phone calls, handling complex customer support tickets, or managing your entire calendar scheduling system, our AI employees act exactly like a trained human operator, but never sleep.",
        features: [
            { title: "Voice & Text Reception", desc: "Agents capable of taking live phone calls with sub-second latency, indistinguishable from a human receptionist." },
            { title: "Calendar & Booking Sync", desc: "Direct integration with Calendly, Google Calendar, or custom booking systems to manage appointments autonomously." },
            { title: "Knowledge Base RAG", desc: "Securely embedded with your company's entire historical data, SOPs, and product manuals to answer any query." }
        ]
    };

    return <ServicePageTemplate {...data} />;
};

export default AIEmployees;
