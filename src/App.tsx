import { BrowserRouter } from "react-router-dom";
import PageHeader from "./common/PageHeader";
import PageNavigator from "./PageNavigator";
import { Provider } from "react-redux";
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageHeader/>
        <PageNavigator/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
