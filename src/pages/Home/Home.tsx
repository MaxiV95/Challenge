// Home.tsx
import * as React from 'react';
import type { FC } from 'react';
import { Box, ButtonBase, Typography } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import { Stack } from '@mui/system';

const Home: FC<any> = () => {
	return (
		<Box
			id='Home'
			sx={{
				display: 'flex',
				minHeight: '50vh',
				padding: '24px 100px',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '80px',
				backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/Navbar.png)`,
				backgroundPosition: '50%',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<NavBar />

			<Stack gap={5} maxWidth='524px' sx={{ margin: '10rem auto 0 auto' }}>
				<Typography
					color='white'
					textAlign='center'
					variant='h3'
					component='h1'
					sx={{
						textAlign: 'center',
						fontWeight: 900,
						fontSize: '3rem',
						fontFamily: 'Jost',
					}}
				>
					Nombre del Hotel
				</Typography>
				<ButtonBase
					color='text.secondary'
					sx={{
						borderRadius: '.4rem',
						padding: '.7rem',
						backgroundColor: 'white',
						fontSize: '1.2rem',
					}}
				>
					Hacer reserva
				</ButtonBase>
			</Stack>
		</Box>
	);
};

export default Home;
