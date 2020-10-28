import React from 'react';
import './sidebar.css';
import { List, ListItem, ListItemText, Drawer, Divider } from '@material-ui/core';

import { AiOutlinePicture } from 'react-icons/ai';
import { GiBrickWall } from 'react-icons/gi';
import { RiArticleLine } from 'react-icons/ri';
import { GiStickFrame } from 'react-icons/gi';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EnvironmentSidebar from './EnvironmentSidbar/environmentSidebar';
import PictureWallSideBar from './PictureWallSidebar/pictureWall';
import SelectPostersSidebar from './PostersSidebar/postersSidebar';
import SelectFramesSidebar from './FramesSidebar/framesSidebar';
import MyContext from '../../Context/context';
import PostersFilterSidebar from './PostersFilterSidebar/postersFilterSidebar'
class SideBar extends React.Component {

	
	render() {
		return (
			<div className="side-bar">
				<MyContext.Consumer>
					{(context) => {

						return (
							<div>
								<List className="sidebar-list">
									<ListItem button className="list-item" onClick={context.openEnvironmentDrawer}>
										<div className="list-item-inner">
											<div>
												<AiOutlinePicture className="sidebar-icon" />
											</div>
											<div>1</div>
											<div>
												<ListItemText
													className="list-text"
													primary="SELECT ENVIRONMENT IMAGE"
												/>
											</div>
										</div>
									</ListItem>
									<EnvironmentSidebar />

									<ListItem button onClick={this.openPictureWall} onClick={context.openPictureDrawer}>
										<div className="list-item-inner">
											<AiOutlinePicture className="sidebar-icon" />
											<div>2</div>
											<ListItemText className="list-text" primary="SELECT PICTURE WALL" />
										</div>
									</ListItem>
									<PictureWallSideBar />

									<ListItem button onClick={context.openpostersDrawer}>
										<div className="list-item-inner">
											<GiBrickWall className="sidebar-icon" />

											<div>3</div>
											<ListItemText className="list-text" primary="SELECT POSTERS" />
										</div>
									</ListItem>
									<SelectPostersSidebar />
									<PostersFilterSidebar/>
									<ListItem button onClick={this.openFrames} onClick={context.openFramesDrawer}>
										<div className="list-item-inner">
											<GiStickFrame className="sidebar-icon" />

											<div>4</div>
											<ListItemText className="list-text" primary="SELECT FRAMES" />
										</div>
									</ListItem>
									<SelectFramesSidebar />

								
								</List>
								<div className="add-to-cart-btn" onClick={context.addToCart}>
									<div>{context.totalPrice} €</div>
									<div>
										<div className="add-cart-inner">ADD TO CART</div>
									</div>
								</div>
							</div>
						);
					}}
				</MyContext.Consumer>
			</div>
		);
	}
}

export default SideBar;
