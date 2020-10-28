import React, { useContext, useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import MyContext from '../../../../Context/context';
import { Select, Divider } from '@material-ui/core';
import { toast } from 'react-toastify';
import { Portrait } from '@material-ui/icons';
const { Option } = Select;
class PostersContent extends React.Component {
	state = {
		favAdded: false,
		opt: 'all',
	};

	handleChange = (e) => {
		this.setState({ opt: e.target.value });
	};
	 addToFav = (id) => {

		function setCookie(cname,cvalue,exdays) {
			var d = new Date();
			d.setTime(d.getTime() + (exdays*24*60*60*1000));
			var expires = "expires=" + d.toGMTString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		  }
		  
		  function getCookie(cname) {
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for(var i = 0; i < ca.length; i++) {
			  var c = ca[i];
			  while (c.charAt(0) == ' ') {
				c = c.substring(1);
			  }
			  if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			  }
			}
			return "";
		  }

		let favItems = [...JSON.parse(localStorage.getItem('fav'))];
		// let fav = [getCookie("max_woo_wishlist_product")];
		// console.log(fav)
		if (favItems.indexOf(id) === -1) {
			localStorage.setItem('fav', JSON.stringify([...favItems, id]));
		setCookie("max_woo_wishlist_product", [...favItems, id] , 30);

		} else {
			//do somehing
			let ind = null;
			for (let i = 0; i < favItems.length && !ind; i++) {
				if (favItems[i] === id) {
					ind = i;
				}
			}
			favItems.splice(ind, 1);
			try {
				localStorage.setItem('fav', JSON.stringify([...favItems]));
		setCookie("max_woo_wishlist_product", [...favItems] , 30);

			} catch (e) {
				if (e) {
					toast.error('LocalStorage is full');
				}
			}
		}
		this.setState({
			favAdd: !this.state.favAdd,
		});
	};
	 htmlEl = (el, context) => {
		const favItems = JSON.parse(localStorage.getItem('fav'));

		const price = el.sale_price ? el.sale_price + '€' : el.price ? el.price + '€' : 'Price not specfied.';
		return (
			<div key={el.id} className="Poster-arr-el" style={{ width: "30%", height: '100%', maxHeight: '97.22px', display: 'flex', alignItems: "center", flexDirection: "column", justifyContent: "center" }} >
				<img
					onClick={() => {
						context.posterAdded(el.images[1] ? el.images[1].src : el.images[0].src, el)
						// console.log(el)
					}}
					src={el.images[0].src}
					style={{
						width: '100%',

						// height: '100%',
						// maxHeight: '97.22px',

					}}
				/>
				<div className="Poster-price" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{price}
					<div className="Poster-heart" style={{ paddingTop: 6, marginLeft: "20%" }} onClick={() => this.addToFav(el.id)}>
						{favItems.indexOf(el.id) !== -1 ? <AiFillHeart size={'20px'} /> : <AiOutlineHeart size={'20px'} />}
					</div>
				</div>
			</div>
		);
	};

	
 getPicture = () => {
		
	}
	render() {

	return (

		<div className="Poster-content" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "nowrap", maxWidth: 900, margin: "0 auto" }}>

			<MyContext.Consumer>
				{(context) => {

					const favItems = JSON.parse(localStorage.getItem('fav'));
					return (
						<div className="Poster-content-inner">
							{context.postersArr.length > 0 ? (
								<div className="Poster-flex">
									{this.props.products === 'fav'
										? context.postersArr.map((el) => {
											if (el.images[0] && favItems.indexOf(el.id) !== -1) {
												return this.htmlEl(el, context);
											}
										})
										: this.props.products === 'all'
											? context.postersArr.map((el) => {
												if (el.images[1]) {
													return this.htmlEl(el, context);
												} else if (el.images[0]) {
													return this.htmlEl(el, context);
												}
											})
											: null}
								</div>
							) : (
									<div>No Products were found.</div>
								)}
						</div>
					);
				}}
			</MyContext.Consumer>
		</div>
	);

}
}

export default PostersContent;
