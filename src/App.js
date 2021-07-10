
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/home';
import Signup from './screens/signup';
import InterviewWithMentor from "./screens/interviewWithMentor";
import BookMock from "./screens/bookMock";

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
			  <Route
				 exact={true}
	  			path="/interviewWithMentor"
	  			component={InterviewWithMentor} 
			  />
			  <Route
				 exact={true}
	  			path="/bookMock"
	  			component={BookMock} 
			  />
	  	</Switch>
  	</BrowserRouter>
  );
}
export default App;
