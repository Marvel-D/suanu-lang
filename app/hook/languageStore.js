import { create } from 'zustand'

export const useLanguageStore = create((set) => ({
    currentLanguageIndex: "",
    updateCurrentLanguageIndex: (chosenLang) => set({ currentLanguageIndex: chosenLang }),

}))
