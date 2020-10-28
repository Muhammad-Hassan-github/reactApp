import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { List, ListItem, ListItemText, Drawer, Divider, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MyContext from '../../../Context/context';
import { FaCheck } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import * as images from '../../../../assets/images/env_imgs';
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
const EnvironmentSidebar = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const [selected1, setSelecte1] = React.useState(images.img1[0]);
	const [selected2, setSelecte2] = React.useState(images.img2[0]);
	const [selected3, setSelecte3] = React.useState(images.img3[0]);
	const [selected4, setSelecte4] = React.useState(images.img4[0]);
	const [selected5, setSelecte5] = React.useState(images.img5[0]);
	const [selected6, setSelecte6] = React.useState(images.img6[0]);
	const [selected7, setSelecte7] = React.useState(images.img7[0]);
	const [selected, setSelected] = React.useState({
		box: -1,
		ind: 0,
	});
	return (
		<div className="environment-sidebar">
			<MyContext.Consumer>
				{(context) => {
					return (
						<Drawer
							className={classes.drawer}
							variant="persistent"
							anchor="left"
							open={context.evironmentDrawer}
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
									<p>1.Select Environment Image</p>

									<IconButton onClick={context.closeEnvironmentDrawer}>
										<AiOutlineClose />{' '}
									</IconButton>
								</div>
								<Divider />
								<div className="env-img-container" style={{ paddingBottom: 50 }}>
									<div className="env-img-head">
										<img
											className="env-img"
											src={selected1}
											onClick={() => {
												context.setContentImg(selected1);
												setSelected({ box: 1, ind: 0 });
											}}
										/>
										{selected.box === 1 ? (
											<div className="box-container box-1" >
												{images.img1.map((img, ind) => {
													return (
														<div
															className="box"
															key={img + '-' + ind}
															onClick={() => {
																context.setContentImg(img);
																setSelected({ box: 1, ind: ind });
															}}
														>
															{selected.box === 1 && selected.ind === ind ? (
																<FaCheck />
															) : null}
														</div>
													);
												})}
											</div>
										) : null}
									</div>
									<div className="env-img-head">
										<img
											className="env-img"
											src={selected2}
											onClick={() => {
												context.setContentImg(selected2);
												setSelected({ box: 2, ind: 0 });
											}}
										/>
										{selected.box === 2 ? (
											<div className="box-container  box-2">
												{images.img2.map((img, ind) => {
													return (
														<div
															className="box"
															key={img + '-' + ind}
															onClick={() => {
																context.setContentImg(img);
																setSelected({ box: 2, ind: ind });
															}}
														>
															{selected.box === 2 && selected.ind === ind ? (
																<FaCheck />
															) : null}
														</div>
													);
												})}
											</div>
										) : null}
									</div>
									<div className="env-img-head">
										<img
											className="env-img"
											src={selected3}
											onClick={() => {
												context.setContentImg(selected3);
												setSelected({ box: 3, ind: 0 });
											}}
										/>
										{selected.box === 3 ? (
											<div className="box-container  box-3">
												{images.img3.map((img, ind) => {
													return (
														<div
															className="box box-grey"
															key={img + '-' + ind}
															onClick={() => {
																context.setContentImg(img);
																setSelected({ box: 3, ind: ind });
															}}
														>
															{selected.box === 3 && selected.ind === ind ? (
																<FaCheck />
															) : null}
														</div>
													);
												})}
											</div>
										) : null}
									</div>
									<div className="env-img-head">
										<img
											className="env-img"
											src={selected4}
											onClick={() => {
												context.setContentImg(selected4);
												setSelected({ box: 4, ind: 0 });
											}}
										/>
										{selected.box === 4 ? (
											<div className="box-container  box-4">
												{images.img4.map((img, ind) => {
													return (
														<div
															className="box box-blue"
															key={img + '-' + ind}
															onClick={() => {
																context.setContentImg(img);
																setSelected({ box: 4, ind: ind });
															}}
														>
															{selected.box === 4 && selected.ind === ind ? (
																<FaCheck />
															) : null}
														</div>
													);
												})}
											</div>
										) : null}
									</div>
									<div className="env-img-head">
										<img
											className="env-img"
											src={selected5}
											onClick={() => {
												context.setContentImg(selected5);
												setSelected({ box: 5, ind: 0 });
											}}
										/>
										{selected.box === 5 ? (
											<div className="box-container  box-5">
												{images.img5.map((img, ind) => {
													return (
														<div
															className="box"
															key={img + '-' + ind}
															onClick={() => {
																context.setContentImg(img);
																setSelected({ box: 5, ind: ind });
															}}
														>
															{selected.box === 5 && selected.ind === ind ? (
																<FaCheck />
															) : null}
														</div>
													);
												})}
											</div>
										) : null}
									</div>
									<div className="env-img-head">
										<img
											className="env-img"
											src={selected6}
											onClick={() => {
												context.setContentImg(selected6);
												setSelected({ box: 6, ind: 0 });
											}}
										/>
										{selected.box === 6 ? (
											<div className="box-container  box-6">
												{images.img6.map((img, ind) => {
													return (
														<div
															className="box box-grey"
															key={img + '-' + ind}
															onClick={() => {
																context.setContentImg(img);
																setSelected({ box: 6, ind: ind });
															}}
														>
															{selected.box === 6 && selected.ind === ind ? (
																<FaCheck />
															) : null}
														</div>
													);
												})}
											</div>
										) : null}
									</div>
									<div className="env-img-head last-head">
										<img
											className="env-img"
											src={selected7}
											onClick={() => {
												context.setContentImg(selected7);
												setSelected({ box: 7, ind: 0 });
											}}
										/>
										{selected.box === 7 ? (
											<div className="box-container  box-7">
												{images.img7.map((img, ind) => {
													return (
														<div
															key={img + '-' + ind}
															className="box box-grey"
															onClick={() => {
																context.setContentImg(img);
																setSelected({ box: 7, ind: ind });
															}}
														>
															{selected.box === 7 && selected.ind === ind ? (
																<FaCheck />
															) : null}
														</div>
													);
												})}
											</div>
										) : null}
									</div>
								</div>
							</div>
							{context.changed ? (
								<div className="further-container">
									<div
										className="further further-back"
										onClick={() => {
											context.closeEnvironmentDrawer();
											context.openPictureDrawer();
										}}
									>
										<div className="further-btn further-env">FURTHER</div>
									</div>
								</div>
							) : null}
							{/* <EnvironmentSideBar /> */}
						</Drawer>
					);
				}}
			</MyContext.Consumer>
		</div>
	);
};

export default EnvironmentSidebar;
