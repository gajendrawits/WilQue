import React, { useEffect, useState } from "react";
import useGet from "src/hooks/useGet";

interface SearchProps {
  searchQuery: string | undefined;
  handleSearch: any;
}

const SearchQuestions = ({ searchQuery, handleSearch }: SearchProps) => {
  const { refetch: fetchQuestions, data } = useGet(
    "searchQuestion",
    `/questions/${searchQuery}`
  );

  useEffect(() => {
    if (searchQuery === undefined) {
      return;
    } else {
      const fetchQuestionsData = setTimeout(() => {
        fetchQuestions();
      }, 2000);
      return () => clearTimeout(fetchQuestionsData);
    }
  }, [searchQuery]);

  handleSearch(data);
  return <></>;
};

export default SearchQuestions;
