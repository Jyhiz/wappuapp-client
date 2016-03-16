'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

import analytics from '../../services/analytics';
import EventDetail from '../calendar/EventDetail';
import theme from '../../style/theme';

const VIEW_NAME = 'EventMap';


class EventMap extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    analytics.viewOpened(VIEW_NAME);
  }

  onCalloutPress(event) {
    this.props.navigator.push({
      component: EventDetail,
      name: event.name,
      model: event
    });
  }

  render() {
    const allEvents = [].concat(this.props.events);
    const events = allEvents.filter(event => {
      return event.location && !!event.location.latitude && !!event.location.longitude;
    });

    const markers = events.map((event, i) =>
      <MapView.Marker image={require('../../../assets/marker.png')} key={i} coordinate={event.location}>
        <MapView.Callout style={styles.callout} onPress={this.onCalloutPress.bind(this, event)}>
          <TouchableHighlight
            underlayColor='transparent'
            style={styles.calloutTouchable}
          >
            <View>
              <Text style={styles.calloutTitle}>{event.name}</Text>
              <Text style={styles.calloutInfo}>{event.locationName}</Text>
            </View>
          </TouchableHighlight>
        </MapView.Callout>
      </MapView.Marker>
    );

    return (
        <MapView style={styles.map}
          initialRegion={{
            latitude: 61.4931758,
            longitude: 23.7602363,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
          showsPointsOfInterest={false}
          showsBuildings={false}
          showsIndoors={false}
          rotateEnabled={false}
        >
          {markers}
        </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  callout: {
    padding: 0
  },
  calloutTouchable: {
    padding: 10
  },
  calloutTitle:{
    fontWeight:'bold',
    color:theme.primary,
    fontSize:13,
  },
  calloutInfo:{
    fontSize:11,
  }
});

const select = store => {
  return {
    events: store.event.get('list').toJS()
  };
};

export default connect(select)(EventMap);
