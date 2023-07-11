import Quiz from './Components/Quiz/Quiz';
import {Provider} from "react-redux";
import Store from './Components/Store/Store';

function App() {
  return (
    <>
        <Provider store={Store}>
          <Quiz />
        </Provider>
    </>
  );
}

export default App;
