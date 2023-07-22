import { useState, useEffect, useCallback } from 'react';

import useDebounce from './useDebounce';
import { searchApi } from '../apis';
import { SearchType } from '../types/search';

const limitSearchList = (list: SearchType[], num: number) => list.slice(0, num);

const useSearch = () => {
  const [searchList, setSearchList] = useState<SearchType[]>([]);
  const [search, setSearch] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(-1);
  const debounceSearch = useDebounce(search);

  const handleCurrentIdxUpdate = useCallback((idx: number) => setCurrentIdx(idx), []);
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value), []);
  const handleSearchReset = useCallback(() => setSearch(''), []);
  const handleClose = useCallback(() => setIsShow(false), []);
  const handleOpen = useCallback(() => setIsShow(true), []);

  const handleSearchKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    e => {
      const searchKeyDownHashTable: { [index: string]: () => void } = {
        ArrowUp() {
          e.preventDefault();
          setCurrentIdx(prev => (prev >= 0 ? prev - 1 : prev));
        },
        ArrowDown() {
          e.preventDefault();
          setCurrentIdx(prev => (prev < searchList.length - 1 ? prev + 1 : prev));
        },
      };

      searchKeyDownHashTable[e.key];
    },
    [searchList],
  );

  useEffect(() => {
    (async () => {
      try {
        const newSearchList = await searchApi.get(debounceSearch);
        setSearchList(limitSearchList(newSearchList, 6));
      } catch (err) {
        console.log(err);
      } finally {
        handleCurrentIdxUpdate(-1);
      }
    })();
  }, [debounceSearch, handleCurrentIdxUpdate]);

  return {
    search,
    searchList,
    isShow,
    currentIdx,
    handleSearchChange,
    handleSearchReset,
    handleOpen,
    handleClose,
    handleSearchKeyDown,
    handleCurrentIdxUpdate,
  };
};

export default useSearch;
