import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CartItem = { id: string; name: string; image?: string; quantity: number };
type CartState = {
  items: CartItem[];
  add: (p: Omit<CartItem, "quantity">) => void;
  clear: () => void;
};

// Storage “noop” para SSR (cumple la interfaz requerida)
const memoryStorage = {
  getItem: (_: string) => null as string | null,
  setItem: (_: string, __: string) => {},
  removeItem: (_: string) => {},
};

const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (p) => {
        const items = [...get().items];
        const i = items.findIndex((x) => x.id === p.id);
        if (i >= 0) items[i].quantity += 1;
        else items.push({ ...p, quantity: 1 });
        set({ items });
      },
      clear: () => set({ items: [] }),
    }),
    {
      name: "himetal-cart",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? window.localStorage : memoryStorage
      ),
      // opcional si querés evitar hydration warnings:
      // skipHydration: true,
    }
  )
);

export default useCart;
