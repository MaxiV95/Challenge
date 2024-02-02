// Room.tsx
import type { FC } from 'react';
import { useState } from 'react';
import { Box } from '@mui/system';
import { Typography, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import imgRoom from '../../data/more/Room.png';

const description =
	'Lorem ipsum dolor sit amet consectetur. Eu felis risus quis nisi lectus. Enim ipsum nisi gravida massa odio. Volutpat fermentum.';

export const Room: FC<any> = () => {
	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<Box
			sx={{
				backgroundColor: '#AE9672',
				width: { xs: '100%', md: '100%' },
				margin: '0 auto',
				mt: 6,
			}}
		>
			<Box
				margin='0 auto'
				display='flex'
				flexDirection={{ xs: 'column', sm: 'row' }}
				padding={4}
				alignItems='center'
				justifyContent='center'
			>
				<Button size='small' onClick={handleBack}>
					<KeyboardArrowLeft sx={{ color: '#fff' }} />
				</Button>
				<Box
					margin='0 auto'
					display='flex'
					flexDirection={{ xs: 'column', sm: 'row' }}
					padding={4}
					alignItems='center'
					justifyContent='center'
				>
					<img
						src='/images/Room.png'
						alt='Hotel'
						loading='lazy'
						height='auto'
						width='448px'
						style={{ borderRadius: '10px', maxWidth: '100%' }}
					/>
					<Box
						margin='20px 56px'
						padding={3}
						width={{ xs: '90%', sm: '90%', md: '30%' }}
						display='flex'
						flexDirection='column'
						justifyContent='space-between'
					>
						<Typography
							variant='h3'
							fontFamily='Jost'
							fontWeight={700}
							fontSize={{ xs: 20, sm: 20 }}
							color='secondary'
						>
							Nombre de la habitación
						</Typography>
						<Typography
							py={2}
							fontFamily='Jost'
							fontWeight='400'
							variant='h3'
							fontSize={{ xs: 16, sm: 18 }}
							color='secondary'
						>
							{description}
						</Typography>
						<Button
							sx={{
								fontFamily: 'Jost',
								marginTop: '20px',
								backgroundColor: (theme) => theme.palette.primary.contrastText,
								color: (theme) => theme.palette.primary.main,
							}}
							variant='contained'
						>
							Hacer Reservación
						</Button>
					</Box>
				</Box>
				<Button size='small' onClick={handleNext}>
					<KeyboardArrowRight sx={{ color: '#fff' }} />
				</Button>
			</Box>
		</Box>
	);
};

export default Room;
