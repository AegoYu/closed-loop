import React from 'react';
import { View, Image } from 'react-native';
import { Appbar } from 'react-native-paper';

export default class ArrivalScreen extends React.Component {
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
      </View>
    );
  }
}