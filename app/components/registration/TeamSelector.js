'use strict';

import React, {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import Team from "./Team";
import Button from "../../components/common/Button";
import Modal from 'react-native-modalbox';

/** DEPRECATED */
const TeamSelector = React.createClass({
  render() {
    return (
      <View style={styles.teamList}>
        {this.props.teams.map(team =>
          <Team
            key={team.get('id')}
            name={team.get('name')}
            onPress={this.props.onSelectTeam.bind(null, team.get('id'))} />
        )}
      </View>
    );
  }
});

const styles = StyleSheet.create({
  teamList: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#ffffff'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  }
});

export default TeamSelector;
