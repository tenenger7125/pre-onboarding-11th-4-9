import { styled } from 'styled-components';

import { Button } from '../../components';
import { useSearch, useOutSideClick } from '../../hooks';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as Close } from '../../assets/close.svg';

const Search = () => {
  const { search, searchList, isShow, handleSearchChange, handleSearchReset, handleOpen, handleClose } = useSearch();
  const ref = useOutSideClick(handleClose);

  return (
    <SLayout $isFocus={isShow} ref={ref}>
      <SSearchContainer>
        {!isShow && <SearchIcon width={16} height={16} />}
        <SInput
          type="text"
          value={search}
          onChange={handleSearchChange}
          onClick={handleOpen}
          placeholder={isShow ? '' : '질환명을 입력해주세요'}
        />
        {isShow && (
          <Button p="0" onClick={handleSearchReset}>
            <Close width={16} height={16} />
          </Button>
        )}
      </SSearchContainer>
      <Button variant="subtle" br="circle">
        <SearchIcon width={21} height={21} />
      </Button>
      {isShow && (
        <SSearchResultContainer>
          {searchList.length > 0 ? <SDescription>추천 검색어</SDescription> : <SDescription>검색어 없음</SDescription>}
          <SSearchList>
            {searchList.map(({ sickCd, sickNm }) => (
              <SSearchItem key={sickCd}>
                <SearchIcon width={16} />
                <span>{sickNm}</span>
              </SSearchItem>
            ))}
          </SSearchList>
        </SSearchResultContainer>
      )}
    </SLayout>
  );
};

const SLayout = styled.div<SLayoutStyleProps>`
  max-width: 490px;

  display: flex;

  position: relative;

  padding: 8px;
  margin: 0 auto;

  border: 2px solid
    ${props => (props.$isFocus ? props.theme.colors['border-blue'] : props.theme.colors['border-white'])};
  border-radius: 42px;

  background-color: ${props => props.theme.colors['bg-white']};
`;

const SSearchList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  line-height: 1.6;
`;

const SSearchResultContainer = styled.div`
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

const SSearchContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 5px;
  align-items: center;

  padding: 16px 15px;
  padding-right: 8px;
`;

const SSearchItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;

  &:hover {
    background-color: ${props => props.theme.colors['bg-lightWhite']};
  }
`;

const SInput = styled.input`
  width: 100%;

  border: none;
  outline: none;

  font-size: 18px;
`;

const SDescription = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors['ft-lightGray']};
`;

type SLayoutStyleProps = {
  $isFocus: boolean;
};

export default Search;
