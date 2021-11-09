import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import { Home } from "./pages";
import theme from "./themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset/> 
      <Home/>
    </ThemeProvider>
  );
}

export default App;
