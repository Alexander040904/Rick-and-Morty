
import { StyleSheet } from 'react-native';


import { ThemedView } from '@/src/presentation/components/themed-view';

import { EpisodesView } from '@/src/features/episodes/presentation/screens/EpisodesView';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <EpisodesView />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    // Es crucial que el contenedor principal tenga flex: 1 para ocupar todo el espacio
    flex: 1,
    // Puedes ajustar el color de fondo si lo deseas, pero CharactersView ya tiene estilos internos
    backgroundColor: '#ffffffff',
  },
});

