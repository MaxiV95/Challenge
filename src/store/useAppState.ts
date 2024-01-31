// useAppState.ts
import { create } from 'zustand';
import menuData from '../data/menuData.json';
import { Option } from '../data/imgMenu';

type Options = {
  name: string;
  options: Option[];
};

type AppState = {
  menu: Options[];
  getMenu: () => void;
};

const useAppState = create<AppState>((set) => ({
  menu: [],
  getMenu: async () => set({ menu: transformMenuData(menuData) }),
}));

// Función para transformar menuData a Options[]
const transformMenuData = (data: any): Options[] => {
  return data.map((section: any) => ({
    name: section.name,
    options: section.options.map((option: any) => ({
      name: option.name,
      img: option.img,
      price: option.price,
    })),
  }));
};

export default useAppState;