import React, { useEffect, useState } from 'react';
import './Cards.css';
import Card from 'react-tinder-card';
import axios from '../axios';

function Cards() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const req = await axios.get('/profiles');

			setPeople(req.data);
		};

		fetchData();
	}, []);

	console.log(people);

	const swiped = (direction, nameToDelete) => {
		console.log('removing:' + nameToDelete);
	};

	const outOfFrame = (name) => {
		console.log(name + 'left the screen');
	};

	return (
		<div className='cards'>
			<div className='cards__Container'>
				{people.map((person) => (
					<Card
						className='cards__swipe'
						key={person.name}
						preventSwipe={['up', 'down']}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
						<div
							style={{ backgroundImage: `url(${person.url})` }}
							className='cards__individualCard'
						>
							<h3>{person.name}</h3>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}

export default Cards;
