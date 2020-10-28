import React from 'react';
import './content.css';
import MyContext from '../../Context/context';
import Draggable, { DraggableCore } from 'react-draggable';
const Content = () => {
	const [activeDrags, setActiveDrags] = React.useState(0);
	const onStartHandler = () => {
		setActiveDrags(activeDrags + 1);
	};

	const onStopHandler = () => {
		setActiveDrags(activeDrags - 1);
	};

	const showPicStructure = (
		dimentions,
		selectHandler,
		el,
		postersSrc,
		framesSrc,
		framesDrawer,
		postersDrawer,
		mainDrawer
	) => {
		const getPoster_0 = (divident) => {
			
			if (framesSrc[0] && postersSrc[0]) {
				return (
					<div>
						<div style={{ background: `url(${postersSrc[0]})` }} className="poster-img"></div>
						<img draggable = {false}  className="poster-frame" src={framesSrc[0]} />
					</div>
				);
			} else if (postersSrc[0]) {
				return <div style={{ background: `url(${postersSrc[0]})` }} className="poster-img"></div>;
			} else if (framesSrc[0]) {
				return (
					<div>
						{divident}
						<img draggable = {false} className="poster-frame" src={framesSrc[0]} />
					</div>
				);
			} else {
				return divident;
			}
		};
		const getPoster_1 = (divident) => {
			if (framesSrc[1] && postersSrc[1]) {
				return (
					<div>
						<div style={{ background: `url(${postersSrc[1]})` }} className="poster-img"></div>
						<img draggable = {false} className="poster-frame" src={framesSrc[1]} />
					</div>
				);
			} else if (postersSrc[1]) {
				return <div style={{ background: `url(${postersSrc[1]})` }} className="poster-img"></div>;
			} else if (framesSrc[1]) {
				return (
					<div>
						{divident}
						<img draggable = {false} className="poster-frame" src={framesSrc[1]} />
					</div>
				);
			} else {
				return divident;
			}
		};
		const getPoster_2 = (divident) => {
			if (framesSrc[2] && postersSrc[2]) {
				return (
					<div>
						<div style={{ background: `url(${postersSrc[2]})` }} className="poster-img"></div>
						<img draggable = {false} className="poster-frame" src={framesSrc[2]} />
					</div>
				);
			} else if (postersSrc[2]) {
				return <div style={{ background: `url(${postersSrc[2]})` }} className="poster-img"></div>;
			} else if (framesSrc[2]) {
				return (
					<div>
						{divident}
						<img draggable = {false} className="poster-frame" src={framesSrc[2]} />
					</div>
				);
			} else {
				return divident;
			}
		};
		const getPoster_3 = (divident) => {
			if (framesSrc[3] && postersSrc[3]) {
				return (
					<div>
						<div style={{ background: `url(${postersSrc[3]})` }} className="poster-img"></div>
						<img draggable = {false} className="poster-frame" src={framesSrc[3]} />
					</div>
				);
			} else if (postersSrc[3]) {
				return <div style={{ background: `url(${postersSrc[3]})` }} className="poster-img"></div>;
			} else if (framesSrc[3]) {
				return (
					<div>
						{divident}
						<img draggable = {false} className="poster-frame" src={framesSrc[3]} />
					</div>
				);
			} else {
				return divident;
			}
		};
		const getPoster_4 = (divident) => {
			if (framesSrc[4] && postersSrc[4]) {
				return (
					<div>
						<div style={{ background: `url(${postersSrc[4]})` }} className="poster-img"></div>
						<img draggable = {false} className="poster-frame" src={framesSrc[4]} />
					</div>
				);
			} else if (postersSrc[4]) {
				return <div style={{ background: `url(${postersSrc[4]})` }} className="poster-img"></div>;
			} else if (framesSrc[4]) {
				return (
					<div>
						{divident}
						<img draggable = {false} className="poster-frame" src={framesSrc[4]} />
					</div>
				);
			} else {
				return divident;
			}
		};
		const getPoster_5 = (divident) => {
			if (framesSrc[5] && postersSrc[5]) {
				return (
					<div>
						<div style={{ background: `url(${postersSrc[5]})` }} className="poster-img"></div>
						<img draggable = {false} className="poster-frame" src={framesSrc[5]} />
					</div>
				);
			} else if (postersSrc[5]) {
				return <div style={{ background: `url(${postersSrc[5]})` }} className="poster-img"></div>;
			} else if (framesSrc[5]) {
				return (
					<div>
						{divident}
						<img draggable = {false} className="poster-frame" src={framesSrc[5]} />
					</div>
				);
			} else {
				return divident;
			}
		};
		const getPoster_6 = (divident) => {
			if (framesSrc[6] && postersSrc[6]) {
				return (
					<div>
						<div style={{ background: `url(${postersSrc[6]})` }} className="poster-img"></div>
						<div>
							{divident}
							<img draggable = {false} className="poster-frame" src={framesSrc[6]} />
						</div>
					</div>
				);
			} else if (postersSrc[6]) {
				return <div style={{ background: `url(${postersSrc[6]})` }} className="poster-img"></div>;
			} else if (framesSrc[6]) {
				return (
					<div>
						{divident}
						<img draggable = {false} className="poster-frame" src={framesSrc[6]} />
					</div>
				);
			} else {
				return divident;
			}
		};
		const getPoster_7 = (divident) => {
			if (framesSrc[7] && postersSrc[7]) {
				return (
					<div>
						<div style={{ background: `url(${postersSrc[7]})` }} className="poster-img"></div>
						<img draggable = {false} className="poster-frame" src={framesSrc[7]} />
					</div>
				);
			} else if (postersSrc[7]) {
				return <div style={{ background: `url(${postersSrc[7]})` }} className="poster-img"></div>;
			} else if (framesSrc[7]) {
				return (
					<div>
						{divident}
						<img draggable = {false} className="poster-frame" src={framesSrc[7]} />
					</div>
				);
			} else {
				return divident;
			}
		};
		switch (dimentions) {
			case '2-50x70': {
				return (
					<div className="container  container2x50x70">
						<div
							style={
								el === 1 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							className="x50x70 item item-1"
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 1, '50x70') : null}
						>
							{getPoster_0(<div className="inner-item">50 x 70</div>)}
						</div>
						<div
							className="x50x70 item item-2"
							style={
								el === 2 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 2, '50x70') : null}
						>
							{getPoster_1(<div className="inner-item">50 x 70</div>)}
						</div>
					</div>
				);
			}
			case '2-70x100': {
				return (
					<div className="container  containerx70x100">
						<div
							className="x70x100  item"
							style={
								el === 1 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 1, '70x100') : null}
						>
							{getPoster_0(<div className="inner-item">70 x 100</div>)}
						</div>
						<div
							className="x70x100 item"
							style={
								el === 2 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 2, '70x100') : null}
						>
							{getPoster_1(<div className="inner-item">70 x 100</div>)}
						</div>
					</div>
				);
			}
			case '3-50x70': {
				return (
					<div
						className={`container  ${
							!mainDrawer ? 'container3x50x70' : 'container3x50x70 container3x50x70-open'
						}`}
					>
						<div
							className="x50x70 item"
							style={
								el === 1 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 1, '50x70') : null}
						>
							{getPoster_0(<div className="inner-item">50 x 70</div>)}
						</div>
						<div
							className="x50x70 item"
							style={
								el === 2 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 2, '50x70') : null}
						>
							{getPoster_1(<div className="inner-item">50 x 70</div>)}
						</div>
						<div
							className="x50x70 item"
							style={el === 3 ? { backgroundColor: 'white', opacity: 1 } : { backgroundColor: '#cecece' }}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 3, '50x70') : null}
						>
							{getPoster_2(<div className="inner-item">50 x 70</div>)}
						</div>
					</div>
				);
			}
			case '3-mixed': {
				return (
					<div
						className={`container  ${
							!mainDrawer ? 'container-3-mixed' : 'container-3-mixed container-3-mixed-open'
						}`}
					>
						<div
							className="x50x70 el-4-1 item"
							style={
								el === 1 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 1, '50x70') : null}
						>
							{getPoster_0(<div className="inner-item">50 x 70</div>)}
						</div>
						<div
							className="x70x100 el-4-2 item"
							style={
								el === 2 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 2, '70x100') : null}
						>
							{getPoster_1(<div className="inner-item">70 x 100</div>)}
						</div>
						<div
							className="x50x70 el-4-3 item"
							style={
								el === 3 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 3, '50x70') : null}
						>
							{getPoster_2(<div className="inner-item">50 x 70</div>)}
						</div>
					</div>
				);
			}
			case '4-30x40': {
				return (
					<div
						className={`container  ${
							!mainDrawer ? 'containerx30x40' : 'containerx30x40 containerx30x40-open'
						}`}
					>
						<div
							className="x30x40 item"
							style={
								el === 1 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 1, '30x40') : null}
						>
							{getPoster_0(<div className="inner-item">30 x 40</div>)}
						</div>
						<div
							className="x30x40 item"
							style={
								el === 2 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 2, '30x40') : null}
						>
							{getPoster_1(<div className="inner-item">30 x 40</div>)}
						</div>
						<div
							className="x30x40 item"
							style={
								el === 3 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 3, '30x40') : null}
						>
							{getPoster_2(<div className="inner-item">30 x 40</div>)}
						</div>
						<div
							className="x30x40 item"
							style={
								el === 4 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 4, '30x40') : null}
						>
							{getPoster_3(<div className="inner-item">30 x 40</div>)}
						</div>
					</div>
				);
			}
			case '4-mixed': {
				return (
					<div
						className={`container  ${
							!mainDrawer ? 'container-4-mixed' : 'container-4-mixed container-4-mixed-open'
						}`}
					>
						<div
							className="x30x40 item"
							style={
								el === 1 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 1, '30x40') : null}
						>
							{getPoster_0(<div className="inner-item">30 x 40</div>)}
						</div>
						<div
							className="x50x70 item"
							style={
								el === 2 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 2, '50x70') : null}
						>
							{getPoster_1(<div className="inner-item">50 x 70</div>)}
						</div>
						<div
							className="x50x70 item"
							style={
								el === 3 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 3, '50x70') : null}
						>
							{getPoster_2(<div className="inner-item">50 x 70</div>)}
						</div>
						<div
							className="x30x40 item"
							style={
								el === 4 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 4, '30x40') : null}
						>
							{getPoster_3(<div className="inner-item">30 x 40</div>)}
						</div>
					</div>
				);
			}
			case '4-mixed-2': {
				return (
					<div
						className={`container  ${
							!mainDrawer ? 'container-4-mixed-2' : 'container-4-mixed-2 container-4-mixed-2-open'
						}`}
					>
						<div
							className="x50x70 item"
							style={
								el === 1 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 1, '70x50') : null}
						>
							{getPoster_0(<div className="inner-item">50 x 70</div>)}
						</div>
						<div
							className="x30x40 item"
							style={
								el === 2 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 2, '30x40') : null}
						>
							{getPoster_1(<div className="inner-item">30 x 40</div>)}
						</div>
						<div
							className="x50x70 item"
							style={
								el === 3 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 3, '50x70') : null}
						>
							{getPoster_2(<div className="inner-item">50 x 70</div>)}
						</div>
						<div
							className="x70x100 item"
							style={
								el === 4 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 4, '70x100') : null}
						>
							{getPoster_3(<div className="inner-item">70 x 100</div>)}
						</div>
					</div>
				);
			}
			case '4-mixed-3': {
				return (
					<div
						className={`container  ${
							!mainDrawer ? 'container-4-mixed-3' : 'container-4-mixed-3 container-4-mixed-3-open'
						}`}
					>
						<div
							className="x50x70 item"
							style={
								el === 1 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 1, '50x70') : null}
						>
							{getPoster_0(<div className="inner-item">50 x 70</div>)}
						</div>
						<div
							className="x50x50 item"
							style={
								el === 2 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 2, '50x50') : null}
						>
							{getPoster_1(<div className="inner-item">50 x 50</div>)}
						</div>
						<div
							className="x30x40 item"
							style={
								el === 3 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 3, '30x40') : null}
						>
							{getPoster_2(<div className="inner-item">30 x 40</div>)}
						</div>
						<div
							className="x13x18 item"
							style={
								el === 4 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 4, '13x18') : null}
						>
							{getPoster_3(<div className="inner-item">13x18</div>)}
						</div>
					</div>
				);
			}
			case '5-mixed': {
				return (
					<div
						className={`container  ${
							!mainDrawer ? 'container-5-mixed' : 'container-5-mixed container-5-mixed-open'
						}`}
					>
						<div
							className="x21x30 item"
							style={
								el === 1 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 1, '21x30') : null}
						>
							{getPoster_0(<div className="inner-item">21 x 30</div>)}
						</div>
						<div
							className="x30x40 item"
							style={
								el === 2 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 2, '30x40') : null}
						>
							{getPoster_1(<div className="inner-item">30 x 40</div>)}
						</div>
						<div
							className="x30x40 item"
							style={
								el === 3 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 3, '30x40') : null}
						>
							{getPoster_2(<div className="inner-item">30 x 40</div>)}
						</div>
						<div
							className="x70x100 item"
							style={
								el === 4 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 4, '70x100') : null}
						>
							{getPoster_3(<div className="inner-item">70 x 100</div>)}
						</div>
						<div
							className="x50x70 item"
							style={el === 5 ? { backgroundColor: 'white', opacity: 1 } : { backgroundColor: '#cecece' }}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 5, '50x70') : null}
						>
							{getPoster_4(<div className="inner-item">50 x 70</div>)}
						</div>
					</div>
				);
			}
			case '8-large-wall': {
				return (
					<div
						className={`container  ${
							!mainDrawer
								? 'container-8-large-wall'
								: 'container-8-large-wall container-8-large-wall-open'
						}`}
					>
						<div
							className="x40x50 item"
							style={
								el === 1 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 1, '40x50') : null}
						>
							{getPoster_0(<div className="inner-item">40 x 50</div>)}
						</div>
						<div
							className="x70x100 item"
							style={
								el === 2 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 2, '70x100') : null}
						>
							{getPoster_1(<div className="inner-item">70 x 100</div>)}
						</div>
						<div
							className="x50x70 item"
							style={
								el === 3 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 3, '50x70') : null}
						>
							{getPoster_2(<div className="inner-item">50 x 70</div>)}
						</div>
						<div
							className="x50x70  item"
							style={
								el === 4 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 4, '50x70') : null}
						>
							{getPoster_3(<div className="inner-item">50 x 70</div>)}
						</div>
						<div
							className="x30x40 item"
							style={
								el === 5 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 5, '40x30') : null}
						>
							{getPoster_4(<div className="inner-item">30 x 40</div>)}
						</div>
						<div
							className="x21x30 item"
							style={
								el === 6 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 6, '21x30') : null}
						>
							{getPoster_5(<div className="inner-item">21 x 30</div>)}
						</div>
						<div
							className="x40x50 item"
							style={
								el === 7 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 7, '40x50') : null}
						>
							{getPoster_6(<div className="inner-item">40 x 50</div>)}
						</div>
						<div
							className="x30x40 item"
							style={
								el === 8 && postersDrawer
									? { backgroundColor: 'white', opacity: 1 }
									: { backgroundColor: '#cecece' }
							}
							onPointerDown={!framesDrawer ? () => selectHandler(dimentions, 8, '40x30') : null}
						>
							{getPoster_7(<div className="inner-item">30 x 40</div>)}
						</div>
					</div>
				);
			}
		}
	};
	const styles = (url) => {
		return {
			backgroundImage: `url(${url})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		};
	};
	const dragHandlers = { onStart: onStartHandler, onStop: onStopHandler };
	return (
		<div className="content">
			<MyContext.Consumer>
				{(context) => {
					return (
						<div className="inner-content" id="my-node" >
							<div
								className={context.mainDrawer ? `content-img-open` : `content-img-close`}
								style={styles(context.content_img)}
							></div>
							{/* <div
								className={context.mainDrawer ? `content-img-open` : `content-img-close`}
								style={styles(context.content_img_overlay)}
							></div> */}
							{/* <img
								
								src={context.content_img}
							/> */}
							{context.dimentions ? (
								<Draggable {...dragHandlers}>
									<div>
										{context.dimentions
											? showPicStructure(
													context.dimentions.dimentions,
													context.selectHandler,
													context.dimentions.el,
													context.dimentions.postersSrc,
													context.dimentions.framesSrc,
													context.framesDrawer,
													context.postersDrawer,
													context.mainDrawer
											  )
											: null}
									</div>
								</Draggable>
							) : null}

							{context.content &&
							!context.changed &&
							!context.wallSelected &&
							!context.postersSelected &&
							!context.framesSelected 
							 ? (
								<div
									className={`${
										context.mainDrawer
											? 'content-box content-box-open'
											: 'content-box content-box-close'
									}`}
								>
									<div className="line-1">STEP BY STEP</div>
									<div className="line-2">Compose your perfect picture wall</div>
									<div className="line-3">
										Use our new tool to find Poster and frames that go together
									</div>
									<div className="content-btn-container">
										<div
											className="content-btn"
											onPointerDown={() => {
												context.openEnvironmentDrawer();
												context.openMainDrawer();
											}}
										>
											START HERE
										</div>
									</div>
								</div>
							) : null}
						</div>
					);
				}}
			</MyContext.Consumer>
		</div>
	);
};

export default Content;
