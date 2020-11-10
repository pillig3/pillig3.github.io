'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var el = React.createElement;

var ProblemContent = function (_React$Component) {
  _inherits(ProblemContent, _React$Component);

  function ProblemContent(props) {
    _classCallCheck(this, ProblemContent);

    return _possibleConstructorReturn(this, (ProblemContent.__proto__ || Object.getPrototypeOf(ProblemContent)).call(this, props));
  }

  _createClass(ProblemContent, [{
    key: 'render',
    value: function render() {
      var counter = 1;
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'div',
          { className: 'card' },
          'A collection of some fun math puzzles and problems! Be warned, a few of them may be unsolved.'
        ),
        React.createElement(ProblemCard, {
          number: counter++,
          content: React.createElement(
            'div',
            null,
            'You have a \\( 100\\times 100 \\) grid of computers, and a ',
            React.createElement(
              'span',
              { 'class': 'code' },
              'hacker'
            ),
            ' would like to infect all of them with a virus. The computers are connected in a way so that if \\( 3 \\) computers in any \\( 2\\times 2 \\) sub-grid are infected, the fourth also becomes infected one second later (you should probably talk to IT about that).',
            React.createElement('br', null),
            'The ',
            React.createElement(
              'span',
              { 'class': 'code' },
              'hacker'
            ),
            ' has one chance to simultaneously infect whichever computers they want, but they have only \\(N\\) copies of the virus. What is the smallest value of \\(N\\) such that the ',
            React.createElement(
              'span',
              { 'class': 'code' },
              'hacker'
            ),
            ' is able to infect all of the computers? For instance, if it were a \\( 4\\times 4 \\) grid, the ',
            React.createElement(
              'span',
              { 'class': 'code' },
              'hacker'
            ),
            ' would have to infect at least \\( 3 \\) of them.'
          )
        }),
        React.createElement(ProblemCard, {
          number: counter++,
          content: React.createElement(
            'div',
            null,
            'Let 2018 points in the plane be given, of which 1009 are colored ',
            React.createElement(
              'span',
              { 'class': 'red' },
              'red'
            ),
            ', and the rest are colored ',
            React.createElement(
              'span',
              { 'class': 'blue' },
              'blue'
            ),
            '. Assume that no three points are colinear. How many line segments can be placed such that:',
            React.createElement(
              'ol',
              { type: 'a' },
              React.createElement(
                'li',
                null,
                'Each segment connects a ',
                React.createElement(
                  'span',
                  { 'class': 'red' },
                  'red'
                ),
                ' point with a ',
                React.createElement(
                  'span',
                  { 'class': 'blue' },
                  'blue'
                ),
                ' point, and'
              ),
              React.createElement(
                'li',
                null,
                'Any two segments do not intersect, except possibly at a shared endpoint?'
              )
            )
          )
        }),
        React.createElement(ProblemCard, {
          number: counter++,
          content: React.createElement(
            'div',
            null,
            'Alice is in a prison with \\( N \\) (possibly 0) other prisoners. Alice does not know \\( N \\) and wishes to determine this value.',
            React.createElement(
              'p',
              null,
              'Each day, every prisoner (including Alice) will be presented with a white card and a black card. The prisoner will select one of these. The warden will look at all the selected cards and choose an \\( (N+1) \\)-cycle. Then, he will permute the cards according to that cycle and redistribute the cards as such. So each prisoner will give one bit of information each day and receive one bit of information each day. The warden may choose a different cycle each day, and he may base his choice on which cards his prisoners select.'
            ),
            React.createElement(
              'p',
              null,
              'Before this game is to begin, Alice may write down instructions, which will be copied and distributed to the other prisoners. The warden will be able to see these instructions.'
            ),
            React.createElement(
              'p',
              null,
              'Devise a strategy so that',
              React.createElement(
                'ol',
                { type: 'a' },
                React.createElement(
                  'li',
                  null,
                  '(Easy) Alice can determine if she is the only prisoner.'
                ),
                React.createElement(
                  'li',
                  null,
                  '(a little less easy) Alice can determine whether there is exactly one other prisoner.'
                ),
                React.createElement(
                  'li',
                  null,
                  '(Medium) Alice can determine an upper bound for the number of prisoners.'
                ),
                React.createElement(
                  'li',
                  null,
                  '(Hard) All prisoners, including Alice, can determine \\( N \\) exactly.'
                )
              )
            )
          )
        }),
        React.createElement(ProblemCard, {
          number: counter++,
          content: React.createElement(
            'div',
            null,
            'Place a circle of radius 1 inside the parabola \\( y=x^2 \\) so that it is tangent to both arms of the parabola. Then place a second circle so that it is tangent to the first circle and both arms. Continue adding circles this way to get an infinite stack of circles (see image below).',
            React.createElement('br', null),
            'What portion of the area above the parabola is covered by the circles?',
            React.createElement(
              'p',
              { 'class': 'centered' },
              React.createElement(
                'picture',
                null,
                React.createElement('source', { type: 'image/webp', srcset: '/images/firstThreeCircles.webp' }),
                React.createElement('img', { src: '/images/firstThreeCircles.png', alt: 'circles inside y=x^2' })
              )
            )
          )
        }),
        React.createElement(ProblemCard, {
          number: counter++,
          content: React.createElement(
            'div',
            null,
            'Let \\( f(x) \\) be a polynomial with integer coefficients, and let \\( \\sigma_0(n) \\) be the number of divisors of \\( n \\) (e.g. \\( \\sigma_0(10)=4 \\)). Consider the sequence',
            React.createElement(
              'p',
              { 'class': 'centered' },
              '\\( ',
              "\\left\\{",
              'n, \\sigma_0(f(n)), \\sigma_0(f(\\sigma_0(f(n)))), ..., (\\sigma_0\\circ f)^i(n),...',
              "\\right\\}",
              ' \\)'
            ),
            'Is this sequence eventually periodic for all integer \\( n \\)?'
          )
        }),
        React.createElement(ProblemCard, {
          number: counter++,
          content: React.createElement(
            'div',
            null,
            'Do there exist uncountably many subsets of \\( ',
            "\\mathbb{R}",
            ' \\) such that no two of the subsets have an element in common, each of the subsets is uncountable, and each of the subsets is dense in \\( ',
            "\\mathbb{R}",
            ' \\) ?'
          )
        }),
        React.createElement(ProblemCard, {
          number: counter++,
          content: React.createElement(
            'div',
            null,
            'Define the functions \\( n,d:',
            "\\mathbb{Q}",
            '^+',
            "\\rightarrow\\mathbb{Q}",
            '^+ \\) as',
            React.createElement(
              'p',
              { 'class': 'centered' },
              '\\( ',
              "\\begin{align*}",
              'n(q) = n',
              "\\left(\\frac{a}{b}\\right)",
              ' &= ',
              "\\frac{a+1}{b}",
              ' \\\\ d(q) = d',
              "\\left(\\frac{a}{b}\\right)",
              ' &= ',
              "\\frac{a}{b+1}",
              "\\end{align*}",
              ' \\)'
            ),
            'Where \\( q=a/b \\) is in lowest terms, i.e. \\( (a,b)=1 \\). Is it always possible, given \\( q_1,q_2\\in',
            "\\mathbb{Q}",
            '^+ \\), to get from \\( q_1 \\) to \\( q_2 \\) by applying some sequence of \\( n \\)s and \\( d \\)s? (For example, we can get from \\(8/3\\) to \\(3/2\\) as: \\( d(n(8/3))=d(3)=3/2 \\)).'
          )
        }),
        React.createElement(ProblemCard, {
          number: counter++,
          content: React.createElement(
            'div',
            null,
            'Suppose mathematicians \\( a_1,...,a_n \\) attend a 2-day problem solving festival, where they sit at a round table. On the first day each mathematician gets to know the people sitting near her very well, but doesn\'t get much of a chance to talk to those who are far away. They all want to get to know each other, so on day two they try to sit near people they didn\'t in round 1, and far from people they did sit near. So if \\( d_k(a_i,a_j) \\) is the distance (i.e. the minimum number of seats) between mathematicians \\( a_i \\) and \\( a_j \\) on day \\( k \\), they would like to maximize',
            React.createElement(
              'p',
              { 'class': 'centered' },
              "\\(\\begin{align*} \\sum_{1\\leq i,j\\leq n} \\left\\lvert d_1(a_i,a_j)-d_2(a_i,a_j) \\right\\rvert \\end{align*}\\)"
            ),
            'And so the problems arise:',
            React.createElement(
              'ol',
              { type: 'a' },
              React.createElement(
                'li',
                null,
                'Given \\(n\\), find a seating arrangement that will do this. (Assume the order in round 1 is \\( a_1,...,a_n \\))'
              ),
              React.createElement(
                'li',
                null,
                'How many seating arrangements will do this?'
              )
            )
          )
        }),
        React.createElement(ProblemCard, {
          number: counter++,
          content: React.createElement(
            'div',
            null,
            'Construct the sequence \\( (a_n) \\) as follows:',
            React.createElement('br', null),
            'Let \\( a_0 = 0, a_1 = 1 \\), and for \\( n \\geq 2 \\), let \\( a_n \\) be the number of times \\( ',
            "a_{n-2}",
            ' \\) has appeared so far plus the number of times \\( ',
            "a_{n-1}",
            ' \\) has appeared so far. In other words, if we let',
            React.createElement(
              'p',
              { 'class': 'centered' },
              "\\( \\begin{align*} freq(i,j) &= \\left\\lvert\\{ k\\ |\\ a_k = i \\text{ and } k < j \\}\\right\\rvert \\end{align*} \\)"
            ),
            'Then',
            React.createElement(
              'p',
              { 'class': 'centered' },
              "\\( \\begin{align*} a_n = freq(a_{n-2}, n) + freq(a_{n-1},n). \\end{align*} \\)"
            ),
            'This sequence begins:',
            React.createElement(
              'p',
              { 'class': 'centered' },
              '0, 1, 2, 2, 4, 3, 2, 4, 5, 3, 3, 6, 4, 4, 8, 5, 3, 6, 6, 6, 8, 6, 7, 6, 7, 8, 5, 6, 10, 8, 5, 8, 9, 6, 9, 10, 4, 7, 8, 9, 9, 8, 11, 8, 9, 13, 6, 10, 12, 4, 7, 10, 8, 13, 11, 4, 9, 13, 9, 10, 12, 7, 7, 12, 9, 11, 11, 8, 14, 11, 6, 15, 11, 7, 13, 11, 11, 16, 9, 10, ...'
            ),
            'And is sometimes referred to as "The Devil\'s Sequence" (by me), due to the early presence of three consecutive 6s (and my inability to understand it). The next time a number occurs three times in a row isn\'t until \\( ',
            "a_{355677}",
            ' \\) (!).',
            React.createElement('br', null),
            'Some problems:',
            React.createElement(
              'ol',
              { type: 'a' },
              React.createElement(
                'li',
                null,
                'For any \\( n\\in',
                "\\mathbb{N}",
                ' \\), does \\(n\\) appear at least once in this sequence?'
              ),
              React.createElement(
                'li',
                null,
                'For any \\( n\\in',
                "\\mathbb{N}",
                ' \\), does \\(n\\) appear only finitely many times in this sequence?'
              )
            ),
            'Other intriguing questions include:',
            React.createElement(
              'ol',
              { type: 'a', start: '3' },
              React.createElement(
                'li',
                null,
                'If each \\(n\\) does appear only finitely many times, approximately how many times does it appear? (It seems to be close to \\( 2n \\))!'
              ),
              React.createElement(
                'li',
                null,
                'What are the best possible upper/lower bounds on \\( a_n \\)?'
              ),
              React.createElement(
                'li',
                null,
                "Let \\( r(k) \\) be the smallest \\(n\\) such that \\( \\{0,1,2,...,k\\} \\subseteq \\{a_0,...,a_n\\} \\). What is the asymptotic behavior of \\(r\\)? (It seems to be close to \\( \\frac{1}{2}x^2\\))!"
              )
            ),
            'Really, proving anything about this sequence would be awesome. This problem comes from ',
            React.createElement(
              'a',
              { href: '//www.reddit.com/r/mathriddles/comments/318rzm/properties_of_a_strange_rather_meta_sequence_not' },
              'an old reddit post'
            ),
            '.'
          )
        })
      );
    }
  }]);

  return ProblemContent;
}(React.Component);

var ProblemCard = function (_React$Component2) {
  _inherits(ProblemCard, _React$Component2);

  function ProblemCard(props) {
    _classCallCheck(this, ProblemCard);

    return _possibleConstructorReturn(this, (ProblemCard.__proto__ || Object.getPrototypeOf(ProblemCard)).call(this, props));
  }

  _createClass(ProblemCard, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'card' },
        React.createElement(
          'div',
          { className: 'problemNumber' },
          this.props.number,
          '.'
        ),
        this.props.content
      );
    }
  }]);

  return ProblemCard;
}(React.Component);

var domContainer = document.querySelector('#content');
ReactDOM.render(el(ProblemContent), domContainer);