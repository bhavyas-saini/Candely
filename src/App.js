import Nav from "./components/Nav";
import HelpCenter from "./components/HelpCenter";
import Categories from "./components/Categories";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="w-full h-full overflow-x-hidden ">
      <Nav/>
      <HelpCenter/>
      <Categories/>
      <Footer/>
    </div>
     );
}

export default App;
