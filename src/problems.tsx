import * as React from "react";
import { render } from "react-dom";
import Problems from "./components/Problems";
import "./index.scss";

render(<Problems />, document.querySelector("#root") as HTMLElement);
