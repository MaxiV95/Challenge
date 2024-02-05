// Service.tsx
import { useEffect, type FC } from 'react';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Stack,
	Box,
} from '@mui/material';
import useAppState from '../../store/useAppState';

export const Service: FC<any> = () => {
	const { services, getServices } = useAppState();

	useEffect(() => {
		getServices();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box component='section' id='Servicios'>
			<Typography
				sx={{ mb: '1rem', fontWeight: 'bold', fontSize: 'h5.fontSize' }}
			>
				Servicios
			</Typography>
			<Box>
				<Stack
					spacing={{ xs: 1, sm: 2 }}
					direction='row'
					useFlexGap
					flexWrap='wrap'
					justifyContent={{ lg: 'space-between' }}
				>
					{services.map(({ name, img }) => (
						<Card
							key={name}
							variant='elevation'
							sx={{
								borderRadius: 5,
								boxShadow: '0px 5px 35px 0px rgba(174, 150, 114, 0.3);',
								padding: '1rem',
								marginX: 'auto',
							}}
						>
							<CardMedia
								sx={{ aspectRatio: '1/1', borderRadius: 999 }}
								component='img'
								height='134'
								width='134'
								image={`/images/${img}`}
								alt={name}
							/>
							<CardContent sx={{ padding: '1rem 0 0 0' }}>
								<Typography
									variant='h3'
									component='h3'
									sx={{
										textAlign: 'center',
										fontWeight: 'bold',
										fontSize: 'h6.fontSize',
									}}
								>
									{name}
								</Typography>
							</CardContent>
						</Card>
					))}
				</Stack>
			</Box>
		</Box>
	);
};

export default Service;
