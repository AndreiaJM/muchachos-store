import React, { useState } from 'react';
import { View, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
// Import Image, Modal, and TouchableOpacity components

import MuchachosLogo from './components/MuchachosLogo';
import Rodape from './components/Rodape';
import Camiseta from './components/Camiseta';
import { StyleSheet } from 'react-native';

const camisetas = [
  { id: 1, nome: 'Camiseta One Piece', imagem: require('./assets/camisetaonepieace.jpg') },
  { id: 2, nome: 'Camiseta InuYasha', imagem: require('./assets/camisetainuyasha.jpg') },
  { id: 3, nome: 'Camiseta One Piece', imagem: require('./assets/camisetapokemon.jpg') }, // Fix image path
  { id: 4, nome: 'Camiseta InuYasha', imagem: require('./assets/camisetasailormoon.jpg') },
];

interface Image {
  source: string;
}

const App = () => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [expandedImage, setExpandedImage] = useState<Image | null>(null);

  const handleImagePress = (image: Image) => {
    setIsImageExpanded(true);
    setExpandedImage(image);
  };

  const handleCloseModal = () => {
    setIsImageExpanded(false);
    setExpandedImage(null);
  };

  return (
    <View style={styles.container}>
      {/* Background image container */}
      <Image
        source={require('./assets/muchachosfundo.png')}
        style={styles.backgroundImage}
        resizeMode="cover" // "contain", "stretch"
      />

      <View style={styles.content}>
        <MuchachosLogo />
        <FlatList
          data={camisetas}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleImagePress(item.imagem)}>
              <Camiseta nome={item.nome} imagem={item.imagem} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={<View style={styles.headerSpacer} />}
        />
        <Rodape />
      </View>

      <Modal visible={isImageExpanded} animationType="fade" onRequestClose={handleCloseModal}>
        <TouchableOpacity style={styles.modalContainer} onPress={handleCloseModal}>
          {expandedImage && (
            <Image source={expandedImage} style={styles.expandedImage} resizeMode="contain" />
          )}
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  content: {
    flex: 1, // Allow content to fill remaining space
    padding: 20, // Add optional padding for visual separation
  },
  headerSpacer: {
    height: 100, // Adjust the height as needed
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
  },
  expandedImage: {
    width: '100%', // Adjust width as needed
    height: '80%', // Adjust height as needed
    aspectRatio: 1, // Maintain aspect ratio for proper scaling
  },
});

export default App;