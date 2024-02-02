// useAppState.ts
import { create } from 'zustand';
import menuData from '../data/menuData.json';
import eventData from '../data/eventData.json';

export type Option = {
	img: string;
	name: string;
	price: number;
};

type Options = {
	name: string;
	options: Option[];
};

type Event = {
	img: string;
	name: string;
};

type AppState = {
	menu: Options[];
	getMenu: () => void;
	events: Event[];
	getEvent: () => void;
};

const useAppState = create<AppState>((set) => ({
	menu: [],
	events: [],
	getMenu: async () => set({ menu: menuData }),
	getEvent: async () => set({ events: eventData }),
}));

export default useAppState;
