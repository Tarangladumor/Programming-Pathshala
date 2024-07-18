import create from 'zustand';

interface modeStoreProps {
    mode: 'light' | 'dark';
    toggleMode: () => void;
}

const modeStore = create<modeStoreProps>((set) => ({
    mode: 'light',
    toggleMode: () => set((state) => ({
        mode: state.mode === 'light' ? 'dark' : 'light'
    }))
}));

export default modeStore;