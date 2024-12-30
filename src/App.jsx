import { Provider } from "react-redux"
import BodyComponent from "./components/BodyComponent"
import AppStore from "./utils/AppStore"

function App() {

  return (
    <Provider  store={AppStore}>
      <BodyComponent />
    </Provider>
  )
}

export default App
