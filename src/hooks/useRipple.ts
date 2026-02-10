import { useState, useLayoutEffect, MouseEvent } from 'react';

interface Ripple {
    x: number;
    y: number;
    size: number;
    id: number;
}

export function useRipple() {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const createRipple = (event: MouseEvent<HTMLElement>) => {
        const element = event.currentTarget;
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const newRipple: Ripple = {
            x,
            y,
            size,
            id: Date.now(),
        };

        setRipples((prevRipples) => [...prevRipples, newRipple]);
    };

    useLayoutEffect(() => {
        if (ripples.length > 0) {
            const timer = setTimeout(() => {
                setRipples([]);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [ripples]);

    return { ripples, createRipple };
}
