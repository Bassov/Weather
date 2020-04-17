import React, { Component } from 'react';

export default class GoogleMap extends Component {
  componentDidMount() {
    // eslint-disable-next-line
    new google.maps.Map(this.refs.map, {
      zoom: 6,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    return <div ref= 'map'/>;
  }
}