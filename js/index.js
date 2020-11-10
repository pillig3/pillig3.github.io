'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var el = React.createElement;

var HomeCard = function (_React$Component) {
  _inherits(HomeCard, _React$Component);

  function HomeCard(props) {
    _classCallCheck(this, HomeCard);

    return _possibleConstructorReturn(this, (HomeCard.__proto__ || Object.getPrototypeOf(HomeCard)).call(this, props));
  }

  _createClass(HomeCard, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'card' },
        'Welcome to my website! Here you\'ll find a collection of things I made and/or thought were neat. For instance, here is a graph of the complex function',
        React.createElement(
          'p',
          { 'class': 'centered' },
          '\\( f(z) = \\left. (1/z)^{(1/z)^{...^{(1/z)}}} \\right\\} 52\\textrm{ times}. \\)'
        ),
        React.createElement(
          'p',
          { 'class': 'centered', id: 'fig1' },
          React.createElement(
            'picture',
            null,
            React.createElement('source', { type: 'image/webp', srcset: '/images/tetinv52.webp' }),
            React.createElement('img', { src: '/images/tetinv52.png', height: '500px', alt: 'graph of tetration' })
          )
        )
      );
    }
  }]);

  return HomeCard;
}(React.Component);

var domContainer = document.querySelector('#content');
ReactDOM.render(el(HomeCard), domContainer);