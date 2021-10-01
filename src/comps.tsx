import * as React from "react";
import { render } from "react-dom";
import Card from "./components/Card";
import Menu from "./components/Menu";
import TeX from "./components/TeX";
import "./index.scss";

render(
	<React.Fragment>
		<Menu />
		<div className="title">Comps</div>
		<Card>
			This page gives a brief introduction to my "comps" (<i>comp</i>rehensive senior project at
			Carleton). If you're interested, there is much more detail in the{" "}
			<a href="https://arxiv.org/abs/2008.01222">paper</a>!
		</Card>
		<Card>
			<h3>Introduction</h3>
			<p>
				For this project we focused on the{" "}
				<a href="//en.wikipedia.org/wiki/Irreducible_polynomial">reducibility</a> of polynomial
				iterates. What do we mean by iterates? If <TeX>f(x)</TeX> is an arbitrary polynomial, define
				the <TeX>n</TeX>th iterate of <TeX>f</TeX> to be
			</p>
			<TeX block math="f^n(x) = \underbrace{f(f(...f(x)))}_{n\ f\text{'s}}." />
			<p>
				We say that <TeX>f^n(x)</TeX> is <i>newly reducible</i> when each of{" "}
				<TeX math="f(x), f^2(x), ..., f^{n-1}(x)" /> is irreducible, but <TeX>f^n(x)</TeX> is
				reducible. Note that once some iterate <TeX>f^n</TeX> is reducible, all further iterates are
				also reducible. This is why we're interested in the <i>first</i> time an iterate of{" "}
				<TeX>f</TeX> is reducible.
			</p>
			<p>
				We can study newly reducible polynomial iterates over any field, but on this page we'll keep
				things limited to the rational numbers <TeX math="\mathbb{Q}" />.
			</p>
			<p>
				Let's look at an example: the polynomial <TeX>f(x) = x^2 - x - 1</TeX> is a famous one, being
				the minimal polynomial of the golden ratio <TeX>\varphi</TeX>. It is irreducible over{" "}
				<TeX math="\mathbb{Q}" /> because <TeX>\varphi</TeX> is irrational. Now let's look at its
				iterates:
			</p>
			<TeX
				block
				math={`\\begin{aligned}
				f^2(x) &= x^4 - 2x^3 - 2x^2 + 3x + 1 &&\\text{is irreducible.} \\\\
				f^3(x) &= (x^4 - 3x^3 + 4x - 1) (x^4 - x^3 - 3x^2 + x + 1) &&\\text{is reducible!}
				\\end{aligned}`}
			/>
			<p>
				So this polynomial has a newly reducible third iterate. This makes it very rare; there are
				only <i>eight</i> other monic quadratic integer polynomials <TeX>x^2 + ax + b</TeX> with{" "}
				<TeX math="|a| \le 10^5, |b| \le 10^9" /> that have newly reducible third iterates. Such
				rarity naturally inspires us to wonder: "What makes these polynomials special?" "How many are
				there total?" "Are there infinitely many?" So our preliminary questions were:
			</p>
			<ol type="1">
				<li>
					How many polynomials of the above form have newly reducible third iterates (over{" "}
					<TeX math="\mathbb{Q}" />
					)?
				</li>
				<li>
					Why is the minimal polynomial of <TeX>\varphi</TeX> one of them?
				</li>
			</ol>
			<p>
				We were able to find answers to these questions, as well as some equivelant questions for
				other iterates and other fields.
			</p>
			<p>We also tackled some additional questions, though they're not completely solved:</p>
			<ol type="1" start={3}>
				<li>
					Given a degree <TeX>d</TeX>, how many rational monic degree-<TeX>d</TeX> polynomials have
					newly reducible <i>second</i> iterates?
				</li>
				<li>
					Are there any rational polynomials with a newly reducible <i>fourth</i> iterate?
				</li>
				<li>
					Given <TeX math="n\geq 4" />, are there any rational polynomials with a newly reducible{" "}
					<i>
						<TeX>n</TeX>th
					</i>{" "}
					iterate?
				</li>
			</ol>
			<p>
				We made some progress on question 3 &mdash; it turns out that if <TeX>d = 3</TeX>,{" "}
				<TeX>d = 4</TeX>, or <TeX math="d\equiv 2\ (\text{mod}\ 4)" />, then there are infinitely many
				rational monic degree-<TeX>d</TeX> polynomials with a newly reducible second iterate! And this
				result still holds if we require the polynomials to have integer coefficients. For other{" "}
				<TeX math="d > 1" />, this remains an open question.
			</p>
		</Card>
		<Card>
			<h3>Quadratic Polynomials with Newly Reducible Second Iterate</h3>
			<p>
				Earlier we asked whether there were infinitely many monic quadratic integer polynomials with a
				newly reducible <i>third</i> iterate &mdash; A somewhat easier question is whether there are
				infinitely many with a newly reducible <i>second</i> iterate. In this section, we'll prove
				that there are!
			</p>
			<p>
				First, let <TeX>f(x) = (x-\gamma)^2 + m + \gamma</TeX>, for rational <TeX>m</TeX> and{" "}
				<TeX>\gamma</TeX>. This form is equivalent to the form <TeX>f(x)=x^2 + ax + b</TeX>, but makes
				iterates nicer to work with. Then <TeX>f</TeX> factors uniquely over the complex numbers as{" "}
				<TeX math="f(x) = ((x-\gamma)+\sqrt{-m-\gamma})((x-\gamma)-\sqrt{-m-\gamma})" />, so it's
				reducible over the rational numbers if and only if <TeX>-m-\gamma</TeX> is the square of a
				rational number. So if we want a newly reducible <i>second</i> iterate, we need{" "}
				<TeX>-m-\gamma</TeX> to not be a square.
			</p>
			<p>
				Now let's suppose <TeX>f^2(x)</TeX> is newly reducible. What does this tell us about{" "}
				<TeX>m</TeX> and <TeX>\gamma</TeX>? If <TeX>f^2(x)</TeX> is reducible, we can write it as
			</p>
			<TeX
				block
				math="f^2(x) = \left((x-\gamma)^2 + b_1(x-\gamma) + a_1\right)\left((x-\gamma)^2 - b_2(x-\gamma) + a_2\right)"
			/>
			<p>
				For some rational <TeX>a_1,a_2,b_1,b_2</TeX>. Note that here we assume that the degree-4
				polynomial factors into two quadratic polynomials, rather than a linear and a cubic. It turns
				out this is always the case when <TeX>f</TeX> is irreducible - this is Lemma 2.3 in the paper.
			</p>
			<p>
				On the other hand, we can also write <TeX>f^2(x)</TeX> as
			</p>
			<TeX
				block
				math={`\\begin{align*}
				f^2(x) &= f(f(x)) \\\\
				&= \\left( (x-\\gamma)^2 + m + \\gamma - \\gamma \\right)^2 + m + \\gamma \\\\
				&= (x-\\gamma)^4 + 2m(x-\\gamma) + m^2 + m + \\gamma.
				\\end{align*}`}
			/>
			<p>
				Then we can equate the coefficients of powers of <TeX>(x-\gamma)</TeX> in these two
				expressions to get the following system of equations:
			</p>
			<TeX
				block
				math={`\\begin{align*}
				m^2+m+\\gamma &= a_1a_2 \\\\
				0 &= a_1b_2 + a_2b_1 \\\\
				2m &= a_1 + a_2 + b_1b_2 \\\\
				0 &= b_1 + b_2
				\\end{align*}`}
			/>
			<p>
				The last equation shows that <TeX>b_2 = -b_1</TeX>. Putting this into the other equations
				gives
			</p>
			<TeX
				block
				math={`\\begin{align*}
				m^2+m+\\gamma &= a_1a_2 \\\\
				0 &= -a_1b_1 + a_2b_1 \\\\
				2m &= a_1 + a_2 - b_1^2
				\\end{align*}`}
			/>
			<p>
				Next we would like to use the second equation to say that <TeX>a_1 = a_2</TeX>, but{" "}
				<TeX>b_1</TeX> may be zero. Well, if it is zero, then solving the other equations for{" "}
				<TeX>m</TeX> and <TeX>\gamma</TeX> and putting those values into our expression for{" "}
				<TeX>f(x)</TeX> shows that
			</p>
			<TeX block math="f(x+\gamma) = \frac{1}{4}(2x - a_1 + a_2)(2x + a_1 - a_2)." />
			<p>
				However, we were assuming that <TeX>f^2(x)</TeX> is <i>newly</i> reducible, so this is a
				contradiction. Therefore, we know that <TeX>b_1\neq 0</TeX>, so in fact <TeX>a_1 = a_2</TeX>.
				Now solving the remaining equations gives
			</p>
			<TeX
				block
				math={`\\begin{align*}
					m &= \\frac{1}{2} \\left(2 a_1-b_1^2\\right) \\\\
					\\gamma &= \\frac{1}{4} \\left(4 a_1 b_1^2-4 a_1-b_1^4+2 b_1^2\\right)
					\\end{align*}\\tag{$\\ast$}`}
			/>
			<p>
				To summarize, we now know that if <TeX>f(x)</TeX> has a newly reducible second iterate, then
				there exist rational numbers <TeX>a_1</TeX> and <TeX>b_1</TeX> such that equations{" "}
				<TeX>(\ast)</TeX> are true.
			</p>
			<p>
				What about the opposite direction? Suppose we do have rational numbers <TeX>a_1</TeX> and{" "}
				<TeX>b_1</TeX>, and set <TeX>m</TeX> and <TeX>\gamma</TeX> as in equations <TeX>(\ast)</TeX>.
				Then <TeX>f^2</TeX> is reducible, because
			</p>
			<TeX block math="f^2(x+\gamma) = \left(x^2+b_1 x+a_1\right) \left(x^2-b_1 x+a_1\right)." />
			<p>
				For <TeX>f^2</TeX> to be <i>newly</i> reducible, we also need <TeX>f</TeX> to be irreducible.
				We said that this is the case whenever <TeX>-m-\gamma</TeX> is not the square of a rational
				number. Here we have
			</p>
			<TeX block math="-m-\gamma = - a_1 b_1^2 + \frac{1}{4} b_1^4" />
			<p>
				So we just need this number to not be a rational square. In other words, to prove that there
				are infinitely many <TeX>f(x)</TeX> with newly reducible second iterate, we just need
				infinitely many <TeX>a_1, b_1</TeX> pairs such that this number is not a square (and such that{" "}
				<TeX>m</TeX> and <TeX>\gamma</TeX> are integers).
			</p>
			<p>To find these, we rely on the facts that</p>
			<ul>
				<li>
					For any integer <TeX>n</TeX>, <TeX>n^2</TeX> is equivalent to 0 or 1 mod 3.
				</li>
				<li>
					For any integer <TeX>n</TeX>, <TeX>n</TeX> is a square if and only if <TeX>4n</TeX> is a
					square.
				</li>
				<li>
					For any integer <TeX>n</TeX>, if <TeX>n</TeX> is not the square of an integer, then it is
					also not the square of a rational number.
				</li>
			</ul>
			<p>
				Let <TeX>a_1</TeX> and <TeX>b_1</TeX> be integers equivalent to 2 mod 3. Then we have
			</p>
			<TeX
				block
				math={`\\begin{align*}
				4(-m-\\gamma) &= - 4 a_1 b_1^2 + b_1^4 \\\\
				&\\equiv - 1 * 2 * 1 + 1 \\ (\\text{mod}\\ 3) \\\\
				&\\equiv 2 \\ (\\text{mod}\\ 3) 
				\\end{align*}`}
			/>
			<p>
				Therefore <TeX>-m-\gamma</TeX> is not a square. Since there are infinitely many pairs of
				integers <TeX>(a_1,b_1)</TeX> equivalent to 2 mod 3, we now know there are infinitely many
				rational polynomials <TeX>f(x)</TeX> with a newly reducible second iterate! To complete the
				proof, we just need to find that infinitely many of these pairs also result in <TeX>f(x)</TeX>{" "}
				with integer coefficients. Looking at equations <TeX>(\ast)</TeX>, we see that this is
				satisfied whenever <TeX>b_1</TeX> is divisible by 2. Since there are infinitely many{" "}
				<TeX>b_1</TeX> that are both divisible by 2 and equivalent to 2 mod 3 (all integers of the
				form <TeX>6n + 2</TeX>), we have completed our proof!
			</p>
			<p>Here's some Mathematica code for experimental validation:</p>
			<textarea
				className="codeblock"
				readOnly
				rows={13}
				value={`Do[
 Do[
  a1 = 3*i + 2;
  b1 = 2*j*3 + 2;
  m = (2 a1 - b1^2)/2;
  gamma = (4 a1*b1^2 - 4 a1 - b1^4 + 2 b1^2)/4;
  f[x_] := (x - gamma)^2 + m + gamma;
  If[Not[IntegerQ[m] && IntegerQ[gamma] && 
     IrreduciblePolynomialQ[f[x]] && 
     Not[IrreduciblePolynomialQ[f[f[x]]]]],
   Print["Counterexample!"]];
  , {j, 0, i}]
 , {i, 0, 100}]`}
			/>
		</Card>
	</React.Fragment>,
	document.querySelector("#root") as HTMLElement,
);
