import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Rodape = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Entre em cotato conosco: 71 99225269</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  logoText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Rodape;