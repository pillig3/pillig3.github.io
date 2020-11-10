'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var el = React.createElement;

var NavigationSidebar = function (_React$Component) {
  _inherits(NavigationSidebar, _React$Component);

  function NavigationSidebar(props) {
    _classCallCheck(this, NavigationSidebar);

    return _possibleConstructorReturn(this, (NavigationSidebar.__proto__ || Object.getPrototypeOf(NavigationSidebar)).call(this, props));
  }

  _createClass(NavigationSidebar, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'ul',
        { className: 'sidebarlist' },
        React.createElement(SidebarListItem, { reference: '/', imageName: 'home', text: 'Home' }),
        React.createElement(SidebarListItem, { reference: '/problems.html', imageName: 'compass', text: 'Problems' }),
        React.createElement(SidebarListItem, { reference: '/chomp.html', imageName: 'choco', text: 'Chomp' }),
        React.createElement(SidebarListItem, { reference: '/befunge.html', imageName: 'mushroom', text: 'Befunge' }),
        React.createElement(SidebarListItem, { reference: '/misc.html', imageName: 'heart', text: 'Miscellanea' })
      );
    }
  }]);

  return NavigationSidebar;
}(React.Component);

var SidebarListItem = function (_React$Component2) {
  _inherits(SidebarListItem, _React$Component2);

  function SidebarListItem(props) {
    _classCallCheck(this, SidebarListItem);

    return _possibleConstructorReturn(this, (SidebarListItem.__proto__ || Object.getPrototypeOf(SidebarListItem)).call(this, props));
  }

  _createClass(SidebarListItem, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { className: 'sidebarlink', href: this.props.reference },
          React.createElement(
            'p',
            { className: 'linkp' },
            React.createElement(
              'picture',
              null,
              React.createElement('source', { type: 'image/webp', srcSet: '/images/' + this.props.imageName + '.webp' }),
              React.createElement('img', { src: '/images/' + this.props.imageName + '.png', height: '16px', width: '16px', alt: '' })
            ),
            this.props.text
          )
        )
      );
    }
  }]);

  return SidebarListItem;
}(React.Component);

var domContainer = document.querySelector('#navigation_sidebar');
ReactDOM.render(el(NavigationSidebar), domContainer);