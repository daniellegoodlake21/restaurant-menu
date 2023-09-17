import { createContext } from "react";
import { MenuInterface } from "../Menu";

export const context = createContext<MenuInterface | null>(null);