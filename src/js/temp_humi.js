import React from 'react';
import axios from 'axios';

export class TempHumi extends React.Component {
  state = {
    temperatura_CT: null,
    umidade_CT: null,
    temperatura_SEL: null,
    umidade_SEL: null,
  }
  componentDidMount() {
    axios.get('http://apiadvisor.climatempo.com.br/api/v1/weather/locale/3680/current?token=2e30b5793b0c662d9b901520663bd4d0')
      .then(response_ct => {
        console.log(response_ct.data);
        this.setState(
          {
            temperatura_CT: response_ct.data.data.temperature,
            umidade_CT: response_ct.data.data.humidity,
          }
        );
      });
    axios.get('http://www.sel.eesc.usp.br/liosensors/json_data.php')
      .then(response_sel => {
        console.log(response_sel.data);
        this.setState(
          {
            temperatura_SEL: response_sel.data.lastTemp,
            umidade_SEL: response_sel.data.lastHum,
          }
        );
      });
  }
  render() {
    return (<div>
      <h2>Temperatura e Umidade</h2>
      <h3>Sensores locais</h3>
      <h4>Temperatura: {this.state.temperatura_SEL} °C</h4>
      <h4>Umidade: {this.state.umidade_SEL}%</h4>
      <h2>Climatempo</h2>
      <h4>Temperatura: {this.state.temperatura_CT} °C</h4>
      <h4>Umidade: {this.state.umidade_CT}%</h4>
    </div>
  );
  }
}
