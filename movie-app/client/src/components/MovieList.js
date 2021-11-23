import React, { Component } from "react";

import { gql } from "apollo-boost";
// import { graphql } from "react-apollo"; yontem 1
import { Query } from "react-apollo";

const getMoviesQuery = gql`
	{
		movies {
            id,
			title,
            description
		}
	}
`;

class MovieList extends Component {
    //get data yöntem 1
    // listMovies(){
    //     const {data} = this.props
    //     if(data.loading)
    //         return (<div>Loading...</div>)
    //     else
    //         return data.movies.map(movie => <li key={movie.id}>{movie.title}</li>)
        
    // }
	render() {
        console.log(this.props)
		return (
			<div>
				<ul className="movie-list">
					<Query query={getMoviesQuery}>
                        {
                           ({ loading, error, data}) => {
                              if (loading) return <div>Loading...</div>  
                              if (error) return <div>Error...</div>

                            //   return data.movies.map(movie => (
                              return data.movies.map(({id, title}) => (
                                  <li key={id}>
                                     {title}
                                  </li>
                              ))
                           } 
                        }
                    </Query>
				</ul>
			</div>
		);
	}
}

// export default graphql(getMoviesQuery)(MovieList); //yontem 1, dataları propsla kullanmak ıcın
export default MovieList
