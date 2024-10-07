import { Provider } from "react-redux";
import Users from "./Users";
import store from "../redux/store";


function App() {
  return (
    <Provider store={store}>

      <div >
        <Users/>
      </div>
    </Provider>
  );
}

export default App;
