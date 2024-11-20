import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Camiseta = ({ nome, imagem }) => {
  return (
    <View style={styles.camiseta}>
      <Image source={imagem} style={[styles.imagem, styles.marginTop]} />
      <Text style={styles.texto}>{nome}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  camiseta: {
    alignItems: 'center',
    marginBottom: 15,
  },
  imagem: {
    width: 200,
    height: 200,
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Camiseta;