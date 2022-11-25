import React, { Children } from "react";
import { useEffect, useState, useContext, createContext } from "react";

const scrollContext= React.createContext();
  const context = scrollContext;
  function ScrollProvider({ children }) {
    const [first, setFirst] = useState(0);
    const [size, setSize] = useState(0);
    useEffect(() => {
        setFirst(0);
        setSize(18);
    }, []);
    return (
      <context.Provider value={{first: first, setFirst: setFirst, setSize: setSize, size:size}}>
        {children}
      </context.Provider>
    );
  }
 
const ScrollConsumer= scrollContext.Consumer;
ScrollProvider.context = scrollContext;

export {scrollContext, ScrollProvider, ScrollConsumer};