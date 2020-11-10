'use strict';

const el = React.createElement;

class NavigationSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ul className='sidebarlist'>
      <SidebarListItem reference='/' imageName='home' text='Home' />
      <SidebarListItem reference='/problems.html' imageName='compass' text='Problems' />
      <SidebarListItem reference='/chomp.html' imageName='choco' text='Chomp' />
      <SidebarListItem reference='/befunge.html' imageName='mushroom' text='Befunge' />
      <SidebarListItem reference='/misc.html' imageName='heart' text='Miscellanea' />
    </ul>;
  }
}

class SidebarListItem extends React.Component {
  constructor(props) {
   super(props);
  }

  render() {
    return <li>
      <a className='sidebarlink' href={this.props.reference}>
        <p className='linkp'>
          <picture>
            <source type='image/webp' srcSet={'/images/' + this.props.imageName + '.webp'} />
            <img src={'/images/' + this.props.imageName + '.png'} height='16px' width='16px' alt='' />
          </picture>
          {this.props.text}
        </p>
      </a>
    </li>;
  }
}

const domContainer = document.querySelector('#navigation_sidebar');
ReactDOM.render(el(NavigationSidebar), domContainer);
