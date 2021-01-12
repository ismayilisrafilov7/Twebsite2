import 'bootstrap/dist/css/bootstrap.min.css';
import React  from 'react';
import Form from "./Form";
import Formin from "./Formin";
import "./index.css";
import { LanguageProvider } from './LanguageContext';
import NavBar from "./NavBar";
import PageContent from "./PageContent";
import { ThemeProvider } from './ThemeContext';
import Home from "./Home";
import { BrowserRouter,Switch, Route} from "react-router-dom";



function App () {
  
    return (
      <div>
        <ThemeProvider>
        <PageContent>
        <LanguageProvider>
        <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route exact path="/formin">
      <Formin/>

      </Route>
      <Route exact path="/form">
      <Form/>

      </Route>
      <Route exact path="/">
      <Home/>

      </Route>

      </Switch>
      </BrowserRouter>
        </LanguageProvider>
        </PageContent>
        </ThemeProvider>
      </div>
    )
  }


export default App

