import React, { useState, useEffect } from "react";

const useContact = (key) => {
  const [list, setList] = useState(() => {
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(list));
  }, [list]);

  return [list, setList];
};

export default useContact;
