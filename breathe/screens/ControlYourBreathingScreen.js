import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler
} from 'react-native';

import { Icon } from 'expo';
import Colors from '../constants/Colors';
import BreatheButton from '../components/BreatheButton';


export default class ControlYourBreathingScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    console.log('back')
    this.props.navigation.goBack();
    return true;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Get Started!
        </Text>
        <Text style={styles.desc}>
          Place your thumb on the yellow button to get started.
        </Text>
        <BreatheButton style={styles.button}/>
      </View>
      )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 30
  },
  header: {
    fontSize: 32,
    color: '#fff'
  },
  desc: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  },
  button: {
    position: 'absolute',
    bottom: 25,
    width: '100%',
    alignItems: 'center',
    
  }
}