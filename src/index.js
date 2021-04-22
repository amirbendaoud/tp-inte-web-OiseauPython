import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import FruitVue from './fruitVue/fruitVue';
import Menu from "./menu/menu";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Menu />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);