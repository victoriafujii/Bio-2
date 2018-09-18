import React from 'react';
import axios from 'axios';

const temp = '32';
const humi = '56%';

export class TempHumi extends React.Component {
  componentDidMount() {
    axios.get('http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3680/hours/72?token=2e30b5793b0c662d9b901520663bd4d0')
      .then(response => {
        this.climatempoData = response;
        console.log(response);
        console.log(this.climatempoData.data.data[0].date);
      });
  }
  render() {
    return (<div>
      <h2>Temperatura e Umidade</h2>
      <h3>Sensores locais</h3>
      <h4>Temperatura: {this.climatempoData}</h4>
      <h4>Umidade: {humi}</h4>
      <h3>Climatempo</h3>
      <h4>Temperatura: </h4>
      <h4>Umidade: </h4>
    </div>
  );
  }
}
