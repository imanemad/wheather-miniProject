import { Provider } from "react-redux";
import Weather from "../Page/Weather";
import { storeWeather } from "../redux/storeWeather";

function App() {
  return (
    <Provider store={storeWeather}>
      <div >
        <Weather/>
      </div>
    </Provider>
  );
}

export default App;
