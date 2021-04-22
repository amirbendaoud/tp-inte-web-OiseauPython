import React, { useState } from "react";
import "./menu.scss";
import { Route, Link } from "react-router-dom";
import fruitVue from "../fruitVue/fruitVue";
import VegetableVue from "../vegetableVue/vegetableVue";
import logo from "../images/logoRabbit@2x.png";
import panier from "../images/panier.png";
import hamburger from "../images/hamburger.png";
import mobileMenu from "../images/mobile-menu.png";
import search from "../images/search.png";
import tomatoes from "../images/tomatoes.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import cancel from "../images/cancel.png";

function Menu() {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
		setActive(!isActive);
	};

	return (
		<div className="menu">
			<div className="right-side-part">
				<div className="rabbit-logo">
					<img src={logo} alt="Logo" />
				</div>
				<div className="menu-center">
					<div className="cart-logo">
						<img src={panier} alt="Panier" />
					</div>
					<div className="separator">
						<div></div>
					</div>
					<div className="burger-logo" onClick={handleToggle}>
						<img src={hamburger} alt="Menu" />
					</div>
					<div className="separator">
						<div></div>
					</div>
					<div className="search-logo">
						<img src={search} alt="Recherche" />
					</div>
				</div>
				<div className="orgabits-text-logo">
					<p className="text-orga">
						orga<span className="text-bits">bits</span>
					</p>
				</div>
				<div className="mobile-burger-logo" onClick={handleToggle}>
					<div className="separator-menu-1">
						<div></div>
					</div>
					<div className="separator-menu-2">
						<div></div>
					</div>
					<div className="separator-menu-3">
						<div></div>
					</div>
				</div>
			</div>
			<div className={isActive ? "left-side-part" : "left-side-part active"}>
				<div className="mobile-main-menu">
					<div className="close-mobile-menu" onClick={handleToggle}>
						<img src={cancel} alt="cancel" />
					</div>
					<div className="sub-main-container">
						<div className="mobile-main-product">
							<div className="product-separator">
								<div></div>
							</div>
							<div className="product-title">
								<p>Our fruits</p>
							</div>
						</div>
						<div className="secondary-menu-col">
							<div className="secondary-menu-element">
								<div className="secondary-menu-element-separator">
									<div></div>
								</div>
								<div className="secondary-menu-element-title">
									<p>Pineapples</p>
								</div>
							</div>
							<div className="secondary-menu-element">
								<div className="secondary-menu-element-separator">
									<div></div>
								</div>
								<div className="secondary-menu-element-title">
									<p>Strawberries</p>
								</div>
							</div>
							<div className="secondary-menu-element">
								<div className="secondary-menu-element-separator">
									<div></div>
								</div>
								<div className="secondary-menu-element-title">
									<p>Apple</p>
								</div>
							</div>
							<div className="secondary-menu-element">
								<div className="secondary-menu-element-separator">
									<div></div>
								</div>
								<div className="secondary-menu-element-title">
									<p>Citrus</p>
								</div>
							</div>
						</div>
					</div>
					<div className="sub-main-container">
						<div className="mobile-main-product">
							<div className="product-separator">
								<div></div>
							</div>
							<div className="product-title">
								<p>Our vegetables</p>
							</div>
						</div>
						<div className="secondary-menu-col">
							<div className="secondary-menu-element">
								<div className="secondary-menu-element-separator">
									<div></div>
								</div>
								<div className="secondary-menu-element-title">
									<p>Cauliflowers</p>
								</div>
							</div>
							<div className="secondary-menu-element">
								<div className="secondary-menu-element-separator">
									<div></div>
								</div>
								<div className="secondary-menu-element-title">
									<p>Tomatoes</p>
								</div>
							</div>
							<div className="secondary-menu-element">
								<div className="secondary-menu-element-separator">
									<div></div>
								</div>
								<div className="secondary-menu-element-title">
									<p>Eggplants</p>
								</div>
							</div>
							<div className="secondary-menu-element">
								<div className="secondary-menu-element-separator">
									<div></div>
								</div>
								<div className="secondary-menu-element-title">
									<p>Carrots</p>
								</div>
							</div>
						</div>
					</div>

					<div className="mobile-main-product">
						<div className="product-separator">
							<div></div>
						</div>
						<div className="product-title">
							<p>Our vision</p>
						</div>
					</div>
					<div className="mobile-main-product">
						<div className="product-separator">
							<div></div>
						</div>
						<div className="product-title">
							<p>Contact us</p>
						</div>
					</div>
					<div className="mobile-menu-footer">
						<div className="follow">Follow us :</div>
						<div className="mobile-social-icons">
							<div className="social-img-container">
								<img src={twitter} alt="twitter" />
							</div>
							<div className="social-img-container">
								<img src={youtube} alt="youtube" />
							</div>
							<div className="social-img-container">
								<img src={instagram} alt="instagram" />
							</div>
							<div className="social-img-container">
								<img src={facebook} alt="facebook" />
							</div>
						</div>
					</div>
				</div>

				<div className="main-menu">
					<div className="main-product">
						<div className="product-separator">
							<div></div>
						</div>
						<div className="product-title">
							<p>Our fruits</p>
						</div>
					</div>
					<div className="main-product">
						<div className="product-separator">
							<div></div>
						</div>
						<div className="product-title">
							<p>Our vegetables</p>
						</div>
					</div>
					<div className="main-product">
						<div className="product-separator">
							<div></div>
						</div>
						<div className="product-title">
							<p>Our vision</p>
						</div>
					</div>
					<div className="main-product">
						<div className="product-separator">
							<div></div>
						</div>
						<div className="product-title">
							<p>Contact us</p>
						</div>
					</div>
				</div>
				<div className="secondary-menu">
					<div className="secondary-menu-col">
						<div className="secondary-menu-element">
							<div className="secondary-menu-element-separator">
								<div></div>
							</div>
							<div className="secondary-menu-element-title">
								<p>Pineapples</p>
							</div>
						</div>
						<div className="secondary-menu-element">
							<div className="secondary-menu-element-separator">
								<div></div>
							</div>
							<div className="secondary-menu-element-title">
								<p>Strawberries</p>
							</div>
						</div>
						<div className="secondary-menu-element">
							<div className="secondary-menu-element-separator">
								<div></div>
							</div>
							<div className="secondary-menu-element-title">
								<p>Apple</p>
							</div>
						</div>
						<div className="secondary-menu-element">
							<div className="secondary-menu-element-separator">
								<div></div>
							</div>
							<div className="secondary-menu-element-title">
								<p>Citrus</p>
							</div>
						</div>
					</div>
					<div className="secondary-menu-col">
						<div className="secondary-menu-element">
							<div className="secondary-menu-element-separator">
								<div></div>
							</div>
							<div className="secondary-menu-element-title">
								<p>Cauliflowers</p>
							</div>
						</div>
						<div className="secondary-menu-element">
							<div className="secondary-menu-element-separator">
								<div></div>
							</div>
							<div className="secondary-menu-element-title">
								<p>Tomatoes</p>
							</div>
						</div>
						<div className="secondary-menu-element">
							<div className="secondary-menu-element-separator">
								<div></div>
							</div>
							<div className="secondary-menu-element-title">
								<p>Eggplants</p>
							</div>
						</div>
						<div className="secondary-menu-element">
							<div className="secondary-menu-element-separator">
								<div></div>
							</div>
							<div className="secondary-menu-element-title">
								<p>Carrots</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className={
						isActive ? "tomatoes-container" : "tomatoes-container active"
					}
				>
					<img src={tomatoes} alt="Tomates" />
				</div>
			</div>
			<Route exact path="/" component={fruitVue} />
			<Route exact path="/vegetables" component={VegetableVue} />
			<Route exact path="/fruits" component={fruitVue} />
		</div>
	);
}

export default Menu;
