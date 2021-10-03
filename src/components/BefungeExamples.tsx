import React, { ComponentPropsWithoutRef } from "react";
import { useState } from "react";
import chevronPng from "../images/chevron.png";
import chevronWebp from "../images/chevron.webp";

const BefungeExamples: React.FC<ExamplesProps> = ({ setInputTextAndState }) => {
	const [expanded, toggleExpanded] = useState(false);

	return (
		<div className={expanded ? "examples_expanded" : "examples_collapsed"}>
			{MainButton(expanded, toggleExpanded)}
			{expanded ? (
				<div className="centered fit_content flex">
					{buildButton(
						"helloWorld",
						"Hello World!",
						setInputTextAndState,
						`"!dlrow olleH"v,_@
              >:^`,
					)}
					{buildButton(
						"factorial",
						"Factorial",
						setInputTextAndState,
						`&:>00pv
  *   1
  g   -
  0   :
.@^0 :_00g`,
					)}
					{buildButton(
						"factor",
						"Factor",
						setInputTextAndState,
						`&:." =",,:v ; Factors an integer
v  _v#\`0:<_0.@
 -10<    ^*-10\\
>00p>00g1-#v_>:#._@
^/\\g00:<   2
     >   1+v
     ^_^#%<:
          \\0
          g0
          ^<`,
					)}
					{buildButton(
						"binomial",
						"Binomial",
						setInputTextAndState,
						`>            a         4         v
 calculates n^ choose k^
v                                < makes k>n-k
>:1aa*p \\ :0aa*p \\ -: 1aa*g \\\`#v_ 1aa*g2av
 n-k!                    vp*aa2<vp*aa1p*a<
v:g*aa2     tv#     tv#  <      <
>3aa*p1-:v    v:g*aa0<        >16aa*p@
^ *g*aa3:_v   >4aa*p:1aa*g1+-v
   @p*aa51<   ^ * g*aa4 : -1 _^
<v -1  g*aa5 <
$>6aa*g 1-v
^      _v#<
^       _4aa*g3aa*g/.q`,
					)}
					{buildButton(
						"pi",
						"Pi",
						setInputTextAndState,
						`;              5                ;v>74* 383*p >0:>446*g\\\`#v_383*g1+383*p0083*p1-:v
;  calculates n^ digits of pi   ;    *----*   v- 1g*383::<v g*380g-1g*383 <p*831<
;  with the spigot algorithm    ; n  | -> |   >g a*\\383*gv>+:138*g2d*g:00v^_v
;  described in [1]             ;    |loop|     ^ : +1 p <v0pg*383g*381%p< +n
v 1p*6460 p-1*554: /3*a p-1*552: <p  *----*               >0g/138*g55*g*0v 10
> 055*p 10>+00p:00g\`#v_a0d2*p2093*^v               p*646+1g*646<v*381p*38< :c
v*d2\\+1*2p *55::::g00<         v_v# \`\\g*646:< 1,8.+1g*2c5<;10; n>g1-:138*p ^2
>p:2\\39*p1^       vp*6461p*6450>#<    0.8,1+^ v  !g*646 _^#-a _^#- 9 : g *  <
546*p1646*pv      <                <  >-2c2*p|>#v_546*g.8,1>:646*g\\\`#v_083*g
           > 383*g1+383*p   22c*g:0\`\\1^      @  >         1^ +1 ,8.9 <

_____________________________________________________________________________
                                                                             |
References:                                                                  |
 [1] - S. Rabinowitz and S. Wagon, A Spigot Algorithm for the Digits of Pi.  |
       The American Mathematical Monthly, 102:195-203, 1995.                 |
 [2] - J. Gibbons, An unbounded spigot algorithm for the digits of Pi.       |
       The American Mathematical Monthly, 113(4):318-328, 2006.              |
                                                                             |
_____________________________________________________________________________|`,
					)}
					{buildButton(
						"quine",
						"Quine",
						setInputTextAndState,
						`200p010p0v>v·················g01g00<
v·,8.,8.2<·g·······>····>,·00g1+00p^
>00g10g···^>:3a*2+-|················
:gp01:+1g01p0000,a$<····|-+2*a3·····
························@···········
·······This·is·a·simple·quine·······
·····(self-reproducing·program)·····
··It·is·quite·easy·to·write·a·quine·
in·befunge,·due·to·its·introspective
nature.·This·one·prints·itself·until
it·encounters·whitespace,·hence·the·
dots·everywhere.·The·algorithm·is:··
····································
0.·Write·out·the·first·two·numbers,·
···since·these·cells·are·later·used·
···as·storage·locations.············
1.·Initialize·x=2,y=0.··············
2.·Get·position·(x,y).··············
3.·If·it·is·empty:··················
····a.·Write·a·new·line.············
····b.·Increment·y·and·set·x=0.·····
····c.·Get·(x,y)·again.·············
····d.·If·it·is·still·empty,·halt.··
4.·Write·it·out.····················
5.·Increment·x.·····················
6.·Go·to·step·2.····················`,
					)}
				</div>
			) : null}
		</div>
	);
};

function buildButton(
	id: string,
	text: string,
	setInputTextAndState: (text: string) => void,
	code: string,
): JSX.Element {
	return (
		<div className="button_container">
			<button
				id={id}
				onClick={() => {
					setInputTextAndState(code);
				}}
			>
				{text}
			</button>
		</div>
	);
}

function MainButton(
	expanded: boolean,
	toggleExpanded: React.Dispatch<React.SetStateAction<boolean>>,
): JSX.Element {
	return (
		<button id="examplesButton" onClick={() => toggleExpanded(!expanded)}>
			<div id="chevronContainer" className={"float_left" + (expanded ? " upsidedown" : "")}>
				<picture style={{ verticalAlign: "middle" }}>
					<source type="image/webp" srcSet={chevronWebp} />
					<img src={chevronPng} height="14px" width="14px" alt="" />
				</picture>
			</div>
			&nbsp;Examples
		</button>
	);
}

export default BefungeExamples;

type ExamplesProps = ComponentPropsWithoutRef<"div"> & {
	setInputTextAndState: (text: string) => void;
};
