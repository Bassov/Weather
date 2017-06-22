import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover chart">
        <thead>
        <tr>
          <th className="city">City</th>
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

  renderWeather(cityData) {
    const name = cityData.city.name;
    // const temps = cityData.city.list.map(weather => weather.temp);
    // debugger;
    const [temps, pressures, humidities] = _.unzip(
      cityData.list
      .map(weather => weather.main)
      .map(main => [main.temp -272.15, main.pressure, main.humidity])
    );
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color={'orange'} units={'C'}/></td>
        <td><Chart data={pressures} color={'black'} units={'hPa'}/></td>
        <td><Chart data={humidities} color={'blue'} units={'%'}/></td>
      </tr>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);