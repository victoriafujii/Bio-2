import React from 'react';
import ReactDOM from 'react-dom';

const temp = '32';
const humi = '56%';

loadJSON('http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3680/hours/72?token=2e30b5793b0c662d9b901520663bd4d0', climatempoData)

function climatempoData(climatempo_data) {
  console.log(climatempo_data);
}

class TempHumi extends React.Component {
  render() {
    return (<div>
      <h2>Temperatura e Umidade</h2>
      <h3>Sensores locais</h3>
      <h4>Temperatura: {climatempo_data.data.date}</h4>
      <h4>Umidade: {humi}</h4>
      <h3>Climatempo</h3>
      <h4>Temperatura: </h4>
      <h4>Umidade: </h4>
    </div>
  );
  }
}

ReactDOM.render(<TempHumi />, document.getElementById('temp-humi'));

export default TempHumi;
