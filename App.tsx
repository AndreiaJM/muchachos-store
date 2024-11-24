import React, { useState } from 'react';
import { Image, View, FlatList, Modal, TouchableOpacity, StyleSheet } from 'react-native'; // Import Image first

import MuchachosLogo from './components/MuchachosLogo';
import Rodape from './components/Rodape';
import Camiseta from './components/Camiseta';
import { camisetas } from './database/camiseta'

const App = () => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [expandedImage, setExpandedImage] = useState<Image | any>(null);

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
        resizeMode="cover" // Experiment with "contain" or "stretch"
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
    flex: 1,
    padding: 10, 
  },
  headerSpacer: {
    height: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  },
  expandedImage: {
    width: '100%', 
    height: '80%', 
    aspectRatio: 1,
  },
});

export default App;