import { SearchType } from '../types/search';
import { useState } from 'react';
import { useEffect } from 'react';
import { searchServices } from '../services/search';

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
        const searchList = await searchServices.search(search);
        setSearchList(searchList);
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
