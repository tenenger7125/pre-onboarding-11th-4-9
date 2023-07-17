import { SearchType } from '../types/search';
import { useState } from 'react';
import { useEffect } from 'react';
import { searchApi } from '../apis';

const useSearch = () => {
  const [searchList, setSearchList] = useState<SearchType[]>([]);
  const [search, setSearch] = useState('');
  const [isShow, setIsShow] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleSearchReset = () => setSearch('');
  const handleClose = () => setIsShow(false);
  const handleOpen = () => setIsShow(true);

  useEffect(() => {
    (async function () {
      try {
        const newSearchList = await searchApi.get(search);
        setSearchList(newSearchList);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [search]);

  return {
    search,
    searchList,
    isShow,
    handleSearchChange,
    handleSearchReset,
    handleOpen,
    handleClose,
  };
};

export default useSearch;
