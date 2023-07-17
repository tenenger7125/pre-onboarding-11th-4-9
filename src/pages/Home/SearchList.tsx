import { styled } from 'styled-components';
import { SearchType } from '../../types';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';

const SearchList = ({ searchList, currentIdx, updateCurrentIdx }: SearchListProps) => {
  return (
    <SLayout>
      {searchList.length > 0 ? <SDescription>추천 검색어</SDescription> : <SDescription>검색어 없음</SDescription>}
      <SSearchList>
        {searchList.map(({ sickCd, sickNm }, idx) => (
          <SSearchItem key={sickCd} $isHover={currentIdx === idx} onMouseEnter={() => updateCurrentIdx(idx)}>
            <SearchIcon width={16} />
            <span>{sickNm}</span>
          </SSearchItem>
        ))}
      </SSearchList>
    </SLayout>
  );
};

const SLayout = styled.div`
  height: 260px;

  position: absolute;
  top: 80px;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: ${props => props.theme.colors['bg-white']};
  border-radius: 10px;
  padding: 15px;
  overflow-y: auto;

  text-align: left;
`;

const SSearchList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  line-height: 1.6;
`;

const SSearchItem = styled.li<{ $isHover: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;

  ${props => props.$isHover && `background-color: ${props.theme.colors['bg-lightWhite']}`}
`;

const SDescription = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors['ft-lightGray']};
`;

type SearchListProps = {
  searchList: SearchType[];
  currentIdx: number;
  updateCurrentIdx: (idx: number) => void;
};

export default SearchList;
