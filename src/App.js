
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/layout/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/account/Login';
import { AuthContextProvider } from './util/context/AuthContext';
import AddNote from './components/notes/Add';
import MyNotes from './components/notes/MyNotes';
import Profile from './components/account/Profile';
import ThemeContextProvider from './util/context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<ThemeContextProvider>
					<Header/>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/login' component={Login}/>
						<Route path='/add_note' component={AddNote}/>
						<Route path='/my_notes' component={MyNotes}/>
						<Route path='/profile' component={Profile}/>
					</Switch>
					<Footer/>
				</ThemeContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
