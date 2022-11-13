import React, { Children } from "react";
import { useEffect, useState, useContext, createContext } from "react";

const scrollContext= React.createContext();
  const context = scrollContext;
  function ScrollProvider({ children }) {
    // The useState() hook defines a state variable.
    const [first, setFirst] = useState(0);
    const [size, setSize] = useState(0);
    // The useEffect() hook registers a function to run after render.
    useEffect(() => {
        setFirst(0);
        setSize(18);
    }, []);  // This empty array means the effect will only run once.
    // On the first render userData will have the default value null.
    // But after that render, the effect function will run and will
    // start a fetch of the real user data. When the data arrives, it
    // will be passed to setUserData(), which changes state and
    // triggers a new render. On this second render, we'll have real
    // user data to provide to any consumers. (And the effect will not
    // run again.)
    return (
      <context.Provider value={{first: first, setFirst: setFirst, setSize: setSize, size:size}}>
        {children}
      </context.Provider>
    );
  }
 
const ScrollConsumer= scrollContext.Consumer;
ScrollProvider.context = scrollContext;

export {scrollContext, ScrollProvider, ScrollConsumer};