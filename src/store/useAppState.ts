// useAppState.ts
import { create } from 'zustand';
import menuData from '../data/menuData.json';
import eventData from '../data/eventData.json';
import serviceData from '../data/serviceData.json';

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
	name: string;
	img: string;
};

type Service = {
	name: string;
	img: string;
};

type AppState = {
	menu: Options[];
	getMenu: () => void;
	events: Event[];
	getEvent: () => void;
	services: Service[];
	getServices: () => void;
};

const useAppState = create<AppState>((set) => ({
	menu: [],
	events: [],
	services: [],
	getMenu: async () => set({ menu: menuData }),
	getEvent: async () => set({ events: eventData }),
	getServices: async () => set({ services: serviceData }),
}));

export default useAppState;
