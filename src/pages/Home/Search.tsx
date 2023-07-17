import { styled } from 'styled-components';

import SearchList from './SearchList';
import { Button } from '../../components';
import { useSearch, useOutSideClick } from '../../hooks';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as Close } from '../../assets/close.svg';
import { useEffect, useState } from 'react';

const Search = () => {
  const { search, searchList, isShow, handleSearchChange, handleSearchReset, handleOpen, handleClose } = useSearch();
  const ref = useOutSideClick(handleClose);

  // 밑의 코드를 useSearch 안에 넣고, useSearch를 useAutocomplete로 변경해도 될지 고민하자.
  const [currentIdx, setCurrentIdx] = useState(-1);

  const updateCurrentIdx = (idx: number) => setCurrentIdx(idx);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
    switch (e.key) {
      case 'ArrowUp': {
        e.preventDefault();
        return setCurrentIdx(prev => (prev >= 0 ? prev - 1 : prev));
      }
      case 'ArrowDown': {
        e.preventDefault();
        return setCurrentIdx(prev => (prev < searchList.length - 1 ? prev + 1 : prev));
      }
    }
  };

  useEffect(() => {
    updateCurrentIdx(-1);
    // debouncedSearch로 의존 배열에 넣으면 더 최적화될듯
  }, [isShow, search]);

  return (
    <SLayout $isFocus={isShow} ref={ref}>
      <SInputSearchContainer>
        {!isShow && <SearchIcon width={16} height={16} />}
        <SInput
          type="text"
          value={search}
          onChange={handleSearchChange}
          onClick={handleOpen}
          onKeyDown={handleKeyDown}
          placeholder={isShow ? '' : '질환명을 입력해주세요'}
        />
        {isShow && (
          <Button p="0" onClick={handleSearchReset}>
            <Close width={16} height={16} />
          </Button>
        )}
      </SInputSearchContainer>
      <Button variant="subtle" br="circle">
        <SearchIcon width={21} height={21} />
      </Button>
      {isShow && <SearchList searchList={searchList} currentIdx={currentIdx} updateCurrentIdx={updateCurrentIdx} />}
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

const SInputSearchContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 5px;
  align-items: center;

  padding: 16px 15px;
  padding-right: 8px;
`;

const SInput = styled.input`
  width: 100%;

  border: none;
  outline: none;

  font-size: 18px;
`;

type SLayoutStyleProps = {
  $isFocus: boolean;
};

export default Search;
