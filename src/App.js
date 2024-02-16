import './App.css';
import ArepasStore from './stores/ArepasStore';
import Menu from "./Menu";
import {Provider} from "mobx-react";
function App() {
  return (
    <Provider ArepasStore={ArepasStore}>
      <Menu></Menu>
    </Provider>
  
  );
}

export default App;
