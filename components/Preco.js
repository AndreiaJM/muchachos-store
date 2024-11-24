import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Preco = ({ varejo = 55.00, atacado = 45.00 }) => {
  return (
    <View style={styles.precoContainer}>
      <Text style={styles.preco}>Varejo: R$ {varejo}, </Text>
      <Text style={styles.preco}>Atacado: R$ {atacado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  precoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  preco: {
    fontSize: 16,
    fontWeight: 'light',
    color: '#505050'
  },
});

export default Preco;