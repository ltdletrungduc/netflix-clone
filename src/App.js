import React, { useContext } from "react";
import "./App.css";
import { services } from "./services";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Modal from "./components/Modal";

function App() {
	return (
		<>
			<div className='app'>
				<Nav></Nav>
				<Banner fetchUrl={services.mockMovieQuery.originalsNetflix}></Banner>
				<Modal>
					<div className='list'>
						<Row
							title='NETFLIX ORIGINALS'
							fetchUrl={services.mockMovieQuery.originalsNetflix}
							isLargeRow></Row>
						<Row
							title='Treanding Now'
							fetchUrl={services.mockMovieQuery.trendingWeek}></Row>
						<Row
							title='Top Rated'
							fetchUrl={services.mockMovieQuery.topRate}></Row>
						<Row
							title='Action Movies'
							fetchUrl={services.mockMovieQuery.actionMovies}></Row>
						<Row
							title='Comedy Movies'
							fetchUrl={services.mockMovieQuery.comedyMovies}></Row>
						<Row
							title='Horror Movies'
							fetchUrl={services.mockMovieQuery.horrorMovies}></Row>
						<Row
							title='Romance Movies'
							fetchUrl={services.mockMovieQuery.romanceMovies}></Row>
						<Row
							title='Documentaries'
							fetchUrl={services.mockMovieQuery.documentaries}></Row>
					</div>
				</Modal>
			</div>
		</>
	);
}

export default App;
