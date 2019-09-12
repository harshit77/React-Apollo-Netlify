import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient from "apollo-boost";
const client = new ApolloClient({
  uri: "http://localhost:9000/graphql"
});

// Replace the previous LambdaDemo with the code below:
const LambdaDemo = () => (
  <ApolloProvider client={client}>
    <Query
      query={gql`
        {
          hello
        }
      `}
    >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return <div>A greeting from the server: {data.hello}</div>
    }
  }
    </Query>
  </ApolloProvider>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
