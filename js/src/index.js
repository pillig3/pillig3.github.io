'use strict';

const el = React.createElement;

class HomeCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='card'>
      Welcome to my website! Here you'll find a collection of things I made and/or thought were neat. For instance, here is a graph of the complex function
      <p class='centered'>
        {'\\( f(z) = \\left. (1/z)^{(1/z)^{...^{(1/z)}}} \\right\\} 52\\textrm{ times}. \\)'}
      </p>
      <p class='centered' id='fig1'>
        <picture>
          <source type="image/webp" srcset="/images/tetinv52.webp" />
          <img src="/images/tetinv52.png" height='500px' alt="graph of tetration" />
        </picture>
      </p>
    </div>;
  }
}

const domContainer = document.querySelector('#content');
ReactDOM.render(el(HomeCard), domContainer);
