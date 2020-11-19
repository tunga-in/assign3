
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/layout/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
	return (
		<BrowserRouter>
			<Header/>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/login' component={Login}/>
				</Switch>
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
