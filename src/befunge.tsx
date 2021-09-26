import * as React from "react";
import { render } from "react-dom";
import Befunge from "./components/Befunge";
import "./befunge.scss";

render(<Befunge />, document.querySelector("#root") as HTMLElement);
