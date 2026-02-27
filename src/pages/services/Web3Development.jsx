import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

const Web3Development = () => {
    const data = {
        title: "Web3 Development",
        subtitle: "Move smart contracts (Sui/Aptos), DeFi protocols, NFT platforms. We live here.",
        
        description: "We are deeply embedded in the next-generation blockchain ecosystem. From developing highly secure Move smart contracts to building seamless Web3 authentication systems, we handle the extreme technical complexity of decentralized applications.",
        features: [
            { title: "Move Smart Contracts", desc: "Developing secure, highly parallelized logic for the Sui and Aptos ecosystems." },
            { title: "DeFi & NFT Platforms", desc: "Full-stack development of marketplaces, staking protocols, and tokenomics dashboards." },
            { title: "Grant Acquisition", desc: "We've written 14 successful technical grant applications across 10+ major chains." }
        ]
    };

    return <ServicePageTemplate {...data} />;
};

export default Web3Development;
