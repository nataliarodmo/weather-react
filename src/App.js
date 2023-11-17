
import './App.css';
import SearchWeather from "./SearchWeather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container weather_box">
        <SearchWeather defaultCity="Bogota"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
