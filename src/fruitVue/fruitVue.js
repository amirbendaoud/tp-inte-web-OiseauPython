import './fruitVue.scss';
import Header from "../header/header";
import littleVegetable from "../images/little-vegetables.png";
import VegetableVue from "../vegetableVue/vegetableVue";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function FruitVue() {
  return (
		<div className="fruitVue">
			<Header />
			<div className="cool">
				<h1>
					Our fruits <br />& vegetables <br />
					are <span>organic.</span>
				</h1>
				<div className="text-button">
					<div className="main-text-container">
						<p className="main-text">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
							commodo ligula eget dolor. Aenean massa. Cum sociis natoque
							penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						</p>
					</div>
					<button className="main-button slide_right">discover &#9656;</button>
				</div>
			</div>
			<div className="pagination">
				<span className="first-number">1</span>/
				<span className="second-number">2</span>
			</div>
			<div className="next-button-container">
				<div className="page-preview">
					<img src={littleVegetable} alt="Next Vegetables" />
					<div className="preview-text">
						<p className="next-text">Next</p>
						<p className="next-page">Vegetables</p>
					</div>
				</div>
				<Link to="/vegetables">
					<div className="next-button">
						<p>&#9656;</p>
					</div>
				</Link>
			</div>

			<Switch>
				<Route path="/vegetables">
					<VegetableVue />
				</Route>
			</Switch>
		</div>
	);
}

export default FruitVue;
