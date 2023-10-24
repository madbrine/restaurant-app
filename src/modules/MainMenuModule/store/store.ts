import { create } from 'zustand';

interface IModuleStore {
    current: string;
    changeCurrent: (newCurrent: string) => void;
}

const useModuleStore = create<IModuleStore>((set) => ({
    current: 'analytics',
    changeCurrent: (newCurrent) => set({ current: newCurrent})
}))

export default useModuleStore;