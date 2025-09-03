'use client';
import { create } from "zustand";

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartState = {
  items: Item[];
  addItem: (item: Item) => void;
  clear: () => void;
};

const useCart = create<CartState>((set, get) => ({
  items: [],
  addItem: (item) => {
    const items = get().items;
    const existing = items.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
      return set({ items: [...items] });
    }
    return set({ items: [...items, item] });
  },
  clear: () => set({ items: [] })
}));

export default useCart;
