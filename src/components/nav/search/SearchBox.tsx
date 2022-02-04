import { FC, ChangeEvent } from 'react';
import styled from 'styled-components';
import { MdSearch, MdClear } from 'react-icons/md';
import { fetchSearch } from '../../../api/fetchContent';

interface Props {
	setSearching: any;
	searching: boolean;
	setSearchItems: any;
}

interface ClearProps {
	searching: boolean;
}

const SearchInput = styled.input`
	background: none;
	font-size: 1.2rem;
	border: none;
	transition: 0.2s;
	::placeholder {
		color: white;
		opacity: 1;
	}
`;

const Box = styled.div`
	border: 1px solid white;
	border-radius: 5vw;
	transition: 0.2s;
	display: flex;
	align-items: center;
	padding: 0.8rem;
`;

const Search = styled(MdSearch)`
	font-size: 1.3rem;
	display: block;
	margin-right: 0.4rem;
`;

const Clear = styled(MdClear)<ClearProps>`
	opacity: ${({ searching }) => (searching ? '1' : '0')};
`;
export const SearchBox: FC<Props> = ({ setSearching, searching, setSearchItems }) => {
	let filterTimeout: NodeJS.Timeout;

	const handleSearchInput = async (e: ChangeEvent<HTMLInputElement>) => {
		clearTimeout(filterTimeout);

		if (e.target.value) {
			setSearching(true);
			filterTimeout = setTimeout(() => {
				fetchSearch(e.target.value).then((data) => setSearchItems(data.results));
			}, 400);
		} else {
			setSearching(false);
		}
	};

	return (
		<Box>
			<Search />
			<SearchInput type="text" placeholder="Search" onChange={handleSearchInput} />
			<Clear searching={searching} />
		</Box>
	);
};