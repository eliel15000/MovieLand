import { useEffect } from "react";

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return(
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;