/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text, 
  TextInput,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HideKeyboardExample from './HideKeyBoardExample'

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      hiddenInput: '',
    }
  }

  _onFocus = () => {
    console.log("On Focus")
    HideKeyboardExample.hideSoftKeyBoard();
  }

  _onChangeText = (text) => {
    this.setState({ hiddenInput: text });
    HideKeyboardExample.hideSoftKeyBoard();
  }

  render(){
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <Text>Hello</Text>
              <TextInput
                autoFocus={true}
                  multiline
                  value={this.state.hiddenInput}
                  onChangeText={this._onChangeText}
                  onFocus={this._onFocus}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
    
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
