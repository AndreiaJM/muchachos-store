import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Rodape = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Rodape</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Rodape;