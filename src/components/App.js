import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../store/reducers/index";
import rootSaga from "../sagas/rootSaga";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import AppRouter from "./appRouter/AppRouter";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <AppRouter />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
