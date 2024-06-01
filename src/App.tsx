import React from 'react';
import {StatusBar, View} from 'react-native';
import {CalculatorScreen} from './presentation/screens/CalculatorScreen';
import {globalStyles} from './config/theme/app-theme';

function App() {
  return (
    <View style={globalStyles.background}>
      <StatusBar backgroundColor={'black'} />
      <CalculatorScreen />
    </View>
  );
}

export default App;
