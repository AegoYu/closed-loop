import React, { Component } from 'react';
import { Modal, Text, View } from 'react-native';
import Lottie from 'lottie-react-native';

export default class VoiceRecognition extends Component {
  state = {
    modalVisible: false,
    state: 'listening',
    displayText: 'I\'m listening ...'
  };

  listen(callback) {
    this.setState({ modalVisible: true });
    setTimeout(() => {
      this.setState({ displayText: 'Tsinghua' });
    }, 3000);
    setTimeout(() => {
      this.setState({ displayText: 'Tsinghua University' });
    }, 3500);
    setTimeout(() => {
      this.setState({
        state: 'searching',
        displayText: 'We are planning routes'
      });
    }, 4500);
    setTimeout(() => {
      this.setState({
        modalVisible: false,
        state: 'listening',
        displayText: 'I\'m listening ...'
      }, callback);
    }, 8000);
  }

  render() {
    const { displayText, state } = this.state;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
      >
        <View
          style={{
            height: 300,
            width: '100%',
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
            shadowRadius: 8,
            shadowColor: 'rgba(0, 0, 0, .1)',
            shadowOpacity: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {
              state === 'listening' && (
                <Lottie
                  style={{
                    height: 100,
                  }}
                  autoPlay
                  loop
                  source={require('../assets/voice-ani.json')}
                />
              )
            }
            {
              state === 'searching' && (
                <Lottie
                  style={{
                    height: 100
                  }}
                  autoPlay
                  loop
                  source={require('../assets/location-ani.json')}
                />
              )
            }
          </View>
          <Text style={{ color: '#555', fontSize: 18 }}>{displayText}</Text>
        </View>
      </Modal>
    );
  }
}