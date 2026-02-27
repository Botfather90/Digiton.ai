import React from 'react';
import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export const InteractiveWorldMap = () => {
    // Coordinates: [longitude, latitude]
    const markers = [
        { id: 'estonia', label: 'Tallinn, EE', coordinates: [24.7536, 59.4370] },
        { id: 'uk', label: 'London, UK', coordinates: [-0.1276, 51.5072] },
        { id: 'lisbon', label: 'Lisbon, PT', coordinates: [-9.1393, 38.7223] },
        { id: 'la', label: 'Los Angeles, US', coordinates: [-118.2437, 34.0522] },
        { id: 'angola', label: 'Luanda, AO', coordinates: [13.2343, -8.8390] },
        { id: 'sa', label: 'Cape Town, ZA', coordinates: [18.4241, -33.9249] },
        { id: 'brazil', label: 'São Paulo, BR', coordinates: [-46.6333, -23.5505] },
        { id: 'uae', label: 'Dubai, UAE', coordinates: [55.2708, 25.2048] }
    ];

    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 150, center: [0, 20] }}
                style={{ width: '100%', height: '100%' }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="transparent"
                                stroke="var(--accent)"
                                strokeWidth={0.5}
                                style={{
                                    default: { outline: 'none' },
                                    hover: { outline: 'none', fill: 'rgba(255,206,59,0.05)' },
                                    pressed: { outline: 'none' }
                                }}
                            />
                        ))
                    }
                </Geographies>

                {markers.map(({ id, label, coordinates }, idx) => (
                    <Marker key={id} coordinates={coordinates}>
                        <motion.circle
                            r={6}
                            fill="var(--accent)"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.4 }}
                            style={{ filter: 'drop-shadow(0 0 10px var(--accent))', cursor: 'pointer' }}
                        />
                        <motion.text
                            initial={{ opacity: 0, y: -10 }}
                            whileHover={{ opacity: 1, y: -15 }}
                            textAnchor="middle"
                            fill="var(--text-primary)"
                            fontSize={12}
                            fontWeight={600}
                            style={{ pointerEvents: 'none', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }}
                        >
                            {label}
                        </motion.text>
                        {/* Invisible larger circle for easier hovering */}
                        <circle r={15} fill="transparent" style={{ cursor: 'pointer' }} />
                    </Marker>
                ))}
            </ComposableMap>
        </div>
    );
};
