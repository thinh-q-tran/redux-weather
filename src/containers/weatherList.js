import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'

 class WeatherList extends React.Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);


    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color='red' /></td>
        <td><Chart data={pressures} color='blue' /></td>
        <td><Chart data={humidities} color='purple' /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect (mapStateToProps)(WeatherList);
