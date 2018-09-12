import React from 'react';
import ReactDOM from 'react-dom';
import logoimg from '../../images/logolio.jpg'

class Header extends React.Component {
  render() {
    return (<div>
      <a href="http://www.sel.eesc.usp.br/lio/" target="_blank">
        <img src={logoimg} width="7.5%" height="7.5%"/>
      </a>
    </div>
  );
  }
}

ReactDOM.render(<Header />, document.getElementById('header'));

export default Header;
