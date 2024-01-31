// Carrousel.tsx
import { useState, FC, useEffect } from 'react';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import CardCarrousel from '../CardCarrousel/CardCarrousel';
import { Option } from '../../data/imgMenu';

interface CarrouselProps {
	options: Option[];
}

export const Carrousel: FC<CarrouselProps> = ({ options }) => {
	const [startIndex, setStartIndex] = useState(0);
	const totalOptions = options.length;
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
	const cardsToShow = isSmallScreen ? 1 : 3;

	const visibleOptions = Array.from({ length: cardsToShow }, (_, i) => {
		const optionIndex = (startIndex + i) % totalOptions;
		return options[optionIndex];
	});

	const handleNext = () => {
		setStartIndex((prevIndex) => (prevIndex + 1) % totalOptions);
	};

	const handleBack = () => {
		setStartIndex((prevIndex) => (prevIndex - 1 + totalOptions) % totalOptions);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 6000);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [startIndex]);

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'row',
				gap: '1rem',
			}}
		>
			<Button size='small' onClick={handleBack}>
				<KeyboardArrowLeft />
			</Button>

			{visibleOptions.map((option, i) => (
				<CardCarrousel key={i} option={option} />
			))}

			<Button size='small' onClick={handleNext}>
				<KeyboardArrowRight />
			</Button>
		</Box>
	);
};

export default Carrousel;
