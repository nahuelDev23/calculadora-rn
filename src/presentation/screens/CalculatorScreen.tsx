import React from 'react';
import {Text, View} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {CalulatorBtn} from '../components';
import {useCalculator} from '../hooks';

export const CalculatorScreen = () => {
  const {
    number,
    buildNumber,
    toggleSign,
    deleteOperation,
    clean,
    dividerOperation,
    addOperation,
    substractOperation,
    multiplyOperation,
    calculateResult,
    prevNumber,
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.mainResult}>
          {number}
        </Text>
        <Text style={globalStyles.subResult}>{prevNumber}</Text>
      </View>
      <View style={globalStyles.row}>
        <CalulatorBtn
          onPress={clean}
          blackText
          label="C"
          color={colors.lightGray}
        />
        <CalulatorBtn
          onPress={() => toggleSign()}
          blackText
          label="+/-"
          color={colors.lightGray}
        />
        <CalulatorBtn
          onPress={deleteOperation}
          blackText
          label="del"
          color={colors.lightGray}
        />
        <CalulatorBtn
          onPress={dividerOperation}
          label="/"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalulatorBtn
          onPress={() => buildNumber('7')}
          label="7"
          color={colors.darkGray}
        />
        <CalulatorBtn
          onPress={() => buildNumber('8')}
          label="8"
          color={colors.darkGray}
        />
        <CalulatorBtn
          onPress={() => buildNumber(' 9')}
          label="9"
          color={colors.darkGray}
        />
        <CalulatorBtn
          onPress={multiplyOperation}
          label="X"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalulatorBtn
          onPress={() => buildNumber('4')}
          label="4"
          color={colors.darkGray}
        />
        <CalulatorBtn
          onPress={() => buildNumber('5')}
          label="5"
          color={colors.darkGray}
        />
        <CalulatorBtn
          onPress={() => buildNumber('6')}
          label="6"
          color={colors.darkGray}
        />
        <CalulatorBtn
          onPress={substractOperation}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalulatorBtn
          onPress={() => buildNumber('1')}
          label="1"
          color={colors.darkGray}
        />
        <CalulatorBtn
          onPress={() => buildNumber('2')}
          label="2"
          color={colors.darkGray}
        />
        <CalulatorBtn
          onPress={() => buildNumber('3')}
          label="3"
          color={colors.darkGray}
        />
        <CalulatorBtn onPress={addOperation} label="+" color={colors.orange} />
      </View>

      <View style={globalStyles.row}>
        <CalulatorBtn
          onPress={() => buildNumber('0')}
          label="0"
          color={colors.darkGray}
          DoubleCol
        />
        <CalulatorBtn
          onPress={() => buildNumber('.')}
          label="."
          color={colors.darkGray}
        />
        <CalulatorBtn
          onPress={calculateResult}
          label="="
          color={colors.darkGray}
        />
      </View>
    </View>
  );
};
