import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Trend } from "../../components/Trend/Trend";
import { Text } from "../../UI/Text/Text";
import { images } from "../../images";

export const Home = () => {
	return (
		<>
			<Header />
			<div className="home">
				<section className="home__news-banner">
					<img
						className="home__news-banner_img"
						src={images.petFood}
						alt="pet food"
					/>
					<div className="home__news-banner__text">
						<Text
							color="mainColor"
							family="mainFonts"
							weight="600"
							margin="0.2em 0"
							size="2em"
						>
							Canagan Dental
						</Text>
						<Text
							color="whiteColor"
							family="mainFonts"
							weight="600"
							margin="0.2em 0"
							size="1.5em"
						>
							Get Up To 40% OFF
						</Text>
					</div>
				</section>
				<section className="home__trending">
					<div className="home__trending__heading">
						<Text
							color="mainColor"
							family="mainFonts"
							weight="600"
							margin="0.2em 0"
							size="2.4em"
						>
							Trending now
						</Text>
						<Link to="/Explore">
							<div className="home__trending__heading__button">
								<Text
									color="orangeColor"
									family="mainFonts"
									weight="400"
									size="1.5em"
								>
									See all
								</Text>
							</div>
						</Link>
					</div>
					<div className="home__trending__trends">
						<Trend
							image={images.trend1}
							heading="Free puppy socialisation
in store"
							preHeading="FREE"
						/>
						<Trend
							image={images.trend2}
							heading="Eco-friendly toys your dog will love"
							preHeading="Shop Green Elk"
						/>
						<Trend
							image={images.trend3}
							heading="Parasite protection delivered monthly"
							preHeading="Shop Green Elk"
						/>
					</div>
				</section>
			</div>
		</>
	);
};
