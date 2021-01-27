import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
