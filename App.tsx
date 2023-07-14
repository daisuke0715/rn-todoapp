import React, {useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function App(): JSX.Element {
  const [displayHelloText, setDisplayHelloText] = useState<boolean>(false);
  const [displayWorldText, setDisplayWorldText] = useState<boolean>(false);

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Text testID="welcome" style={styles.text}>
          {'Welcome to React Native!'}
        </Text>
        <View style={styles.section}>
          <TouchableOpacity
            testID="hello_button"
            style={styles.button}
            onPress={() => setDisplayHelloText(true)}>
            <Text style={styles.text}>{'Show World!!!'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            testID="world_button"
            style={styles.button}
            onPress={() => setDisplayWorldText(true)}>
            <Text style={styles.text}>{'Show World!!!'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          {displayHelloText && <Text style={styles.text}>{'Hello!!!'}</Text>}
          {displayWorldText && <Text style={styles.text}>{'World!!!'}</Text>}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
  },
  button: {
    margin: 10,
    padding: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
