import { useEffect, useState } from "react";
import bgImage from "../../assets/image 13.png";
import genreBG from "../../assets/image 2.png";
import styles from "./GenrePage.module.css";

const GenrePage = () => {
	const [name, setName] = useState();
	const [genres, setGenres] = useState([
		"Action",
		"Drama",
		"Romance",
		"Thriller",
		"Western",
		"Horror",
		"Fantasy",
		"Music",
		"Fiction",
	]);
	const [chosen, setchosen] = useState([
		"Romance",
		"Music",
		"Action",
		"Horror",
		"Comedy",
	]);
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [mobile, setMobile] = useState();
	const [shareData, setShareData] = useState(false);

	const removeChosen = (index) => {
		chosen.splice(index, 1);
		setchosen([...chosen]);
	};
	useEffect(() => {
		if (chosen.length < 3) {
			alert("Please choose at least 3 genres");
		}
		// console.log({ name, username, email, mobile, shareData });
	}, [chosen]);

	const addGenre = (index) => {
		if (!chosen.includes(genres[index])) {
			chosen.push(genres[index]);
			setchosen([...chosen]);
		}
	};

	return (
		<div className={styles.page}>
			<div className={styles.left}>
				<div>
					<h2>Super app</h2>
					<h1 className={styles.subheader}>
						Choose your entertainment category
					</h1>
				</div>
				<div className={styles.chosen}>
					{chosen.map((item, index) => (
						<div className={styles.chosenItem} key={index}>
							<div>{item}</div>
							<div
								onClick={() => {
									removeChosen(index);
								}}
							>
								x
							</div>
						</div>
					))}
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.grid}>
					{genres.map((item, index) => (
						<div
							onClick={() => addGenre(index)}
							className={styles.gridItem}
							key={index}
						>
							<div>{item}</div>
							<img src={genreBG} alt="" />
						</div>
					))}
				</div>
				<div className={styles.nextPage}>
					<button>Next Page</button>
				</div>
			</div>
		</div>
	);
};

export default GenrePage;
