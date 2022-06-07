import React, { useState } from "react";
import { Card } from "react-bootstrap";

import "./CharacterCard.css";

export interface CharacterInterface {
	name: string;
	portrayed: string;
	img: string;
	char_id: number;
}

type Props = CharacterInterface;

const CharacterCard: React.FunctionComponent<Props> = ({
	name,
	portrayed,
	img,
}) => {
	const [coords, setCoords] = useState({ x: -1, y: -1 });
	const [isRippling, setIsRippling] = useState(false);

	const handleClick = (e: any) => {
		setIsRippling(true);
		const rect = e.target.getBoundingClientRect();
		setCoords({
			x: e.clientX - rect.left,
			y: rect.bottom - e.clientY,
		});
	};
	return (
		<li className='p-3 col-12 col-sm-6 col-lg-4 col-xl-3'>
			<Card className='text-start character-card'>
				<div className='img-wrapper'>
					<img className='img' src={img} alt={name} />
				</div>
				<Card.Body className='card-body py-4' onClick={handleClick}>
					<h5>{name}</h5>
					<p className='portrayed mb-0'>{portrayed}</p>
				</Card.Body>
				{isRippling ? (
					<span
						onMouseLeave={() => setIsRippling(false)}
						className='ripple'
						style={{
							left: coords.x,
							bottom: coords.y,
						}}
					/>
				) : (
					""
				)}
			</Card>
		</li>
	);
};

export default CharacterCard;
