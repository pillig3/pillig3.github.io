import * as React from "react";
import { render } from "react-dom";
import Home from "./components/Home";
import "./index.scss";

render(<Home />, document.querySelector("#root") as HTMLElement);
