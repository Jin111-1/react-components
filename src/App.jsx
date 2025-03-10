import "./App.css";
import Header from "./Component/Header-Component";
import Main from "./Component/Main-Component";
import Section from "./Component/Section-Component";
import Footer from "./Component/Footer-Component";
function App() {
  return (
    <div>
      {
        <Header/>
      }
      {
        <Main/>
      }
      <Section/>
      {
        <Footer/>
      }
      
    </div>
  );
}

export default App;
