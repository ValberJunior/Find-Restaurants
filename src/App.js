import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import { Home } from "./pages";
import theme from "./themes";

//Redux
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset/> 
        <Home/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
