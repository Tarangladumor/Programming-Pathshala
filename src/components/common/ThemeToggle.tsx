import React from 'react'
import modeStore from '@/store/modeStore'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';

const ThemeToggle: React.FC = () => {

    const { mode, toggleMode } = modeStore();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Theme</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={toggleMode}>
                    Switch to {mode === 'light' ? 'dark' : 'light'} mode
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ThemeToggle
