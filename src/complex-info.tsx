import * as React from "react";
import { render } from "react-dom";
import Card from "./components/Card";
import Menu from "./components/Menu";
import TeX from "./components/TeX";
import "./index.scss";

const ComplexInfo: React.FC = (): JSX.Element => (
	<React.Fragment>
		<Menu />
		<div className="title">About the Complex Function Plotter</div>
		<Card>
			<p>
				The complex function plotter graphs a function{" "}
				<TeX math="f:\mathbb{C}\rightarrow\mathbb{C}" />, by treating each pixel as a complex number.
				Roughly, for a pixel at position <TeX>(x, y)</TeX> it will calculate{" "}
				<TeX math="f(\mathrm{scale}(x)+\mathrm{scale}(y)i" />, where 'scale' represents the scaling
				and offset depending on the window size and position.
			</p>
			<p>
				It then colors the pixel based on the value of <TeX>f</TeX> at that point; the hue varies with
				the argument of the value, and the lightness varies with the modulus of the value (zero is
				black and infinity is white).
			</p>
			<p>
				You can use most any alphanumeric string as a variable, except for the reserved numbers{" "}
				<TeX>i</TeX>, <TeX>e</TeX>, and <TeX>pi</TeX>, and function names.
			</p>
		</Card>
		<Card>
			<p>Supported functions, along with the usual arithmetic functions (+ - * / ^)</p>
			<table className="command_table">
				<colgroup>
					<col style={{ width: "25%" }}></col>
					<col style={{ width: "75%" }}></col>
				</colgroup>
				<tbody>
					<tr>
						<th>Function</th>
						<th>Meaning</th>
					</tr>
					<tr>
						<td>sin, cos, tan</td>
						<td>
							The standard trig functions,{" "}
							<TeX math="\cos(z) = \dfrac{e^{i z} + e^{-i z}}{2}" /> and so on
						</td>
					</tr>
					<tr>
						<td>exp</td>
						<td>
							<TeX math="\exp(z) = e^{z}" />
						</td>
					</tr>
					<tr>
						<td>ln, log</td>
						<td>
							Log base <TeX>e</TeX>
						</td>
					</tr>
					<tr>
						<td>sinh, cosh</td>
						<td>Hyperbolic sin and cos</td>
					</tr>
					<tr>
						<td>tet</td>
						<td>
							<TeX math="\mathrm{tet}(z, n) = \left. z^{z^{...^z}} \right\} n" /> copies of{" "}
							<TeX>z</TeX> .<br />
							If <TeX>n</TeX> isn't an integer, it will be turned into one via{" "}
							<TeX math="n\mapsto \mathrm{floor}(\mathrm{Re}(n))" />.
						</td>
					</tr>
					<tr>
						<td>Re, Im</td>
						<td>The real/imaginary part of the input</td>
					</tr>
					<tr>
						<td>iterate[f, n, varName]</td>
						<td>
							Iterates the function <TeX>f</TeX>, <TeX>n</TeX> times, treating <TeX>f</TeX> as a
							function of varName. For example, if <TeX math="f(x,y) = x^2+y" />, then
							iterate[f,2,x] becomes <TeX math="(x^2+y)^2+y" />. So iterate[f,2,x](y,y) =
							<TeX math="(y^2+y)^2+y" /> is a function of a single variable and can be plotted!
							<br />
							Another example,{" "}
							<a href="/complex.html#iterate[x^2+z,40,x](z,z)&-0.7332,0&2.8">
								iterate[x^2+z,40,x](z,z)
							</a>{" "}
							gives an approximation of the Mandelbrot set.
							<br />
							You can even nest it!{" "}
							<a href="/complex.html#iterate[iterate[x^3+y^2+z,5,x](y,y,z),5,y](z,z)&0,0&1.6">
								iterate[iterate[x^3+y^2+z,5,x](y,y,z),5,y](z,z)
							</a>
							(the order of the parameters is the order in which they appear in the inner
							function)
						</td>
					</tr>
				</tbody>
			</table>

			<p>Non-obvious buttons:</p>
			<table className="command_table">
				<colgroup>
					<col style={{ width: "25%" }} />
					<col style={{ width: "75%" }} />
				</colgroup>
				<tbody>
					<tr>
						<th>Button</th>
						<th>Effect</th>
					</tr>
					<tr>
						<td style={{ textAlign: "center" }}>
							<picture>
								<source type="image/webp" srcSet="/images/mathcalO.webp" />
								<img src="/images/mathcalO.png" width="32px" alt="fancy O" />
							</picture>
						</td>
						<td>Resets the view, so that the center is 0 and the width is 10.</td>
					</tr>
					<tr>
						<td style={{ textAlign: "center" }}>
							<picture>
								<source type="image/webp" srcSet="/images/lockAspectRatio.webp" />
								<img src="/images/lockAspectRatio.png" width="32px" alt="lock" />
							</picture>
						</td>
						<td>
							Locks/unlocks the aspect ratio, and hides/shows an input box for window height. If
							the aspect ratio is locked (default), the height is automatically set based on the
							width.
						</td>
					</tr>
					<tr>
						<td style={{ textAlign: "center" }}>
							<picture>
								<source type="image/webp" srcSet="/images/magnifier.webp" />
								<img src="/images/magnifier.png" width="32px" alt="magnifying glass" />
							</picture>
						</td>
						<td>Changes the resolution (number of pixels)</td>
					</tr>
					<tr>
						<td style={{ textAlign: "center" }}>
							<picture>
								<source type="image/webp" srcSet="/images/link.webp" />
								<img src="/images/link.png" width="32px" alt="chain link" />
							</picture>
						</td>
						<td>Copies a link to the current view to the clipboard.</td>
					</tr>
					<tr>
						<td style={{ textAlign: "center" }}>
							<picture>
								<source type="image/webp" srcSet="/images/i.webp" />
								<img src="/images/i.png" width="32px" alt="i" />
							</picture>
						</td>
						<td>Takes you to this page... you probably already figured this one out</td>
					</tr>
				</tbody>
			</table>
		</Card>
	</React.Fragment>
);

render(<ComplexInfo />, document.querySelector("#root") as HTMLElement);
