import { FC } from 'react';
import { Cast } from '../../../interfaces';
import styled from 'styled-components';

interface Props {
	person: Cast;
}

interface ImgProps {
	img: string;
}

const Person = styled.div`
	display: flex;
	margin: 0vw 2vw 2vw 0;
`;
const Info = styled.div`
	display: flex;
	align-items: center;
	margin-left: 1rem;
`;

const Role = styled.p`
	color: #ccc;
`;

const PersonImg = styled.div<ImgProps>`
	height: 10vw;
	width: 10vw;
	border-radius: 50%;
	background: url(${(p) => p.img});
	background-repeat: no-repeat;
	background-size: 100% auto;
	background-position: 0 25%;
	@media (min-width: 1700px) {
		height: 6vw;
		width: 6vw;
	}
`;

export const CreditsProfile: FC<Props> = ({ person }) => {
	return (
		<Person>
			<PersonImg img={person.profile_path ? `https://image.tmdb.org/t/p/original/${person.profile_path}` : `/photo.jpg`} />
			<Info>
				<div>
					<h3>{person.name}</h3>
					<Role>{person.character || person.job}</Role>
				</div>
			</Info>
		</Person>
	);
};