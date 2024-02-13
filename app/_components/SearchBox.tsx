'use client';

import {useState} from "react";

export const SearchBox = () => {
  const [query, setQuery] = useState("");
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};
