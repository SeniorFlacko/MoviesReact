import React, { FunctionComponent, useState } from "react";
import AppContext from "./AppContext";
import { IMovie, State } from "./types";

interface OwnProps {
  providerInitState: IMovie;
}

type Props = OwnProps;

const AppProvider: FunctionComponent<Props> = ({
  providerInitState,
  children,
}) => {
  const [currentMovie, setCurrentMovie] = useState<IMovie>(providerInitState);

  const cleanState = () => {
    setCurrentMovie({
      name: "",
      category: "",
      releaseDate: null,
      image: "",
    });
  };

  return (
    <AppContext.Provider
      value={{
        cleanState,
        currentMovie,
        setCurrentMovie,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
