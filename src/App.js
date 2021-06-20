import Header from "./components/Header/Header";
import './App.css';
import SimpleBottomNavigation from "./components/mainNav.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";
import Footer from "./components/footer.js"
function App() {
  return (
    <BrowserRouter>
       <Header /> 
         <div className="app">
           <Container>
             <Switch>
               <Route path="/" component={Trending} exact/>
               <Route path="/movies" component={Movies}/>
               <Route path="/series" component={Series}/>
               <Route path="/search" component={Search}/>
             </Switch>
           </Container>
         </div>
         <Footer />
      <SimpleBottomNavigation /> 
    </BrowserRouter>  
  );
}

export default App;
