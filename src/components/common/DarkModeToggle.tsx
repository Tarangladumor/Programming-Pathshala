'use client'

import modeStore from '@/store/modeStore';
import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const DarkModeToggle: React.FC = () => {
    const { mode, toggleMode } = modeStore();

    return (
        <button onClick={toggleMode}>
            {mode === 'light' ? <MdDarkMode /> : <MdLightMode />}
        </button>
    );
};

export default DarkModeToggle;
