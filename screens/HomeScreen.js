import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import VoiceRecognition from '../components/VoiceRecognition';
import { NavigationActions } from 'react-navigation';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 0.8,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <VoiceRecognition ref="voiceRecognition" />
        <View style={{ width: '100%', paddingHorizontal: 30 }}>
          <Text style={{ color: '#55D3BE', fontSize: 52, fontWeight: 'bold' }}>Where</Text>
          <Text style={{ color: '#55D3BE', fontSize: 28 }}>do you want to go?</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
            <TextInput
              style={{
                paddingHorizontal: 15,
                paddingVertical: 10,
                backgroundColor: '#F2F2F2',
                borderRadius: 15,
                fontSize: 18,
                flex: 1,
                marginRight: -20
              }}
              placeholder="Type Location Here"
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: 'white',
                shadowRadius: 8,
                shadowColor: 'rgba(0, 0, 0, .1)',
                shadowOpacity: 1,
                padding: 20,
                borderRadius: 999,
                marginLeft: 'auto'
              }}
              onPress={() => {
                this.refs.voiceRecognition.listen(() => {
                  this.props.navigation.dispatch(NavigationActions.navigate({
                    routeName: 'Map'
                  }))
                })
              }}
            >
              <Image
                source={require('../assets/voice-btn.png')}
                style={{
                  width: 40,
                  height: 40
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}