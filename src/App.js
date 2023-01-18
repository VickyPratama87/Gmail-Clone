import Navbar from "../src/components/Navbar";
import Emails from "./components/Emails";
import Footer from "./components/Footer";
import Inbox from "./components/Inbox";
import LeftSide from "./components/LeftSide";
import Menus from "./components/Menus";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Menus />
        <div className="w-full pl-20">
          <Navbar />
          <div className="flex">
            <LeftSide />
            <div className="w-full">
              <Inbox />
              <Emails />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
