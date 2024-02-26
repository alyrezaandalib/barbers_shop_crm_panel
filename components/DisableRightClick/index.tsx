'use client'
import { useEffect } from 'react';

const DisableRightClick = () => {
    const handleRightClick = (event: MouseEvent) => {
        event.preventDefault();
    };

    useEffect(() => {
        document.addEventListener('contextmenu', handleRightClick);

        return () => {
            document.removeEventListener('contextmenu', handleRightClick);
        };
    }, []);

    return null; // This component doesn't render anything
};

export default DisableRightClick;