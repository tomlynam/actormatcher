import React from 'react';
import { Link } from 'react-router';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = { first_movie: null, second_movie: null, actors: [] };
		this.selectMovies = this.selectMovies.bind(this);
		this.showChoices = this.showChoices.bind(this);
		this.fetchID = this.fetchID.bind(this);
		this.showCasts = this.showCasts.bind(this);
	}

	selectMovies(e) {
		e.preventDefault();
		this.setState({ first_movie: this.refs.first.value, second_movie: this.refs.second.value }, function stateUpdated () {
			this.fetchID(); 
		})
	}

	fetchID() {
		let movie1 = this.state.first_movie;
		let movie2 = this.state.second_movie;
		$.ajax({
	    url: "/movie_ids",
	    type: 'GET',
	    data: { movie1, movie2 },
	    dataType: 'JSON',
	  }).done( actors => {
	  	this.setState({ actors });
	  }).fail( data => {
	  	console.log('oh no!')
	  });
	}

	movieSearch() {
		return(
				<div>
					<div className="search">
						<form onSubmit={this.selectMovies}>
							<input ref='first' type='text' placeholder='e.g. The Big Short' />
							<input ref='second' type='text' placeholder='e.g. Crazy Stupid Love' />
							<input type='submit' className='btn' />
						</form>
					</div>
				</div>
			)
	}

	showChoices() {
		if(this.state.first_movie === null) {
			return(
				<div></div>
			)
		} else {
			return(
				<div>				
					<p>Searching for actors that were in both {this.state.first_movie} and {this.state.second_movie}...</p>
				</div>
			)
		}
	}

	showCasts() {
		if(this.state.actors.length === 0) {
			return(
				<div></div>
			)
		} else {
			return this.state.actors.map( (actor, index) => {
				return(
					<div key={`act-${index}`} className="col s12 m6">
	          <p>{actor}</p>
	        </div>
				)
			})
		}
	}

	render() {
		return(
			<div>
				{ this.movieSearch() }
				{ this.showChoices() }
				{ this.showCasts() }
			</div>
		)
	}
}

export default Search;
