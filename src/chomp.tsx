import * as React from "react";
import { render } from "react-dom";
import Chomp from "./components/Chomp";
import "./chomp.scss";

render(<Chomp />, document.querySelector("#root") as HTMLElement);
