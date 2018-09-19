import React from 'react';
import axios from 'axios';

export class TempHumi extends React.Component {
  componentDidMount() {
    axios.get('http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3680/hours/72?token=2e30b5793b0c662d9b901520663bd4d0')
      .then(response => {
        console.log(response.data);
        this.temperaturaAgora = response.data.data[];
        console.log(this.state.climatempoData);
      });
  }
  render() {
    return (<div>
      <h2>Temperatura e Umidade</h2>
      <h3>Sensores locais</h3>
      <h4>Temperatura: {this.climatempoData}</h4>
      <h4>Umidade: {humi}</h4>
      <ul>{this.state.climatempoData.map(item => <li key={item.date_br}>{item.date}</li>)}</ul>
      <h4>Temperatura: </h4>
      <h4>Umidade: </h4>
    </div>
  );
  }
}
