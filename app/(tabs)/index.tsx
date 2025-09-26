import { StyleSheet } from 'react-native';
// Asegúrate de que esta ruta de importación sea correcta según tu estructura de carpetas
// El ejemplo asume que CharactersView está en 'src/views/CharactersView'

import { CharactersView } from '@/src/features/characteres/infraestructure/view/CharactersView';
import { ThemedView } from '@/src/presentation/components/themed-view'; // Mantenemos ThemedView si está definido en tu proyecto

export default function HomeScreen() {
  // El componente HomeScreen ahora solo renderiza la lista de personajes.
  // La barra de navegación (tabs) se mantiene gracias a Expo Router.
  return (
    // Puedes usar ThemedView o un simple View de React Native aquí.
    <ThemedView style={styles.container}>
      <CharactersView />
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
