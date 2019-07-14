import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

export default class MapScreen extends React.Component {
  state = {
    isReady: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isReady: true });
    }, 500);
  }

  render() {
    const { isReady } = this.state;

    return (
      <View
        style={{
          flex: 1,
          overflow: 'hidden'
        }}
      >
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Appbar.Content
            title="Planned Route"
            subtitle="By SUPERLINK"
          />
          <Appbar.Action icon="more" onPress={() => console.log('Pressed delete')} />
        </Appbar.Header>
        <Image
          source={require('../assets/map.png')}
          style={{
            marginLeft: -170,
            height: 663,
            width: 700
          }}
        />
        <Appbar.Header style={styles.bottom}>
          <Appbar.Action icon="check" onPress={() => console.log('Pressed archive')} />
          <Appbar.Action icon="close" onPress={() => console.log('Pressed mail')} />
        </Appbar.Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end'
  },
});