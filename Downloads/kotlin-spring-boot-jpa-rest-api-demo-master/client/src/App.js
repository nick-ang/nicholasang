import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    blog: []
  };

  async componentDidMount() {
    const response = await fetch('/api/articles');
    const body = await response.json();
    console.log(response)
    this.setState({blog: body, isLoading: false});
  }

  render() {
    const {blog, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-intro">
            <h2>Blog List</h2>
            {blog.map(blog =>
              <div key={blog.id}>
                {blog.title} - {blog.content}
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;