import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Preco from './Preco';

const Camiseta = ({ nome, imagem }) => {
  return (
    <View style={styles.camiseta} >
      <Text style={styles.texto}>Camiseta {nome}</Text>
      <Image source={imagem} style={[styles.imagem, styles.marginTop]} />
      <Preco/>
    </View>
  );
};

const styles = StyleSheet.create({
  camiseta: {
    alignItems: 'center',
    marginBottom: 15,
  },
  imagem: {
    width: 170,
    height: 250,
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  marginTop: {
    marginTop: 10,
  }
});

export default Camiseta;