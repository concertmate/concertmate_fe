import React from "react";
import { UserAuthentication } from "../data/type";

const AppContext = React.createContext<UserAuthentication | false>(false);

export default AppContext