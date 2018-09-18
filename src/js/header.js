import React from 'react';
import logoimg from '../../images/logolio.jpg'

export class Header extends React.Component {
  render() {
    return (<div>
      <a href="http://www.sel.eesc.usp.br/lio/" target="_blank">
        <img src={logoimg} width="7.5%" height="7.5%"/>
      </a>
    </div>
  );
  }
}
