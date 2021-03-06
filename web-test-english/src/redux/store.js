import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducer/index'

const myMiddleware = applyMiddleware(thunk)

const myCompose = compose(
  myMiddleware,
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
  ? a => a
  : window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  rootReducer,
  myCompose
)

export default store
