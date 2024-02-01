// useAppState.ts
import { create } from 'zustand';
import { Option } from '../data/menuData/index';
import menuData from '../data/menuData/menuData.json';
import { Event } from '../data/eventData/index';
import eventData from '../data/eventData/eventData.json';

type Options = {
	name: string;
	options: Option[];
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
	getMenu: async () => set({ menu: transformMenuData(menuData) }),
	getEvent: async () => set({ events: transformEventData(eventData) }),
}));

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

const transformEventData = (events: any): Event[] => {
	return events.map((event: any) => ({
		name: event.name,
		img: event.img,
	}));
};

export default useAppState;
