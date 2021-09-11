import * as React from "react";
import { ComponentPropsWithoutRef } from "react";
import Card from "./Card";
import Menu from "./Menu";
import TeX from "./TeX";
import circlesPng from "../images/firstThreeCircles.png";
import circlesWebp from "../images/firstThreeCircles.webp";

const Problems: React.FC = (): JSX.Element => {
	let problemNum = 1;
	return (
		<React.Fragment>
			<Menu />
			<div className="title reset_counter">Problems</div>
			<Card>
				A collection of some fun math puzzles and problems! Be warned, a few of them may be unsolved.
			</Card>
			<ProblemCard num={problemNum++}>
				You have a <TeX>100 \times 100</TeX> grid of computers, and a {InlineCode("hacker")} would
				like to infect all of them with a virus. The computers are connected in a way such that if{" "}
				<TeX>3</TeX> computers in any <TeX>2 \times 2</TeX> sub-grid are infected, the fourth also
				becomes infected one second later (you should probably talk to IT about that). The{" "}
				{InlineCode("hacker")} has one chance to simultaneously infect whichever computers they want,
				but they have only <TeX>N</TeX> copies of the virus. What is the smallest value of{" "}
				<TeX>N</TeX> such that the {InlineCode("hacker")} is able to infect all of the computers? For
				instance, if it were a <TeX>2 \times 2</TeX> grid, the {InlineCode("hacker")} would have to
				infect at least <TeX>3</TeX> of them.
			</ProblemCard>
			<ProblemCard num={problemNum++}>
				Let 2018 points in the plane be given, of which 1009 are colored{" "}
				<span className="red">red</span>, and the rest are colored <span className="blue">blue</span>.
				Assume that no three points are colinear. How many line segments can be placed such that:
				<ol type="a">
					<li>
						Each segment connects a <span className="red">red</span> point with a{" "}
						<span className="blue">blue</span> point, and
					</li>
					<li>Any two segments do not intersect, except possibly at a shared endpoint?</li>
				</ol>
			</ProblemCard>
			<ProblemCard num={problemNum++}>
				Alice is in a prison with <TeX>N</TeX> (possibly 0) other prisoners. Alice does not know{" "}
				<TeX>N</TeX> and wishes to determine this value.
				<p>
					Each day, every prisoner (including Alice) will be presented with a white card and a black
					card. The prisoner will select one of these. The warden will look at all the selected
					cards and choose an <TeX>N+1</TeX>-cycle. Then, he will permute the cards according to
					that cycle and redistribute the cards as such. So each prisoner will give one bit of
					information each day and receive one bit of information each day. The warden may choose a
					different cycle each day, and he may base his choice on which cards his prisoners select.
				</p>
				<p>
					Before this game is to begin, Alice may write down instructions, which will be copied and
					distributed to the other prisoners. The warden will be able to see these instructions.
				</p>
				<p>Devise a strategy so that</p>
				<ol type="a">
					<li>(Easy) Alice can determine if she is the only prisoner.</li>
					<li>
						(a little less easy) Alice can determine whether there is exactly one other prisoner.
					</li>
					<li>(Medium) Alice can determine an upper bound for the number of prisoners.</li>
					<li>
						(Hard) All prisoners, including Alice, can determine <TeX>N</TeX> exactly.
					</li>
				</ol>
			</ProblemCard>
			<ProblemCard num={problemNum++}>
				Place a circle of radius 1 inside the parabola <TeX>y = x^2</TeX> so that it is tangent to
				both arms of the parabola. Then place a second circle so that it is tangent to the first
				circle and both arms. Continue adding circles this way to get an infinite stack of circles
				(see image below). What portion of the area above the parabola is covered by the circles?
				<div>
					<picture className="centered">
						<source type="image/webp" srcSet={circlesWebp} />
						<img className="centered" src={circlesPng} alt="circles inside y=x^2" />
					</picture>
				</div>
			</ProblemCard>
			<ProblemCard num={problemNum++}>
				Let <TeX>f(x)</TeX> be a polynomial with integer coefficients, and let <TeX>\sigma_0(n)</TeX>{" "}
				be the number of divisors of <TeX>n</TeX> (e.g. <TeX>\sigma_0(10)=4</TeX>). Consider the
				sequence
				<TeX
					math="
						\{ n, \sigma_0(f(n)), \sigma_0(f(\sigma_0(f(n)))), ..., (\sigma_0\circ f)^i(n), ... \}
					"
					block
				/>
				Is this sequence eventually periodic for all integer <TeX>n</TeX>?
			</ProblemCard>
			<ProblemCard num={problemNum++}>
				Do there exist uncountably many subsets of <TeX math="\mathbb{R}" /> such that no two of the
				subsets have an element in common, each of the subsets is uncountable, and each of the subsets
				is dense in <TeX math="\mathbb{R}" />?
			</ProblemCard>
			<ProblemCard num={problemNum++}>
				Define the functions <TeX math="n,d:\mathbb{Q}^+\rightarrow\mathbb{Q}^+" /> as
				<TeX
					math="
					\begin{align*}
					n(q) = n\left(\frac{a}{b}\right) &= \frac{a+1}{b} \\
					d(q) = d\left(\frac{a}{b}\right) &= \frac{a}{b+1}
					\end{align*}
					"
					block
				/>
				Where <TeX>q = a/b</TeX> is in lowest terms, i.e. the greatest common denominator of{" "}
				<TeX>a</TeX> and <TeX>b</TeX> is 1. Is it always possible, given{" "}
				<TeX math="q_1,q_2\in\mathbb{Q}^+" />, to get from <TeX>q_1</TeX> to <TeX>q_2</TeX> by
				applying some sequence of <TeX>n</TeX>s and <TeX>d</TeX>s? For example, we can get from{" "}
				<TeX>8/3</TeX> to <TeX>3/2</TeX> as:
				<TeX block>d(n(8/3)) = d(3) = 3/2.</TeX>
			</ProblemCard>
			<ProblemCard num={problemNum++}>
				Construct the sequence <TeX>(a_n)</TeX> as follows: Let <TeX>a_0 = 0, a_1 = 1</TeX>, and for{" "}
				<TeX>n\geq 2</TeX> let <TeX>a_n</TeX> be the number of times <TeX math="a_{n-1}" /> has
				appeared so far plus the number of times <TeX math="a_{n-2}" /> has appeared so far. In other
				words, if we let
				<TeX
					math="
					freq(i,j) = \left\lvert\{ k\ |\ a_k = i \text{ and } k < j \}\right\rvert
					"
					block
				/>
				Then
				<TeX
					math="
					a_n = freq(a_{n-2}, n) + freq(a_{n-1}, n).
					"
					block
				/>
				This sequence begins:
				<TeX block>
					0, 1, 2, 2, 4, 3, 2, 4, 5, 3, 3, 6, 4, 4, 8, 5, 3, 6, 6, 6, 8, 6, 7, 6, 7, 8, 5, 6, 10, 8,
					5, 8, 9, 6, 9, 10, 4, 7, 8, 9, 9, 8, 11, 8, 9, 13, 6, 10, 12, 4, 7, 10, 8, 13, 11, 4, 9,
					13, 9, 10, 12, 7, 7, 12, 9, 11, 11, 8, 14, 11, 6, 15, 11, 7, 13, 11, 11, 16, 9, 10, ...
				</TeX>
				And is sometimes referred to as "The Devil's Sequence" (by me), due to the early presence of
				three consecutive 6s (and my inability to understand it). The next time a number occurs three
				times in a row isn't until <TeX math="a_{355677}" /> (!).
				<p>Some problems:</p>
				<ol type="a">
					<li>
						For any <TeX math="n\in\mathbb{N}" />, does <TeX>n</TeX> appear at least once in this
						sequence?
					</li>
					<li>
						For any <TeX math="n\in\mathbb{N}" />, does <TeX>n</TeX> appear only finitely many
						times in this sequence?
					</li>
				</ol>
				Other intriguing questions include:
				<ol type="a" start={3}>
					<li>
						If each <TeX>n</TeX> does appear only finitely many times, approximately how many
						times does it appear? (It seems to be close to <TeX>2n</TeX>)!
					</li>
					<li>
						What are the best possible upper/lower bounds on <TeX>a_n</TeX>?
					</li>
					<li>
						Let <TeX>r(k)</TeX> be the smallest <TeX>n</TeX> such that{" "}
						<TeX math="\{0,1,2,...,k\}\subseteq\{a_0,...,a_n\}" />. What is the asymptotic
						behavior of <TeX>r</TeX>? (It seems to be close to <TeX>x^2 / 2</TeX>)!
					</li>
				</ol>
				Really, proving anything about this sequence would be awesome. This problem comes from{" "}
				<a href="//www.reddit.com/r/mathriddles/comments/318rzm/properties_of_a_strange_rather_meta_sequence_not">
					an old reddit post
				</a>
				.
			</ProblemCard>
		</React.Fragment>
	);
};

function InlineCode(text: string): JSX.Element {
	return <span className="inline_code">{text}</span>;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ children, num }) => (
	<Card>
		{num}.&nbsp;{children}
	</Card>
);

type ProblemCardProps = ComponentPropsWithoutRef<"div"> &
	Partial<{
		num: number;
	}>;

export default Problems;
