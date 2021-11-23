import "./App.css";

import MovieList from "./components/MovieList";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<MovieList></MovieList>
			</div>
		</ApolloProvider>
	);
}

export default App;
