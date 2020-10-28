import React from 'react';
import MyContext from '../../../Context/context';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { Modal, Divider, Input } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { ToastContainer, toast } from 'react-toastify';
// import domtoimage from 'dom-to-image';
import htmlToImage from 'html-to-image';

import { FiSave } from 'react-icons/fi';
import { IconContext } from "react-icons";


const useStyles = makeStyles((theme) => ({
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
	},
}));

const SnapSettings = (props) => {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);
	const [val, setVal] = React.useState('');
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
		
	};
	const addSnap = (snap) => {

		props.myfn()
		
		if (val.length < 3) {
			toast.error('Label should have at least three characters', {
				autoClose: 1500,
			});
		} else {
			setOpen(false);
			setTimeout(() => {

				var node = document.getElementById('my-node');
				var img = null;
				const promise = new Promise((resolve, reject) => {
					htmlToImage
						.toPng(node)
						.then(function (dataUrl) {
							// debugger;
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
			}, 1000)
		}
	};
	return (
		<MyContext.Consumer>
			{(context) => {
				return (
					< >
						{/* onClick={context.dimentions ? context.snapSettings() : '' */}
						<div className="header-btn"
							onClick={
								context.saveSelection
									? handleOpen
									: () =>
										toast.error('You must select alleast one poster/frame to save.', {
											autoClose: 1500,
										})
							}
							
						>

							<IconContext.Provider
								value={{ color: 'black', size: '12px' , }}
							>
								<div>
									<FiSave /> {"   "}	Save
											</div>
							</IconContext.Provider>
						</div>
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
						<ToastContainer />
					</>
				);
			}}
		</MyContext.Consumer>
	);
};

export default SnapSettings;