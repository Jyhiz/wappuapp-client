"use strict";

import React, {
    Component,
    StyleSheet,
    View,
    MapView
} from "react-native";
import { connect } from "react-redux";

class EventMapView extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <MapView style={styles.map} />
        );
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

const select = store => {
    return {
    }
};

export default connect(select)(EventMapView);
