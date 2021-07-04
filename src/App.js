import NavbarBeforeSignUp from './components/navbarBeforeSignUp';
import NavbarAfterSignUp from './components/navbarAfterSignUp';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/home';
import Signup from './screens/signup';

function App() {
  return (
  	<BrowserRouter>
	  	<Switch>
	  		<Route
	  			exact={true}
	  			path="/signup"
	  			component={Signup}
	  		/>
	  		<Route
	  			exact={true}
	  			path="/"
	  			component={Home}
	  		/>
	  	</Switch>
  	</BrowserRouter>
  );
}
export default App;
