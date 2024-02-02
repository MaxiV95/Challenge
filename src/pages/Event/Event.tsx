// Event.tsx
import { useEffect, type FC } from 'react';
import { Box, Typography } from '@mui/material';
import useAppState from '../../store/useAppState';

export const Event: FC<any> = () => {
	const { events, getEvent } = useAppState();

	useEffect(() => {
		getEvent();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Box
				id='Eventos'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					pt: '80px',
				}}
			>
				<Typography variant='h5' fontFamily='Jost' mb='2rem'>
					Eventos
				</Typography>
				<Box
					sx={{
						display: { xs: '', md: 'flex' },
						// flexDirection: 'row',
						gap: '2rem',
						margin: '0 5rem',
					}}
				>
					{events.map((item, index) => (
						<Box
							key={index}
							position='relative'
							display='flex'
							justifyContent='center'
						>
							<img
								style={{
									objectFit: 'cover',
									filter: 'brightness(50%)',
									borderRadius: '10px',
								}}
								src={`/images/${item.img}`}
								width={210}
								height={337}
							/>
							<Typography
								fontFamily='Jost'
								color='secondary'
								top='50%'
								fontWeight='700'
								position='absolute'
							>
								{item.name}
							</Typography>
							<Typography
								fontFamily='Jost'
								color='secondary'
								top='85%'
								position='absolute'
							>
								Fecha - Hora
							</Typography>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Event;
