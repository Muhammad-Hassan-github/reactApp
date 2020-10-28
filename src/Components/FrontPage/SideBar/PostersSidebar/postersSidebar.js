import React, { useEffect } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { List, ListItem, Select, Drawer, Divider } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MyContext from '../../../Context/context';
import { AiOutlineClose } from 'react-icons/ai';
import PostersContent from './PostersContent/postersContent';
import { MdFilterList } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import './postersSidebar.css';

const drawerWidth = '19em';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	menuButton: {
		marginRight: theme.spacing(2),
		flexGrow: 1,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	drawerHeaderLogo: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'center',
	},
	content: {
		flexGrow: 1,
		// padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: 0,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	toolbarFlex: {
		// display:'unset',
	},
}));

const PostersSidebar = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const [opt, setOpt] = React.useState('all');
	const handleChange = (e) => {
		setOpt(e.target.value);
	};
	return (
		<div className="environment-sidebar">
			<MyContext.Consumer>
				{(context) => {
					return (
						<Drawer
							className={classes.drawer}
							variant="persistent"
							anchor="left"
							open={context.postersDrawer}
							classes={{
								paper: classes.drawerPaper,
							}}
						>
							<div className="drawer-scroll-cotainer">
								<div className={classes.drawerHeaderLogo}>
									<div variant="h6">

										<a href="https://postermuehle.de/">										<img
											style={{ height: '30px' }}
											src="https://postermuehle.de/wp-content/uploads/2020/09/Logo_2.png"
										/>
										</a>

									</div>
								</div>
								{/* <Divider /> */}
								<div className={classes.drawerHeaderLogo}>
									<p>3.Select Poster Structure</p>
									<IconButton onClick={context.closepostersDrawer}>
										<AiOutlineClose />
									</IconButton>
								</div>
								{/* <Divider /> */}

								{context.picSelected ? (
									context.posterFlag ? (
										<div className="lds-ring-container">
											<div className="lds-ring">
												<div></div>
												<div></div>
												<div></div>
												<div></div>
											</div>
										</div>
									) : (
											<div>
												<div
													className={classes.drawerHeaderLogo}
													style={{ padding: '0', height: 'auto', minHeight: 'unset' }}
												>
													<Select


														IconComponent={() => { return (<IoIosArrowDown size="20%" />) }}
														onChange={handleChange} value={opt} style={{ width: '50%', fontSize: 13 }} className='poster-select'>
														<option
															value="all"
															style={{ padding: '10px', margin: '10px 0', cursor: 'pointer' }}
														>
															All Products
													</option>
														<option
															value="fav"
															style={{ padding: '10px', margin: '10px 0', cursor: 'pointer' }}
														>
															Favourits
													</option>
													</Select>
													<button
														className="filters-btn"
														onClick={() => context.openPostersFilters()}
														style={{ width: '50%' }}
													>
														FILTERS <MdFilterList />
													</button>
												</div>
												{/* <Divider /> */}

												<PostersContent products={opt} />
											</div>
										)
								) : (
										<p>You must select a wall first.</p>
									)}
							</div>
							<div
								className="further further-further"
								onClick={() => {
									context.closepostersDrawer();
									context.openFramesDrawer();
								}}
							>
								<div className="further-btn">FURTHER</div>
							</div>
							<div
								className="further further-back"
								onClick={() => {
									context.closepostersDrawer();
									context.openPictureDrawer();
								}}
							>
								<div className="further-btn">Back</div>
							</div>

							{/* <EnvironmentSideBar /> */}
						</Drawer>
					);
				}}
			</MyContext.Consumer>
		</div>
	);
};

export default PostersSidebar;
