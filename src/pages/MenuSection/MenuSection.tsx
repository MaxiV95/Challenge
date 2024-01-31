// MenuSection.tsx
import { Box, Typography } from '@mui/material';
import { useEffect, type FC } from 'react';
import Carrousel from '../../components/Carrousel/Carrousel';
import useAppState from '../../store/useAppState';

export const MenuSection: FC<any> = () => {
	const { menu, getMenu } = useAppState();

  useEffect(() => {
    getMenu(); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

	return (
		<Box id='Menu' display='flex' alignItems='center' flexDirection='column'>
			<Typography
				fontFamily='Jost'
				variant='h4'
				fontSize={{ xs: '25px' }}
				fontWeight='bold'
				sx={{ pt: '80px', pb: '80px' }}
			>
				Tus recomendaciones
			</Typography>

			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
				{menu.map((section ) => (
					<Box key={section.name}>
						<Typography variant='h5' fontFamily='Jost' pb='10px'>
							{section.name}
						</Typography>
						<Carrousel options={section.options} />
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default MenuSection;
