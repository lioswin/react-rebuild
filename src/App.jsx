import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <div className="container">
     <Home/>
     <About/>
     <Work/>
     <Contact/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
