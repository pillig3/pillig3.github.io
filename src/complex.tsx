import * as React from "react";
import { render } from "react-dom";
import "./complex.scss";
import ComplexPlotter from "./components/ComplexPlotter";

render(<ComplexPlotter />, document.querySelector("#root") as HTMLElement);
