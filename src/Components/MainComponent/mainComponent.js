import React from 'react';
import FrontPage from '../FrontPage/frontPage';
import MyContext from '../Context/context';
import Loader from 'react-loader-spinner'


class MainComponent extends React.Component {
	render() {

		return (
			<>
				<MyContext.Consumer>

					{
						(context) => {
							return (
								context.shareLoading ?
									<>
										<div className="loader">
										</div>
										<Loader className="loader-img"
											type="Bars"
											color="#00BFFF"
											height={100}
											width={100}
											timeout={false}
										/>
									</>



									:
									null

							)

						}
					}
				</MyContext.Consumer>
				<FrontPage />
			</>

		)
	}
}

export default MainComponent;
