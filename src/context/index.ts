import { createContext } from "react";
import { MenuInterface } from "../Menu";
import { initialState } from "../reducer";

export const context = createContext(initialState);