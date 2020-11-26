
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/layout/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AuthContextProvider } from './util/context/AuthContext';
import AddNote from './components/notes/Add';
import MyNotes from './components/notes/MyNotes';
import ProtectedRoute from './components/auth/ProtectedRoute';


function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Header/>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/login' component={Login}/>
						<ProtectedRoute path='/add_note' component={AddNote}/>
						<ProtectedRoute path='/my_notes' component={MyNotes}/>
					</Switch>
				<Footer/>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
