// NavBar.tsx
import type { FC } from 'react';
import * as React from 'react';
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

const pages = ['Home', 'Menu', 'Eventos', 'Servicios'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const NavBar: FC<any> = () => {
	const [isScrolled, setIsScrolled] = React.useState(false);
	React.useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setIsScrolled(scrollY > 0);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null,
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null,
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const handleScrollToSection = (id: string | null) => {
		setAnchorElNav(null);
		if (id) {
			const element = document.getElementById(id);
			if (element) element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<AppBar
			position='fixed'
			sx={{
				top: isScrolled ? 0 : 20,
				backgroundColor: isScrolled ? undefined : 'transparent',
				boxShadow: isScrolled ? undefined : 'none',
				transition: 'background-color 1s ease-in-out',
			}}
		>
			<Container maxWidth='xl' sx={{ width: '90%' }}>
				<Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-nav-bar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-nav-bar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClick={() => handleScrollToSection(null)}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={() => handleScrollToSection(page)}
								>
									<Typography
										textAlign='center'
										sx={{
											fontFamily: 'jost',
										}}
									>
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Typography
						variant='h4'
						noWrap
						sx={{
							display: 'flex',
							flexGrow: { xs: 1, md: 0 },
							fontFamily: 'jost',
							fontSize: '31.25px',
							fontStyle: 'normal',
							fontWeight: 900,
							color: '#F5F5F5',
							textDecoration: 'none',
							lineHeight: 'normal',
						}}
					>
						LOGO
					</Typography>

					{/* ---------- */}

					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={() => handleScrollToSection(page)}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>

					<Box>
						<Tooltip title='Open settings'>
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{
									width: '24px',
									height: '24px',
									background: '#FFF',
									borderRadius: '8px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									'&:hover': { background: 'white', color: '#AE9672' },
								}}
							>
								<PersonIcon />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-nav-bar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NavBar;
