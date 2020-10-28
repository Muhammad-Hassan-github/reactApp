import React, { useEffect } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { List, ListItem, ListItemText, Drawer, Divider } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MyContext from '../../../Context/context';
import { AiOutlineClose } from 'react-icons/ai';
import FramesContent from './FramesContent/framesContent';
import './framesSidebar.css';
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

const FramesSidebar = (props) => {
	const classes = useStyles();
	const [selectedEl, setSelectedEl] = React.useState(0);
	const theme = useTheme();
	return (
		<div className="frames-sidebar">
			<MyContext.Consumer>
				{(context) => {
					return (
						<Drawer
							className={classes.drawer}
							variant="persistent"
							anchor="left"
							open={context.framesDrawer}
							classes={{
								paper: classes.drawerPaper,
							}}
						>
							<div className="drawer-scroll-cotainer">
								<div className={classes.drawerHeaderLogo}>
									<a href="https://postermuehle.de/">										<img
										style={{ height: '30px' }}
										src="https://postermuehle.de/wp-content/uploads/2020/09/Logo_2.png"
									/>
									</a>
								</div>
								{/* <Divider /> */}

								<div className={classes.drawerHeaderLogo}>
									<p>4.Select Frames</p>
									<IconButton
										onClick={() => {
											setSelectedEl(0);
											context.closeFramesDrawer();
										}}
									>
										<AiOutlineClose />
									</IconButton>
								</div>
								{/* <Divider /> */}

								{context.dataFetchFrames ? (
									<div className="lds-ring-container">
										<div className="lds-ring">
											<div></div>
											<div></div>
											<div></div>
											<div></div>
										</div>
									</div>
								) : (
										<FramesContent setSelected={setSelectedEl} selectedEl={selectedEl} />
									)}
							</div>
							<div
								className="further further-further"
								onClick={() => {
									setSelectedEl(0);
									context.closeFramesDrawer();
								}}
							>
								<div className="further-btn">FURTHER</div>
							</div>
							<div
								className="further further-back"
								onClick={() => {
									setSelectedEl(0);
									context.closeFramesDrawer();
									context.openpostersDrawer();
								}}
							>
								<div className="further-btn">BACK</div>
							</div>
							{/* <EnvironmentSideBar /> */}
						</Drawer>
					);
				}}
			</MyContext.Consumer>
		</div>
	);
};

export default FramesSidebar;
