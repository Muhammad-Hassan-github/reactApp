import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { List, Input, ListItem, ListItemText, Drawer, Divider, StepIcon } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MyContext from '../../../Context/context';
import picStructure from '../../../pictureStructure';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { ToastContainer, toast } from 'react-toastify';
// import domtoimage from 'dom-to-image';
import htmlToImage from 'html-to-image';


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
		marginBottom: '100px',
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
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		maxWidth: '500px',
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
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const [openSave, setSaveOpen] = React.useState(false);
	const [picture, setPic] = React.useState('');
	const [val, setVal] = React.useState('');

	const handleOpen = (picture) => {
		setOpen(true);
		setPic(picture);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleSaveOpen = (picture) => {
		setSaveOpen(true);
		setOpen(false);
	};

	const handleSaveClose = () => {
		setSaveOpen(false);
	};

	const addSnap = (snap) => {

		setOpen(false);
		setSaveOpen(false);

		setTimeout(() => {
			var node = document.getElementById('my-node');
			var img = null;
			const promise = new Promise((resolve, reject) => {
				htmlToImage
					.toPng(node)
					.then(function (dataUrl) {
						resolve(true);
						img = dataUrl;
					})
					.catch(function (error) {
						resolve(false);
						console.error('oops, something went wrong!', error);
					});
			});
			promise.then((success) => {
				if (success) {
					snap(val, img);
				} else {
					snap(val);
					toast.error("Image wasn't saved but your settings has been saved");
				}
			});
		}, 1000);
	};

	return (
		<div className="picture-sidebar">
			<MyContext.Consumer>
				{(context) => {
					return (
						<Drawer
							className={classes.drawer}
							variant="persistent"
							anchor="left"
							open={context.pictureDrawer}
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
									<p>2.Select PictureWall</p>
									<IconButton onClick={context.closePictureDrawer}>
										<AiOutlineClose />{' '}
									</IconButton>
								</div>
								{/* <Divider /> */}
								{context.dataFetch ? (
									<div className="lds-ring-container">
										<div className="lds-ring">
											<div></div>
											<div></div>
											<div></div>
											<div></div>
										</div>
									</div>
								) : (
										picStructure.map((pic, ind) => {
											// console.log(pic,ind)
											return (
												<img
													className={`${picStructure.length === ind + 1 ? 'last-pic pic-img' : 'pic-img'
														}`}
													key={pic.src}
													src={pic.src}
													onClick={() => {
												
														if (context.postersSelected) {
															handleOpen(pic);
														} else {
															context.putPictureStructure(pic.dimentions);
														}
													}}
												/>
											);
										})
									)}
							</div>
							{context.wallSelected ? (
								<div
									className="further further-further"
									onClick={() => {
										context.closePictureDrawer();
										context.openpostersDrawer();
									}}
								>
									<div className="further-btn">FURTHER</div>
								</div>
							) : null}
							<div
								className="further further-back"
								onClick={() => {
									context.closePictureDrawer();
									context.openEnvironmentDrawer();
								}}
							>
								<div className="further-btn">BACK</div>
							</div>
							{/* <EnvironmentSideBar /> */}
							<Modal
								aria-labelledby="transition-modal-title"
								aria-describedby="transition-modal-description"
								className={classes.modal}
								open={open}
								onClose={handleClose}
								closeAfterTransition
								BackdropComponent={Backdrop}
								BackdropProps={{
									timeout: 500,
								}}
							>
								<Fade in={open}>
									<div className={classes.paper}>
										<h2 id="transition-modal-title">Do you want to continue</h2>
										<Divider />
										<p id="transition-modal-description">
											THERE ARE CHANGES THAT WERE NOT SAVED AND WILL BE LOST IF YOU CONTINUE. DO
											YOU WANT TO SAVE YOUR Progress?
										</p>
										<p className="header-btn-container">
											<div
												className="header-btn"
												onClick={
													context.saveSelection
														? handleSaveOpen
														: () =>
															toast.error(
																'You must select alleast one poster to save.',
																{
																	autoClose: 1500,
																}
															)
												}
											>
												Save
											</div>
											<div
												className="header-btn"
												onClick={() => {

													context.putPictureStructure(picture.dimentions);
													handleClose();
												}}
											>
												Don't Save(Continue)
											</div>
											<div className="header-btn" onClick={handleClose}>
												Cancel
											</div>
										</p>
									</div>
								</Fade>
							</Modal>
							<Modal
								aria-labelledby="transition-modal-title"
								aria-describedby="transition-modal-description"
								className={classes.modal}
								open={openSave}
								onClose={handleSaveClose}
								closeAfterTransition
								BackdropComponent={Backdrop}
								BackdropProps={{
									timeout: 500,
								}}
							>
								<Fade in={openSave}>
									<div className={classes.paper}>
										<h2 id="transition-modal-title">Picture Wall Save</h2>
										<Divider />
										{/* <p id="transition-modal-description">

									</p> */}
										<p className="snap-btn-container">
											<Input
												placeholder="label"
												label="label"
												className="input"
												type="text"
												value={val}
												onChange={(e) => setVal(e.target.value)}
											/>
											<button className="snap-btn" onClick={() => addSnap(context.snapSettings)}>
												Save
											</button>
										</p>
									</div>
								</Fade>
							</Modal>
						</Drawer>
					);
				}}
			</MyContext.Consumer>
		</div>
	);
};

export default FramesSidebar;
