import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import './frontPage.css';
import Content from './Content/content';
import Header from './Header/header';
import SideBar from './SideBar/sidebar';
import MyContext from '../Context/context';
import { useBeforeunload } from 'react-beforeunload';
import xyz from '../../assets/images/powerd.png'
import '../../Provider/spinner.css';
const drawerWidth = '19em';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		color: 'unset',
		backgroundColor: '#fafafa',
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth})`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
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
		height:'calc(100vh - 40px)',
		overflowY:'scroll'
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
		marginLeft: -drawerWidth,
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

export default function PersistentDrawerLeft() {
	const classes = useStyles();
	const theme = useTheme();
	const [changed, setChanged] = React.useState(false);
	
	// useBeforeunload(() => {if(changed) return "You'll lose your data!"});

	return (
		<MyContext.Consumer>
			{(context) => {
				if (!changed && context.changed) {
					setChanged(context.changed);
				}
				return (
					<div className={classes.root}>
						{context.displaySpin ? (
							<div className="my-bar">
								<div className="my-progress-bar"></div>
							</div>
						) : null}
						<CssBaseline />
						<AppBar
							position="fixed"
							className={clsx(classes.appBar, {
								[classes.appBarShift]: context.mainDrawer,
							})}
						>
							<Toolbar className={classes.toolbarFlex}>
								<IconButton
									color="inherit"
									aria-label="open drawer"
									onClick={context.openMainDrawer}
									edge="start"
									className={clsx(classes.menuButton, context.mainDrawer && classes.hide)}
								>
									<MenuIcon />
								</IconButton>
								<Header />
							</Toolbar>
						</AppBar>
						<Drawer
							className={classes.drawer}
							variant="persistent"
							anchor="left"
							open={context.mainDrawer}
							classes={{
								paper: classes.drawerPaper,
							}}
						>
							<div className={classes.drawerHeaderLogo}>
								<Typography variant="h6">
								<a href="https://postermuehle.de/">										<img
												style={{ height: '30px',marginTop:"5px"  }}
											src="https://postermuehle.de/wp-content/uploads/2020/09/Logo_2.png"
										/>
										</a>
								</Typography>

								{/* <IconButton onClick={context.closeMainDrawer}>
									{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
								</IconButton> */}
							</div>
							
							<SideBar />
						</Drawer>
						<main
							className={clsx(classes.content, {
								[classes.contentShift]: context.mainDrawer,
							})}
						>
							<div className={classes.drawerHeader} />
							<Content />
						</main>
						{/* <div className="header-header-logo">
							<img src={xyz} />
						</div> */}
					</div>
				);
			}}
		</MyContext.Consumer>
	);
}
