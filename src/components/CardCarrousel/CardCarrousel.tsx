// CardCarrousel.tsx
import type { FC } from 'react';
import {
	Typography,
	Card,
	CardMedia,
	CardContent,
	CardActionArea,
} from '@mui/material';
import { Option } from '../../store/useAppState';

interface CardCarrouselProps {
	option: Option;
}

export const CardCarrousel: FC<CardCarrouselProps> = ({ option }) => {
	return (
		<Card
			sx={{
				maxWidth: 345,
				width: '210px',
				height: '273px',
				borderRadius: '20px',
				padding: '16px',
			}}
		>
			<CardActionArea sx={{ width: '100%', height: '100%' }}>
				<CardMedia
					component='img'
					height='162px'
					width='178px'
					// image={`/images/${option.img}.png)`}
					image={`/images/${option.img}`}
					alt={option.name}
					sx={{ borderRadius: '10px' }}
				/>
				<CardContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Typography gutterBottom variant='h5' fontFamily='Jost'>
						{option.name}
					</Typography>
					<Typography variant='body2' fontFamily='Jost'>
						${option.price}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default CardCarrousel;
