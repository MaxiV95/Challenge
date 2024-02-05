// App.tsx
import React from 'react';
import '@mui/material/styles';
import Home from './pages/Home/Home';
import MenuSection from './pages/MenuSection/MenuSection';
import Room from './pages/Room/Room';
import Event from './pages/Event/Event';
import Service from './pages/Service/Service';

const App: React.FC = () => {
	return (
		<>
			<Home />
			<MenuSection />
			<Room />
			<Event />
			<Service />
		</>
	);
};

export default App;
