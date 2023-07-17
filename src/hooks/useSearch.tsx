import { useState, useEffect } from 'react';

import useDebounce from './useDebounce';
import { searchApi } from '../apis';
import { SearchType } from '../types/search';

const useSearch = () => {
  const [searchList, setSearchList] = useState<SearchType[]>([]);
  const [search, setSearch] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(-1);
  const debounceSearch = useDebounce(search);

  const handleCurrentIdxUpdate = (idx: number) => setCurrentIdx(idx);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleSearchReset = () => setSearch('');
  const handleClose = () => setIsShow(false);
  const handleOpen = () => setIsShow(true);

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
    (async function () {
      try {
        const newSearchList = await searchApi.get(debounceSearch);
        setSearchList(newSearchList);
      } catch (err) {
        console.log(err);
      } finally {
        handleCurrentIdxUpdate(-1);
      }
    })();
  }, [debounceSearch]);

  return {
    search,
    searchList,
    isShow,
    currentIdx,
    handleSearchChange,
    handleSearchReset,
    handleOpen,
    handleClose,
    handleKeyDown,
    handleCurrentIdxUpdate,
  };
};

export default useSearch;
