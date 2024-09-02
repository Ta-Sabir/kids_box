import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter location={"/"} navigator={undefined}>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
