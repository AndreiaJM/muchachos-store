import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MuchachosLogo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>MuchachosStore</Text>
      <Text style={styles.logoText}>Catálogo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default MuchachosLogo;