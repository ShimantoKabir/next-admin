import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface LeftMenuStates {
  isLeftMenuMinimized: boolean;
}

interface LeftMenuActions {
  toggle: () => void;
}

export const useMenuStore = create<LeftMenuStates & LeftMenuActions>()(
  persist(
    (set) => ({
      isLeftMenuMinimized: false,
      toggle: () =>
        set((state) => ({
          isLeftMenuMinimized: !state.isLeftMenuMinimized,
        })),
    }),
    {
      name: "menu-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default { useMenuStore };
