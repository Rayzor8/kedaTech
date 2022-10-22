import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <div className="App w-full min-h-screen">
      <Navbar />
      <MainContent />
      <Footer/>
    </div>
  );
}

export default App;
