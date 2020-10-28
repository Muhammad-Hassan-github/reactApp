import React from 'react';
import { FaCaretSquareRight, FaGrinTongueSquint, FaResolving, FaSearch } from 'react-icons/fa';
import { debug } from 'request';
import MyContext from '../Components/Context/context';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './spinner.css';
import { Landscape } from '@material-ui/icons';
// const key = 'ck_06f265699486abd746ead154661f30b57a1f790e';
// const secret = 'cs_c8a2a9cbdcfe220d936ba2bb74b1a5300dba081b';

const axios = require('axios');


const key = 'ck_5cf1bb6ccc7f53da14ba077e130499ac6eb4a43b';
const secret = 'cs_3f3d89a82a59e9254a9e67cef882478edf8e2e0d';


class Context extends React.Component {
	constructor(props) {
		super(props);
		const cart = JSON.parse(localStorage.getItem('cart'));
		const saved = JSON.parse(localStorage.getItem('snap-settings'));
		const favItems = JSON.parse(localStorage.getItem('fav'));
		if (!favItems) {
			try {
				localStorage.setItem('fav', JSON.stringify([]));
			} catch (e) {
				if (e) {
					toast.error('LocalStorage is fulle');
				}
			}
		}
		if (!cart) {
			try {
				localStorage.setItem('cart', JSON.stringify([]));
			} catch (e) {
				if (e) {
					toast.error('LocalStorage is full');
				}
			}
		}
		if (!saved) {
			try {
				localStorage.setItem('snap-settings', JSON.stringify([]));
			} catch (e) {
				if (e) {
					toast.error('LocalStorage is full');
				}
			}
		}

		this.state = {
			totalPrice: 0,
			evironmentDrawer: false,
			pictureDrawer: false,
			postersDrawer: false,
			framesDrawer: false,
			content: true,
			content_img: 'https://res.cloudinary.com/desenio/image/upload/w_1400/backgrounds/welcome-bg.jpg?v=1',
			editing: false,
			changed: false,
			mainDrawer: true,
			content_img_overlay: '',
			picSelected: false,
			cart: cart ? cart : [],
			dimentions: false,
			data: [],
			wholeData: [],
			filterDrawer: false,
			anchorEl: null,
			cartOpen: false,
			runFunc: false,
			filter: [],
			filterArr: [],
			shareLoading: false,
			orientation: "landscape",
			postersArr: []
		};
	}

	SetpostersArr = (data) => {
		this.setState({ postersArr: data })

	}
	getPictures = () => {
		// console.log(this.state.data)


	}

	openLoading = (data) => {

		this.setState({ shareLoading: data })
	}
	SetOrientation = (data) => {
		this.setState({ orientation: data })
	}
	openCart = (event) => {
		this.setState({
			anchorEl: this.state.runFunc ? event : event.target,
			cartOpen: true,
			runFunc: false,
		});
	};
	closeCart = (event) => {
		this.setState({
			anchorEl: null,
			cartOpen: false,
			runFunc: false,
		});
	};

	componentDidMount = () => {
		let data = [];
		this.setState({
			dataFetch: true,
			posterFlag: true,
			dataFetchFrames: true,
		});
		let filters = [];
		fetch(
			`https://postermuehle.de/wp-json/wc/v3/products/categories?parent=${16}&consumer_key=${key}&consumer_secret=${secret}`
		)
			.then((res) => res.json())
			.then((resp) => {
				resp.forEach((el) => {
					filters = [...filters, el.name];
				});

			});
		fetch(
			`https://postermuehle.de/wp-json/wc/v3/products?per_page=${99}&consumer_key=${key}&consumer_secret=${secret}`
		)
			.then((res) => res.json())
			.then((response) => {

				if (response.err) {
					toast.error('There was error in retrieving products.');
					this.setState({
						dataFetch: false,
					});
				} else {
					this.setState({
						dataFetch: false,
					});

					const promise = new Promise((resolve, reject) => {
						response.forEach(async (element, index) => {
							// if (element.name.toLowerCase() === 'article-7') {
							// 	debugger;
							// }
							if (element.type !== 'simple' && element.categories.length > 0) {
								//Set it for Sub Categories
								let posterItem = false;
								for (let i = 0; i < element.categories.length; i++) {
									if (
										element.categories[i].name.toLowerCase() === 'poster' ||
										element.categories[i].name.toLowerCase() === 'posters'
									) {
										posterItem = true;
									}
								}
								if (posterItem) {
									let checkIndex = 0;

									await fetch(
										`https://postermuehle.de/wp-json/wc/v3/products/${element.id
										}/variations?per_page=${99}&consumer_key=${key}&consumer_secret=${secret}`
									)
										.then((res) => res.json())
										.then((resp) => {
											// console.log(resp)
											if (resp.err) {
												toast.error('There was some error in retrieving data from server.');
											} else {
												if (resp.length > 0) {
													resp.forEach(async (el, i) => {
														// await fetch(
														// 	`https://postermuehle.de/wp-json/wc/v3/products/${
														// 		el.id
														// 	}/categories?parent=${16}&consumer_key=${key}&consumer_secret=${secret}`
														// )
														// 	.then((res) => res.json())
														// 	.then((resp) => {
														// 		console.log(resp);
														// 	});

														if (resp[i].attributes.length > 0) {
															resp[i].categories = element.categories;
															resp[i].images = element.images;
															resp[i].variation = resp[i].attributes[0].option;
															resp[i].productId = element.id;
															resp[i].name = element.name;
															data.push(resp[i]);

															if (response.length === index + 1) {
																resolve();
															}
														} else {
															resp[i].categories = element.categories;
															resp[i].images = element.images;
															resp[i].variation = 'all';
															resp[i].productId = element.id;
															resp[i].name = element.name;

															data.push(resp[i]);

															if (response.length === index + 1) {
																resolve();
															}
														}
														// 	resp[i].categories = [{ name: 'frames' }];
														// 	resp[i].images = element.images;
														// 	data.push(resp[i]);
														// }
													});
												}
											}
											checkIndex++;
										});
									// postersIds.push({ id: el.id, images: el.images });
								} else {
									data.push(element);

									if (response.length === index + 1) {
										resolve();
									}
								}
							} else {
								if (response.length === index + 1) {
									resolve();
								}
							}
						});
					});
					promise.then((success) => {
						this.setState({
							wholeData: data,
							posterFlag: false,
							dataFetchFrames: false,
							filters: filters,
						});
					});
				}
			});

		// fetch('/get_data')
		// 	.then((res) => res.json())
		// 	.then((resp) => {
		// 		if (resp.success) {
		// 			this.setState({
		// 				data: resp,
		// 			});
		// 		} else {
		// 			alert('There was some error');
		// 		}
		// 	});
	};

	setData = (data) => {
		this.setState({
			data: data,
		});
	};
	reset = () => {

		this.setState({
			totalPrice: 0,
			evironmentDrawer: false,
			pictureDrawer: false,
			postersDrawer: false,
			framesDrawer: false,
			content: true,
			content_img: 'https://res.cloudinary.com/desenio/image/upload/w_1400/backgrounds/welcome-bg.jpg?v=1',
			editing: false,
			changed: false,
			mainDrawer: true,
			content_img_overlay: '',
			picSelected: false,
			// cart: [],
			dimentions: false,
			data: [],
			// wholeData: [],
			postersSelected: false,

			wallSelected: false,
			filterDrawer: false,
			cartOpen: false,
			runFunc: false,
			filter: [],
			filterArr: [],
		});
	};
	openMainDrawer = () => {
		this.setState({
			mainDrawer: true,
		});
	};
	closeMainDrawer = () => {
		this.setState({
			mainDrawer: false,
		});
	};

	openEnvironmentDrawer = () => {
		this.setState({
			evironmentDrawer: true,
			content: false,
		});
	};
	closeEnvironmentDrawer = () => {
		this.setState({
			evironmentDrawer: false,
			content: !this.state.editing,
		});
	};
	openPictureDrawer = () => {
		this.setState({
			pictureDrawer: true,
			content: false,
		});
	};
	closePictureDrawer = () => {
		this.setState({
			pictureDrawer: false,
			content: !this.state.editing,
		});
	};
	openpostersDrawer = () => {
		this.setState({
			postersDrawer: true,
			content: false,
		});
	};
	closepostersDrawer = () => {
		this.setState((prevState) => {
			const newDimentions = { ...prevState.dimentions };
			newDimentions.el = null;
			return {
				postersDrawer: false,
				content: !this.state.editing,
				picSelected: false,
				dimentions: newDimentions,
			};
		});
	};
	openFramesDrawer = (variation) => {
		let data = this.state.wholeData.filter((el) => {
			if (el.categories[0].name === 'frames') {
				return el;
			}
		});
		this.setState({
			framesDrawer: true,
			content: false,
			data: [...data],
		});
	};
	closeFramesDrawer = () => {
		this.setState({
			framesDrawer: false,
			content: !this.state.editing,
		});
	};
	finished = () => {
		this.setState({
			evironmentDrawer: false,
			pictureDrawer: false,
			postersDrawer: false,
			framesDrawer: false,
		});
	};
	setContentImg = (img) => {
		this.setState({
			content_img: img,
			changed: true,
		});
	};
	putPictureStructure = (dimentions) => {
		if (
			this.state.content_img ===
			'https://res.cloudinary.com/desenio/image/upload/w_1400/backgrounds/welcome-bg.jpg?v=1'
		) {
			this.setState({
				dimentions: { dimentions: dimentions, el: null, postersSrc: [], framesSrc: [], Poster: [], frames: [] },
				changed: true,
				content_img: 'https://res.cloudinary.com/desenio/image/upload/w_1400/backgrounds/10-grey.jpg',
				framesSelected: false,
				wallSelected: true,
				totalPrice: 0,
				saveSelection: false,
				postersSelected: false,
			});
		} else {
			this.setState({
				dimentions: { dimentions: dimentions, el: null, postersSrc: [], framesSrc: [], Poster: [], frames: [] },
				el: null,
				changed: true,
				framesSelected: false,
				wallSelected: true,
				totalPrice: 0,
				saveSelection: false,
				postersSelected: false,
			});
		}
	};
	handleSelectPicture = (givendimentions, val, variation) => {

		const promise = new Promise((resolved, reject) => {
			this.openMainDrawer();
			this.closePictureDrawer();
			this.openpostersDrawer();

			let dimentios = variation.split("x");
			let width = parseInt(dimentios[0])
			let height = parseInt(dimentios[1])

			if (width > height) {

				this.SetOrientation("landscape")
				// console.log("landscape")
			}
			else {
				this.SetOrientation("portrait")



			}




			const data = this.state.wholeData.filter((el) => {
				let posterCheck = false;

				for (let i = 0; i < el.categories.length; i++) {
					if (
						(el.categories[i].name.toLowerCase() === 'poster' ||
							el.categories[i].name.toLowerCase() === 'posters') &&
						el.variation === variation
					) {
						posterCheck = true;
					}

				}
				if (posterCheck) {
					return el;
				}


			});

			this.setState((prevState) => {
				const newDimentions = { ...prevState.dimentions };
				// if (!noVal) {
				newDimentions.el = val;
				// }
				return {
					variation: variation || this.state.variation,
					picSelected: true,
					dimentions: newDimentions,
					data: data,
				};
			});

			resolved(true)


		})
		promise.then((success) => {

			// console.log("data", this.state.data)
			// start

			let postersArr = [];
			if (this.state.data ? this.state.data.length > 0 : false) {
				this.state.data.forEach((dataEl, index) => {

					if (dataEl.categories.length > 0) {
						let posterCheck = false;
						for (let i = 0; i < dataEl.categories.length; i++) {
							if (
								dataEl.categories[i].name.toLowerCase() === 'poster' ||
								dataEl.categories[i].name.toLowerCase() === 'posters'
							) {
								posterCheck = true;
							}
						}

						let imageOrientation;
						let img = new Image();
						img.src = dataEl.image.src;

						const promise = new Promise((resolve, reject) => {


							img.onload = function () {

								if (img.naturalWidth > img.naturalHeight) {
									imageOrientation = "landscape"
									resolve(true)

								}
								else {
									imageOrientation = "portrait"
									resolve(true)

								}

							}

						})
						promise.then((success) => {

							// console.log(img.src, img.naturalWidth, img.naturalHeight)
							if (posterCheck) {
								// console.log(this.state.orientation , imageOrientation)
								if (this.state.orientation.toString() === imageOrientation) {

									postersArr.push(dataEl)


								}


							}
							if (this.state.data.length === index + 1) {
								// console.log(postersArr)
								this.SetpostersArr(postersArr);
							}

						});



					}






				});
			}
			else {
				this.SetpostersArr([]);

			}
			//  end
		})

	};
	posterAdded = (src, poster) => {
		let totalPrice = this.state.totalPrice;
		if (this.state.dimentions.Poster.length > 0) {
			this.state.dimentions.Poster.forEach((poster) => {
				if (poster) {
					totalPrice -= poster.price;
				}
			});
		}
		this.setState((prevState) => {
			const newDimentions = { ...prevState.dimentions };
			newDimentions.postersSrc[newDimentions.el - 1] = src;
			newDimentions.Poster[newDimentions.el - 1] = poster;
			newDimentions.Poster[newDimentions.el - 1].qty = 1;
			newDimentions.Poster.forEach((poster) => {
				if (poster) {
					totalPrice += parseInt(poster.sale_price ? poster.sale_price : poster.price);
				}
			});
			return {
				dimentions: newDimentions,
				framesSelected: false,
				totalPrice: totalPrice,
				saveSelection: true,
				postersSelected: true,
			};
		});
	};
	findVariation = (dimention, el) => {
		switch (dimention) {
			case '2-50x70': {
				return '50x70';
			}
			case '2-70x100': {
				return '70x100';
			}
			case '3-50x70': {
				return '50x70';
			}
			case '3-mixed': {
				if (el == 1) {
					return '70x100';
				} else {
					return '50x70';
				}
			}
			case '4-30x40': {
				return '30x40';
			}
			case '4-mixed': {
				if (el === 1 || el === 2) {
					return '50x70';
				} else {
					return '30x40';
				}
			}
			case '4-mixed-2': {
				if (el === 0 || el === 2) {
					return '50x70';
				} else if (el === 1) {
					return '30x40';
				} else {
					return '70x100';
				}
			}
			case '4-mixed-3': {
				if (el === 0) {
					return '50x70';
				} else if (el === 1) {
					return '50x50';
				} else if (el === 2) {
					return '30x40';
				} else {
					return '13x18';
				}
			}
			case '5-mixed': {
				if (el === 1 || el === 2) {
					return '30x40';
				} else if (el === 0) {
					return '21x30';
				} else if (el === 3) {
					return '70x100';
				} else {
					return '50x70';
				}
			}
			case '8-large-wall': {
				switch (el) {
					case 0: {
						return '40x50';
					}
					case 1: {
						return '70x100';
					}
					case 2: {
						return '50x70';
					}
					case 3: {
						return '50x70';
					}
					case 4: {
						return '30x40';
					}
					case 5: {
						return '21x30';
					}
					case 6: {
						return '40x50';
					}

					default: {
						return '30x40';
					}
				}
			}
		}
	};
	frameAdded = (src, frame, selectedEl) => {
		if (frame) {
			this.setState({
				displaySpin: true,
			});
			let flag = true;

			let totalPrice = this.state.totalPrice;
			if (this.state.dimentions.frames.length > 0) {
				this.state.dimentions.frames.forEach((myframe) => {
					if (myframe) {
						totalPrice -= myframe.price;
					}
				});
			}
			const newDimentions = { ...this.state.dimentions };
			const totalEl = this.state.dimentions.dimentions.slice(0, 1);
			const promise = new Promise((resolve, reject) => {
				fetch(
					`https://postermuehle.de/wp-json/wc/v3/products/${frame.id
					}/variations?per_page=${99}&consumer_key=${key}&consumer_secret=${secret}`
				)
					.then((res) => res.json())
					.then((resp) => {
						if (resp.err) {
							toast.error('There was some error in retrieving data from server.');
						} else {
							if (resp.length > 0) {
								if (selectedEl === 0) {
									Array.from({ length: totalEl }).forEach((arr, ind) => {
										resp.forEach((el, i) => {
											if (resp[i].attributes.length > 0) {
												if (
													this.findVariation(this.state.dimentions.dimentions, ind) ===
													resp[i].attributes[0].option
												) {
													resp[i].categories = [{ name: 'frames' }];
													resp[i].images = frame.images;
													resp[i].variation = resp[i].attributes[0].option;
													resp[i].productId = frame.id;
													resp[i].qty = 1;
													resp[i].name = frame.name;
													newDimentions.framesSrc[ind] = src;
													newDimentions.frames[ind] = resp[i];
													flag = false;
												}
											}
											if (+totalEl === ind + 1) {
												resolve();
											}
										});
									});
								} else {
									resp.forEach((el, i) => {
										if (resp[i].attributes.length > 0) {
											if (
												this.findVariation(this.state.dimentions.dimentions, selectedEl - 1) ===
												resp[i].attributes[0].option
											) {
												resp[i].categories = [{ name: 'frames' }];
												resp[i].images = frame.images;
												resp[i].variation = resp[i].attributes[0].option;
												resp[i].productId = frame.id;
												resp[i].qty = 1;
												resp[i].name = frame.name;
												newDimentions.framesSrc[selectedEl - 1] = src;
												newDimentions.frames[selectedEl - 1] = resp[i];
												flag = false;
												resolve();
											}
										}
									});
								}
								if (flag) {
									resolve();
								}
							}
						}
					});
			});
			promise.then(() => {
				if (newDimentions.frames.length > 0 && !flag) {
					newDimentions.frames.forEach((newframe) => {
						if (newframe) {
							totalPrice += parseInt(newframe.sale_price ? newframe.sale_price : newframe.price);
						}
					});
					this.setState((prevState) => {
						return {
							dimentions: newDimentions,
							framesSelected: true,
							totalPrice: totalPrice,
							saveSelection: true,
							displaySpin: false,
						};
					});
				} else {
					this.setState({
						displaySpin: false,
					});
					toast.error('Sorry this frame is not available in this size');
				}
			});
		}
	};

	addToCart = () => {
		if (this.state.dimentions) {
			let cart = [];
			const allItems = [...this.state.cart, ...this.state.dimentions.Poster, ...this.state.dimentions.frames];
			if (this.state.cart.length !== 0) {
				allItems.forEach((item, ind) => {
					if (item) {
						// console.log("item" , item)
						if (ind > 0) {
							let flag = false;
							for (let i = 0; i < ind; i++) {
								if (!flag && allItems[i]) {
									if (allItems[i].id === item.id && allItems[i].productId === item.productId) {
										cart = [...cart].map((cartItem) => {
											if (cartItem.id === allItems[ind].id) {
												if (+cartItem.qty === 10) {
													toast.error(
														'You can not add an item quantity more than 10 at one checkout.',
														{
															autoClose: 1500,
														}
													);

													return {
														productId: cartItem.productId,
														id: cartItem.id,
														name: cartItem.name,
														price: cartItem.price,
														qty: cartItem.qty,
														images: cartItem.images,
														categories: cartItem.categories,
														variation: cartItem.variation,
													};
												} else {
													return {
														productId: cartItem.productId,
														id: cartItem.id,
														name: cartItem.name,
														price: cartItem.price,
														qty: cartItem.qty + 1,
														images: cartItem.images,
														categories: cartItem.categories,
														variation: cartItem.variation,
													};
												}
											} else {
												return cartItem;
											}
										});
										flag = true;
									}
								}
							}
							if (!flag) {
								cart.push({
									productId: item.productId,
									id: item.id,
									name: item.name,
									price: item.sale_price ? item.sale_price : item.price,
									qty: item.qty,
									images: item.images,
									categories: item.categories,
									variation: item.variation,
								});
							}
						} else {
							if (item.categories[0].name === 'Poster') {
								cart.push({
									productId: item.productId,
									id: item.id,
									name: item.name,
									price: item.sale_price ? item.sale_price : item.price,
									qty: item.qty,
									images: item.images,
									categories: item.categories,
									variation: item.variation,
								});
							}
						}
					}
				});
				try {
					localStorage.setItem('cart', JSON.stringify([...cart]));
				} catch (e) {
					if (e) {
						toast.error('LocalStorage is full');
					}
				}

				this.setState(() => {
					return {
						cart: [...cart],
						runFunc: true,
					};
				});
			} else {
				allItems.forEach((item, ind) => {
					if (item) {
						if (ind > 0) {
							let flag = false;
							for (let i = 0; i < ind; i++) {
								if (!flag && allItems[i]) {
									if (allItems[i].id === item.id) {
										cart = [...cart].map((cartItem) => {
											if (cartItem.id === allItems[ind].id) {
												if (+cartItem.qty === 10) {
													toast.error('Label should have at least three characters', {
														autoClose: 1000,
													});

													return {
														productId: cartItem.productId,
														id: cartItem.id,
														name: cartItem.name,
														price: cartItem.price,
														qty: cartItem.qty,
														images: cartItem.images,
														categories: cartItem.categories,
														variation: cartItem.variation,
													};
												} else {
													return {
														productId: cartItem.productId,
														id: cartItem.id,
														name: cartItem.name,
														price: cartItem.price,
														qty: cartItem.qty + 1,
														images: cartItem.images,
														categories: cartItem.categories,
														variation: cartItem.variation,
													};
												}
											} else {
												return cartItem;
											}
										});
										flag = true;
									}
								}
							}
							if (!flag) {
								cart.push({
									productId: item.productId,
									id: item.id,
									name: item.name,
									price: item.sale_price ? item.sale_price : item.price,
									qty: item.qty,
									images: item.images,
									categories: item.categories,
									variation: item.variation,
								});
							} else {
								return null;
							}
						} else {
							if (item.categories[0].name === 'Poster') {
								cart.push({
									productId: item.productId,

									id: item.id,
									name: item.name,
									price: item.sale_price ? item.sale_price : item.price,
									qty: item.qty,
									images: item.images,
									categories: item.categories,
									variation: item.variation,
								});
							}
						}
					}
				});
				try {
					localStorage.setItem('cart', JSON.stringify([...cart]));
				} catch (e) {
					if (e) {
						toast.error('LocalStorage is full');
					}
				}

				this.setState(() => {
					return {
						cart: [...cart],
						runFunc: true,
					};
				});
			}
		}

		const promise = new Promise((resolve, reject) => {

			let CartKey = JSON.parse(localStorage.getItem('AddToCartKey'))
			axios({
				method: 'post',
				url: `https://postermuehle.de/wp-json/cocart/v1/clear/?cart_key=${CartKey.toString()}`
			})
				.then(function (response) {
					console.log(JSON.stringify(response.data));
					resolve(true);

				})
				.catch(function (error) {
					console.log(error);
				});

		})
		promise.then((success) => {


			this.state.cart.forEach(element => {

				let CartKey = JSON.parse(localStorage.getItem('AddToCartKey'))

				console.log(CartKey)

				axios({
					method: 'post',
					url: `https://postermuehle.de/wp-json/cocart/v1/add-item/?cart_key=${CartKey.toString()}`,
					data: {
						product_id: element.productId.toString(),
						quantity: element.qty.toString(),
						variation_id: element.id.toString()
					}
				}).then(function (response) {
					console.log(JSON.stringify(response.data));
				})
					.catch(function (error) {
						console.log(error);
					});


			});

		})

	};
	deleteItem = (id) => {
		const checkCart = [...JSON.parse(localStorage.getItem('cart'))];
		let newCart = [];

		newCart = checkCart.filter((cartItem) => {
			if (cartItem.id !== id) {
				return cartItem;
			}
		});
		try {
			localStorage.setItem('cart', JSON.stringify([...newCart]));
		} catch (e) {
			if (e) {
				toast.error('LocalStorage is full');
			}
		}

		this.setState({
			cart: newCart,
		});

		
		const promise = new Promise((resolve, reject) => {

			let CartKey = JSON.parse(localStorage.getItem('AddToCartKey'))
			axios({
				method: 'post',
				url: `https://postermuehle.de/wp-json/cocart/v1/clear/?cart_key=${CartKey.toString()}`
			})
				.then(function (response) {
					console.log(JSON.stringify(response.data));
					resolve(true);

				})
				.catch(function (error) {
					console.log(error);
				});

		})
		promise.then((success) => {

			if(this.state.cart.length>0){
				

			this.state.cart.forEach(element => {

				let CartKey = JSON.parse(localStorage.getItem('AddToCartKey'))

				console.log(CartKey)

				axios({
					method: 'post',
					url: `https://postermuehle.de/wp-json/cocart/v1/add-item/?cart_key=${CartKey.toString()}`,
					data: {
						product_id: element.productId.toString(),
						quantity: element.qty.toString(),
						variation_id: element.id.toString()
					}
				}).then(function (response) {
					console.log(JSON.stringify(response.data));
				})
					.catch(function (error) {
						console.log(error);
					});


			});

			}

		})


	};
	changeQty = (qty, id) => {
		const checkCart = [...JSON.parse(localStorage.getItem('cart'))];

		let newCart = [];

		newCart = checkCart.filter((cartItem) => {
			if (cartItem.id === id) {
				cartItem.qty = qty;
				return cartItem;
			}
			return cartItem;
		});
		try {
			localStorage.setItem('cart', JSON.stringify([...newCart]));
		} catch (e) {
			if (e) {
				toast.error('LocalStorage is full');
			}
		}

		this.setState({
			cart: newCart,
		});

		
		const promise = new Promise((resolve, reject) => {

			let CartKey = JSON.parse(localStorage.getItem('AddToCartKey'))
			axios({
				method: 'post',
				url: `https://postermuehle.de/wp-json/cocart/v1/clear/?cart_key=${CartKey.toString()}`
			})
				.then(function (response) {
					console.log(JSON.stringify(response.data));
					resolve(true);

				})
				.catch(function (error) {
					console.log(error);
				});

		})
		promise.then((success) => {


			this.state.cart.forEach(element => {

				let CartKey = JSON.parse(localStorage.getItem('AddToCartKey'))

				console.log(CartKey)

				axios({
					method: 'post',
					url: `https://postermuehle.de/wp-json/cocart/v1/add-item/?cart_key=${CartKey.toString()}`,
					data: {
						product_id: element.productId.toString(),
						quantity: element.qty.toString(),
						variation_id: element.id.toString()
					}
				}).then(function (response) {
					console.log(JSON.stringify(response.data));
				})
					.catch(function (error) {
						console.log(error);
					});


			});

		})

	};

	snapSettings = (label, img) => {


		const savedSettings = [...JSON.parse(localStorage.getItem('snap-settings'))];
		if (savedSettings.length > 0) {

			let flag = false;
			const promise = new Promise((resolve, reject) => {
				savedSettings.forEach((el, ind) => {
					if (!flag) {
						if (el.label === label) {
							flag = true;
						}
					}
					if (ind + 1 === savedSettings.length) {
						resolve();
					}
				});
			});
			promise.then((success) => {
				if (flag) {
					toast.error('A settings with the same label was also stored. Please change the label', {
						autoClose: 500,
					});
				} else {
					try {
						toast.success('Settings saved.');
						this.setState({
							changed: false,
						});

						localStorage.setItem(
							'snap-settings',
							JSON.stringify([
								...savedSettings,
								{
									state: this.state,
									content_img: img ? img : this.state.content_img,
									label: label,
									date: new Date(),
								},
							])
						);
					} catch (e) {
						if (e) {
							toast.error('LocalStorage is full');
						}
					}
				}
			});
		} else {
			try {
				toast.success('Settings saved.');
				localStorage.setItem(
					'snap-settings',
					JSON.stringify([
						{
							state: this.state,
							content_img: img ? img : this.state.content_img,

							label: label,
							date: new Date(),
						},
					])
				);
			} catch (e) {
				if (e) {
					toast.error('LocalStorage is full');
				}
			}
		}
	};
	handleClickSnap = (label) => {
		const snaps = [...JSON.parse(localStorage.getItem('snap-settings'))];
		const newSettings = snaps.find((el) => {
			if (el.label === label) {
				return el;
			}
		});
		if (this && newSettings) {
			this.state = newSettings.state;

			this.setState({
				// content_img: newSettings.state.content_img,
				...newSettings.state,
				changed: true,
			});
		}
	};

	deleteSettings = (label) => {
		const snapSettings = [...JSON.parse(localStorage.getItem('snap-settings'))];
		let newSnap = [];

		newSnap = snapSettings.filter((snapItem) => {
			if (snapItem.label !== label) {
				return newSnap;
			}
		});
		try {
			localStorage.setItem('snap-settings', JSON.stringify([...newSnap]));
			toast.error('Settings deleted');
		} catch (e) {
			if (e) {
				toast.error('LocalStorage is full');
			}
		}
	};

	openPostersFilters = () => {
		this.setState({
			filterDrawer: true,
		});
	};

	closeFiltersDrawer = () => {
		this.setState({
			filterDrawer: false,
		});
	};
	removeFrames = (val) => {
		this.setState((prevState) => {
			if (prevState.dimentions.frames) {
				if (val === 0) {
					let newPrice = this.state.totalPrice;
					prevState.dimentions.frames.forEach((frame) => {
						if (frame) {
							newPrice -= frame.price;
						}
					});
					return {
						totalPrice: newPrice,
						dimentions: { ...prevState.dimentions, frames: [], framesSrc: [] },
					};
				} else {
					const ind = val - 1;
					let newPrice = this.state.totalPrice;
					const newFrames = prevState.dimentions.frames.map((frame, index) => {
						if (index !== ind) {
							return frame;
						} else {
							if (frame) {
								newPrice -= frame.price;
							}
						}
					});
					const newFramesSrc = prevState.dimentions.framesSrc.map((frameSrc, index) => {
						if (index !== ind) {
							return frameSrc;
						}
					});
					return {
						totalPrice: newPrice,
						dimentions: { ...prevState.dimentions, frames: [...newFrames], framesSrc: [...newFramesSrc] },
					};
				}
			}
		});
	};
	checkBoxTrigger = (e) => {
		e.persist();
		if (e.target.checked) {
			let newData = [];
			[...this.state.filterArr, e.target.value].forEach((el) => {
				this.state.wholeData.forEach((dataItem) => {
					for (let i = 0; i < dataItem.categories.length; i++) {
						if (
							dataItem.categories[i].name.toLowerCase() === el.toLowerCase() &&
							dataItem.variation === this.state.variation
						) {
							let pushCheck = true;
							newData.forEach((ele) => {
								// debugger;
								if (ele.id === dataItem.id) {
									pushCheck = false;
								}
							});
							if (pushCheck) {
								newData.push(dataItem);
							}
						}
					}
				});
			});

			this.setState((prevState) => {
				return {
					filterArr: [...prevState.filterArr, e.target.value],
					data: newData,
				};
			});
		} else {
			if (this.state.filterArr.length === 1) {
				const data = this.state.wholeData.filter((el) => {
					let posterCheck = false;
					if (el.name.toLowerCase() === 'article-7') {

					}
					for (let i = 0; i < el.categories.length; i++) {
						if (
							(el.categories[i].name.toLowerCase() === 'poster' ||
								el.categories[i].name.toLowerCase() === 'posters') &&
							el.variation === this.state.variation
						) {
							posterCheck = true;
						}
					}
					if (posterCheck) {
						return el;
					}
				});
				this.setState({
					data: [...data],
					filterArr: []
				});
			} else {
				let newData = [];
				const newFilterArr = this.state.filterArr.filter((el) => {
					if (el.toLowerCase() !== e.target.value.toLowerCase()) {
						return el;
					}
				});
				newFilterArr.forEach((el) => {
					this.state.wholeData.forEach((dataItem) => {
						for (let i = 0; i < dataItem.categories.length; i++) {
							if (
								dataItem.categories[i].name.toLowerCase() === el.toLowerCase() &&
								dataItem.variation === this.state.variation
							) {
								let pushCheck = true;
								newData.forEach((ele) => {
									if (ele.id === dataItem.id) {
										pushCheck = false;
									}
								});
								if (pushCheck) {
									newData.push(dataItem);
								}
							}
						}
					});
				});
				this.setState((prevState) => {
					return {
						filterArr: [...newFilterArr],
						data: newData,
					};
				});
			}
		}
	};
	render() {
		return (
			<MyContext.Provider
				value={{
					...this.state,
					setData: this.setData,
					openEnvironmentDrawer: this.openEnvironmentDrawer,
					openPictureDrawer: this.openPictureDrawer,
					openpostersDrawer: this.openpostersDrawer,
					openFramesDrawer: this.openFramesDrawer,
					closeEnvironmentDrawer: this.closeEnvironmentDrawer,
					closePictureDrawer: this.closePictureDrawer,
					closepostersDrawer: this.closepostersDrawer,
					closeFramesDrawer: this.closeFramesDrawer,
					finished: this.finished,
					setContentImg: this.setContentImg,
					openMainDrawer: this.openMainDrawer,
					closeMainDrawer: this.closeMainDrawer,
					putPictureStructure: this.putPictureStructure,
					selectHandler: this.handleSelectPicture,
					posterAdded: this.posterAdded,
					reset: this.reset,
					addToCart: this.addToCart,
					frameAdded: this.frameAdded,
					changeQty: this.changeQty,
					deleteItem: this.deleteItem,
					snapSettings: this.snapSettings,
					handleClickSnap: this.handleClickSnap,
					deleteSettings: this.deleteSettings,
					openPostersFilters: this.openPostersFilters,
					closeFiltersDrawer: this.closeFiltersDrawer,
					openCart: this.openCart,
					closeCart: this.closeCart,
					removeFrames: this.removeFrames,
					checkBoxTrigger: this.checkBoxTrigger,
					openLoading: this.openLoading,
					SetpostersArr: this.SetpostersArr



				}}
			>
				<div>
					{this.props.children}
					{/* <ToastContainer /> */}
				</div>
			</MyContext.Provider>
		);
	}
}

export default Context;
