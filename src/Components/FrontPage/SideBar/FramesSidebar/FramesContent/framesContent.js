import React from 'react';
import MyContext from '../../../../Context/context';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Carousel from 'react-material-ui-carousel';

class FramesContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			startAt: 0,
			selectedEl: props.selectedEl,
		};
	}

	static getDerivedStateFromProps(props, state) {
		if (props.selectedEl !== state.selectedEl) {
			return {
				selectedEl: props.selectedEl,
			};
		}
	}

	showPicStructure = (dimentions, postersSrc) => {
		const firstChild = (
			<div className="divident-container">
				<div className="divident">All</div>
			</div>
		);
		const getPoster_0 = (divident) => {
			return postersSrc[0] ? (
				<div className="poster-img">
					<img src={postersSrc[0]}  width="100%"></img>
				</div>
			) : (
					divident
				);
		};
		const getPoster_1 = (divident) => {
			return postersSrc[1] ? (
				<div className="poster-img">
					<img src={postersSrc[1]} width="100%"></img>

				</div>
			) : (
					divident
				);
		};
		const getPoster_2 = (divident) => {
			return postersSrc[2] ? (
				<div  className="poster-img">

					<img src={postersSrc[2]} width="100%"></img>

				</div>
			) : (
					divident
				);
		};
		const getPoster_3 = (divident) => {
			return postersSrc[3] ? (
				<div  className="poster-img">
					<img src={postersSrc[3]} width="100%"></img>

				</div>
			) : (
					divident
				);
		};
		const getPoster_4 = (divident) => {
			return postersSrc[4] ? (
				<div  className="poster-img">
					<img src={postersSrc[4]} width="100%"></img>

				</div>
			) : (
					divident
				);
		};
		const getPoster_5 = (divident) => {
			return postersSrc[5] ? (
				<div  className="poster-img">
					<img src={postersSrc[5]} width="100%"></img>

				</div>
			) : (
					divident
				);
		};
		const getPoster_6 = (divident) => {
			return postersSrc[6] ? (
				<div  className="poster-img">
					<img src={postersSrc[6]} width="100%"></img>

				</div>
			) : (
					divident
				);
		};
		const getPoster_7 = (divident) => {
			return postersSrc[7] ? (
				<div className="poster-img">
					<img src={postersSrc[7]} width="100%"></img>

				</div>
			) : (
					divident
				);
		};

		switch (dimentions) {
			case '2-50x70': {
				const arr = ['50 x 70', '50 x 70'];
				const newArr = arr.map((el, ind) => {
					return (
						<div className="frame-carousel-item" key={Math.random() * Math.random}>
							<div className="divident-container">
								{ind === 0
									? getPoster_0(<div className="divident">{el}</div>)
									: getPoster_1(<div className="divident">{el}</div>)}
							</div>
						</div>
					);
				});

				newArr.unshift(firstChild);
				return newArr;
			}
			case '2-70x100': {
				const arr = ['70 x 100', '70 x 100'];
				const newArr = arr.map((el, ind) => {
					return (
						<div className="frame-carousel-item" key={Math.random() * Math.random}>
							<div className="divident-container">
								{ind === 0
									? getPoster_0(<div className="divident">{el}</div>)
									: getPoster_1(<div className="divident">{el}</div>)}
							</div>
						</div>
					);
				});
				newArr.unshift(firstChild);
				return newArr;
			}
			case '3-50x70': {
				const arr = ['50 x 70', '50 x 70', '50 x 70'];
				const newArr = arr.map((el, ind) => {
					return (
						<div className="frame-carousel-item" key={Math.random() * Math.random}>
							<div className="divident-container">
								{ind === 0
									? getPoster_0(<div className="divident">{el}</div>)
									: ind === 1
										? getPoster_1(<div className="divident">{el}</div>)
										: getPoster_2(<div className="divident">{el}</div>)}
							</div>
						</div>
					);
				});
				newArr.unshift(firstChild);
				return newArr;
			}
			case '3-mixed': {
				const arr = ['50 x 70', '70 x 100', '50 x 70'];
				const newArr = arr.map((el, ind) => {
					return (
						<div className="frame-carousel-item" key={Math.random() * Math.random}>
							<div className="divident-container">
								{ind === 0
									? getPoster_0(<div className="divident">{el}</div>)
									: ind === 1
										? getPoster_1(<div className="divident">{el}</div>)
										: getPoster_2(<div className="divident">{el}</div>)}
							</div>
						</div>
					);
				});
				newArr.unshift(firstChild);
				return newArr;
			}
			case '4-30x40': {
				const arr = ['30 x 40', '30 x 40', '30 x 40', '30 x 40'];
				const newArr = arr.map((el, ind) => {
					return (
						<div className="frame-carousel-item" key={Math.random() * Math.random}>
							<div className="divident-container">
								{ind === 0
									? getPoster_0(<div className="divident">{el}</div>)
									: ind === 1
										? getPoster_1(<div className="divident">{el}</div>)
										: ind === 2
											? getPoster_2(<div className="divident">{el}</div>)
											: getPoster_3(<div className="divident">{el}</div>)}
							</div>
						</div>
					);
				});
				newArr.unshift(firstChild);
				return newArr;
			}
			case '4-mixed': {
				const arr = ['30 x 40', '50 x 70', '50 x 70', '30 x 40'];
				const newArr = arr.map((el, ind) => {
					return (
						<div className="frame-carousel-item" key={Math.random() * Math.random}>
							<div className="divident-container">
								{ind === 0
									? getPoster_0(<div className="divident">{el}</div>)
									: ind === 1
										? getPoster_1(<div className="divident">{el}</div>)
										: ind === 2
											? getPoster_2(<div className="divident">{el}</div>)
											: getPoster_3(<div className="divident">{el}</div>)}
							</div>
						</div>
					);
				});
				newArr.unshift(firstChild);
				return newArr;
			}
			case '4-mixed-2': {
				const arr = ['50 x 70', '30 x 40', '50 x 70', '70 x 100'];
				const newArr = arr.map((el, ind) => {
					return (
						<div className="frame-carousel-item" key={Math.random() * Math.random}>
							<div className="divident-container">
								{ind === 0
									? getPoster_0(<div className="divident">{el}</div>)
									: ind === 1
										? getPoster_1(<div className="divident">{el}</div>)
										: ind === 2
											? getPoster_2(<div className="divident">{el}</div>)
											: getPoster_3(<div className="divident">{el}</div>)}
							</div>
						</div>
					);
				});
				newArr.unshift(firstChild);
				return newArr;
			}
			case '4-mixed-3': {
				const arr = ['50 x 70', '50 x 50', '30 x 40', '13 x 18'];
				const newArr = arr.map((el, ind) => {
					return (
						<div className="frame-carousel-item" key={Math.random() * Math.random}>
							<div className="divident-container">
								{ind === 0
									? getPoster_0(<div className="divident">{el}</div>)
									: ind === 1
										? getPoster_1(<div className="divident">{el}</div>)
										: ind === 2
											? getPoster_2(<div className="divident">{el}</div>)
											: getPoster_3(<div className="divident">{el}</div>)}
							</div>
						</div>
					);
				});
				newArr.unshift(firstChild);
				return newArr;
			}
			case '5-mixed': {
				const arr = ['21 x 30', '30 x 40', '30 x 40', '70 x 100', '50 x 70'];
				const newArr = arr.map((el, ind) => {
					return (
						<div className="frame-carousel-item" key={Math.random() * Math.random}>
							<div className="divident-container">
								{ind === 0
									? getPoster_0(<div className="divident">{el}</div>)
									: ind === 1
										? getPoster_1(<div className="divident">{el}</div>)
										: ind === 2
											? getPoster_2(<div className="divident">{el}</div>)
											: ind === 3
												? getPoster_3(<div className="divident">{el}</div>)
												: getPoster_4(<div className="divident">{el}</div>)}
							</div>
						</div>
					);
				});
				newArr.unshift(firstChild);
				return newArr;
			}
			case '8-large-wall': {
				const arr = ['40 x 50', '70 x 100', '50 x 70', '50 x 70', '30 x 40', '21 x 30', '40 x 50', '30 x 40'];
				const newArr = arr.map((el, ind) => {
					return (
						<div className="frame-carousel-item" key={Math.random() * Math.random}>
							<div className="divident-container">
								{ind === 0
									? getPoster_0(<div className="divident">{el}</div>)
									: ind === 1
										? getPoster_1(<div className="divident">{el}</div>)
										: ind === 2
											? getPoster_2(<div className="divident">{el}</div>)
											: ind === 3
												? getPoster_3(<div className="divident">{el}</div>)
												: ind === 4
													? getPoster_4(<div className="divident">{el}</div>)
													: ind === 5
														? getPoster_5(<div className="divident">{el}</div>)
														: ind === 6
															? getPoster_6(<div className="divident">{el}</div>)
															: getPoster_7(<div className="divident">{el}</div>)}
							</div>
						</div>
					);
				});
				newArr.unshift(firstChild);
				return newArr;
			}
		}
	};
	onChange = (e) => {
		this.props.setSelected(e);
	};
	render() {
		return (
			<div className="frames-content">
				<MyContext.Consumer>
					{(context) => {
						if (context.wallSelected) {
							let framesArr = [];
							if (context.data ? context.data.length > 0 : false) {
								context.data.forEach((dataEl) => {
									if (dataEl.categories[0].name === 'frames') {
										framesArr.push(dataEl);
									}
								});
							}
							return (
								<div className="frames-content-inner">
									{framesArr.length > 0 ? (
										<div>
											<div className="carousel-container">
												{context.dimentions && context.framesDrawer ? (
													<Carousel
														className='my-carousel'
														navButtonsAlwaysVisible={true}
														autoPlay={false}
														onChange={this.onChange}
														startAt={this.state.startAt}
													>
														{this.showPicStructure(
															context.dimentions.dimentions,
															context.dimentions.postersSrc
														)}
													</Carousel>
												) : null}
											</div>

											<div className="frames-flex">
												{framesArr.map((el) => {
													const price = el.sale_price
														? el.sale_price + '€'
														: el.price
															? el.price + '€'
															: 'Price not specfied.';
													if (el.images[0]) {
														return (
															<div
																key={el.id}
																className="frames-arr-el"
																onClick={() =>
																	context.frameAdded(
																		el.images[1].src,
																		el,
																		this.state.selectedEl
																	)
																}
															>
																<img
																	src={el.images[0].src}
																	style={{ width: '100%', height: 'auto' }}
																/>
																{/* <div className="frames-price">{price}</div> */}
															</div>
														);
													}
												})}
											</div>
											<div className="remove-btn" onClick={() => context.removeFrames(this.state.selectedEl)}>Remove Frames</div>
										</div>
									) : (
											<div style={{ textAlign: 'center' }} >
												There are no frames for the given products.
											</div>
										)}
								</div>
							);
						} else {
							return <p>Please select a picture wall first.</p>;
						}
					}}
				</MyContext.Consumer>
			</div>
		);
	}
}

export default FramesContent;
