import React from 'react';
import MyContext from '../../../../Context/context';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ListItem, List, Divider, Typography, Drawer, IconButton, Checkbox } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
		justifyContent: 'space-between',
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

const FilterSidebar = () => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<MyContext.Consumer>
			{(context) => {
				return (
					<div>
						<Drawer
							className="drawer-item"
							variant="persistent"
							anchor="left"
							open={context.filterDrawer}
							classes={{
								paper: classes.drawerPaper,
							}}
						>
							<div className={classes.drawerHeaderLogo}>
								<Typography variant="h6">Filters</Typography>

								<IconButton onClick={context.closeFiltersDrawer}>
									{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
								</IconButton>
							</div>
							<Divider />
							<div className="filters-heading">Category</div>
							<List className="sidebar-list">
								{context.filters
									? context.filters.map((el) => {
											return <ListItem key = {el + Math.random()} >
												<input type = 'checkbox' onClick ={context.checkBoxTrigger}  checked = {context.filterArr.indexOf(el) !== -1} value={el} />
												{el}
											</ListItem>;
									  })
									: null}
							</List>
						</Drawer>
					</div>
				);
			}}
		</MyContext.Consumer>
	);
};

export default FilterSidebar;
