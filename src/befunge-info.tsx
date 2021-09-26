import * as React from "react";
import { render } from "react-dom";
import BefungeInfo from "./components/BefungeInfo";
import "./index.scss";

render(<BefungeInfo />, document.querySelector("#root") as HTMLElement);
