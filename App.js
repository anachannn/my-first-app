/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';

function App() {
  const [score, setScore] = useState(0);

  const getInc = input => {
    setScore(score + 1);
  };

  const getReset = input => {
    setScore(0);
    Alert.alert('Start again!');
  };

  const title = 'GET MORE! GET MORE!';

  const Separator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Separator />
        <View>
          <Text style={styles.title}>My score</Text>

          <Text style={styles.score}>Your score is: {score}</Text>

          <Button title={title} onPress={getInc} />
          <Button color="red" title="Reset" onPress={getReset} />
        </View>
        <Separator />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  score: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
