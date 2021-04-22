import "./header.scss";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";

function Header() {
	return (
		<div className="header">
			<div className="our-product">
				<div className="product-separator">
					<div></div>
				</div>
				<div className="product-title">
					<p>Our products</p>
				</div>
			</div>
			<div className="header-col">
				<div className="header-element">
					<div className="header-element-separator">
						<div></div>
					</div>
					<div className="header-element-title">
						<p>Pineapples</p>
					</div>
				</div>
				<div className="header-element">
					<div className="header-element-separator">
						<div></div>
					</div>
					<div className="header-element-title">
						<p>Strawberries</p>
					</div>
				</div>
				<div className="header-element">
					<div className="header-element-separator">
						<div></div>
					</div>
					<div className="header-element-title">
						<p>Apple</p>
					</div>
				</div>
				<div className="header-element">
					<div className="header-element-separator">
						<div></div>
					</div>
					<div className="header-element-title">
						<p>Citrus</p>
					</div>
				</div>
			</div>
			<div className="header-col">
				<div className="header-element">
					<div className="header-element-separator">
						<div></div>
					</div>
					<div className="header-element-title">
						<p>Cauliflowers</p>
					</div>
				</div>
				<div className="header-element">
					<div className="header-element-separator">
						<div></div>
					</div>
					<div className="header-element-title">
						<p>Tomatoes</p>
					</div>
				</div>
				<div className="header-element">
					<div className="header-element-separator">
						<div></div>
					</div>
					<div className="header-element-title">
						<p>Eggplants</p>
					</div>
				</div>
				<div className="header-element">
					<div className="header-element-separator">
						<div></div>
					</div>
					<div className="header-element-title">
						<p>Carrots</p>
					</div>
				</div>
			</div>
			<div className="social-icons">
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
	);
}

export default Header;
