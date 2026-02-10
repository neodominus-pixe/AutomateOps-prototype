import { useEffect, useState, useRef } from 'react';

export default function LogicPath() {
    const [pathLength, setPathLength] = useState(0);
    const [drawLength, setDrawLength] = useState(0);
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        if (pathRef.current) {
            setPathLength(pathRef.current.getTotalLength());
        }

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;
            const maxScroll = fullHeight - windowHeight;
            const scrollPercent = Math.min(Math.max(scrollY / maxScroll, 0), 1);

            if (pathRef.current) {
                setDrawLength(pathLength * scrollPercent);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathLength]);

    // We'll define a path that curves through the layout
    // Hero (center) -> WhoItsFor (right) -> HowItWorks (left) -> ROI (right) -> CTA (center)
    // This is a rough estimation of the curve points
    return (
        <div className="absolute inset-0 pointer-events-none z-0 h-full w-full hidden md:block">
            <svg
                className="w-full h-full"
                viewBox="0 0 1200 8000" // Estimated height, SVG will scale
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="logicGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(74, 158, 255, 0.4)" />
                        <stop offset="50%" stopColor="rgba(106, 178, 255, 0.6)" />
                        <stop offset="100%" stopColor="rgba(111, 66, 193, 0.4)" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                <path
                    ref={pathRef}
                    d="M 600,800 C 600,1200 1100,1400 1100,2000 S 100,2600 100,3500 S 1100,4500 1100,5500 S 600,6500 600,7500"
                    stroke="url(#logicGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray={pathLength}
                    strokeDashoffset={pathLength - drawLength}
                    filter="url(#glow)"
                    strokeLinecap="round"
                    className="transition-all duration-300 ease-out"
                />

                {/* Nodes at key points */}
                <circle cx="600" cy="800" r="4" fill="#4a9eff" className="animate-pulse" />
                <circle cx="1100" cy="2000" r="4" fill="#4a9eff" className="animate-pulse" style={{ opacity: drawLength > pathLength * 0.2 ? 1 : 0 }} />
                <circle cx="100" cy="3500" r="4" fill="#4a9eff" className="animate-pulse" style={{ opacity: drawLength > pathLength * 0.4 ? 1 : 0 }} />
                <circle cx="1100" cy="5500" r="4" fill="#6ab2ff" className="animate-pulse" style={{ opacity: drawLength > pathLength * 0.7 ? 1 : 0 }} />
            </svg>
        </div>
    );
}
