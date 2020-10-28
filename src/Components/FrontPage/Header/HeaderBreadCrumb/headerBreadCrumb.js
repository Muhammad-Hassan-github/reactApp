import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles((theme) => ({
	link: {
		display: 'flex',
		fontSize: '10px',
		cursor: 'pointer',
		color: 'black',
		opacity: .6

	},
	icon: {
		marginRight: theme.spacing(0.5),
		width: 20,
		height: 20,
	},
}));

function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
	const classes = useStyles();

	return (
		<Breadcrumbs aria-label="breadcrumb" style={{ marginLeft: '8px' }}>
			{/* <Link color="inherit" href="/" onClick={handleClick} className={classes.link}> */}
				
				<a href="https://postermuehle.de/wandbrilder" style={{textDecoration:"none"}} className={classes.link} >WANDBILDER</a>

			{/* </Link> */}
			{/* <Link color="inherit" href="https://postermuehle.de/getting-started/installation/" onClick={handleClick} className={classes.link}> */}
				
				<a href="https://postermuehle.de/bilderwande" style={{textDecoration:"none"}} className={classes.link} >BILDERWÄNDE</a>
			{/* </Link> */}
			{/* <Typography color="textPrimary" className={classes.link}> */}
				
				<a href="https://postermuehle.de/komponiere-deine-bilderwand" style={{textDecoration:"none"}} className={classes.link} >KOMPONIERE DEINE BILDERWAND</a>

			{/* </Typography> */}
		</Breadcrumbs>
	);
}
