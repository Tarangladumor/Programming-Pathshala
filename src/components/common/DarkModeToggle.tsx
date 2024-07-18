'use client'

import modeStore from '@/store/modeStore';
import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const DarkModeToggle: React.FC = () => {
    const { mode, toggleMode } = modeStore();

    // const {mode} = modeStore((state) => ({mode: state.mode }));

    return (
        <button onClick={toggleMode}>
            {mode === 'light' ?
                <div className={`bg-white p-3 border-[2px] border-gray-500 rounded-2xl`}>
                    <MdDarkMode />
                </div> :
                <div className='bg-white p-3 border-[2px] border-gray-200 rounded-2xl'>
                    <MdLightMode />
                </div>}
        </button>
    );
};

export default DarkModeToggle;
