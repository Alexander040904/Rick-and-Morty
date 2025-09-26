import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from "react-native";

import { Episode } from "../../domain/episode.entity";
import { EpisodeCard } from "../components/Episode";

import { fetchEpisode } from "../../datasource/fetchEpisodes";

// Define un tipo para almacenar los metadatos de la API
type PageInfo = {
  count: number;
  next: string | null;
  prev: string | null;
  pages: number;
}

export function EpisodesView() {

  // Estados
  const [page, setPage] = useState(1);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [info, setInfo] = useState<PageInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para el loading

  // Función principal de carga
  const loadCharacters = async (pageToLoad: number) => {
    if (isLoading) return; // Evita llamadas duplicadas
    setIsLoading(true);

    try {
      const response = await fetchEpisode(pageToLoad);

      // 1. Almacenar los metadatos de paginación
      setInfo(response.info as unknown as PageInfo);

      // 2. Acumular los resultados (Infinite Scroll)
      setEpisodes(prevEpisodes => {
        // Filtra duplicados por si acaso, aunque la paginación debería prevenirlo
        const newEpisodes = response.results.filter(
          (newEpisode) => !prevEpisodes.some((existingEpisode) => existingEpisode.id === newEpisode.id)
        );
        return [...prevEpisodes, ...newEpisodes];
      });

    } catch (error) {
      console.error("Error al cargar episodios:", error);
      Alert.alert("Error", "No se pudieron cargar los episodios.");
    } finally {
      setIsLoading(false);
    }
  };


  // Efecto para cargar la página inicial o cuando 'page' cambia
  useEffect(() => {
    loadCharacters(page);
  }, [page]); // Depende de page


  // Función para cargar la siguiente página
  const loadNextPage = () => {
    // Verifica si hay una página siguiente (next) y si no estamos ya cargando
    if (info && info.next && !isLoading) {
      // La API de Rick and Morty tiene la URL completa con el número de página.
      // Para simplicidad, podemos usar un contador de página simple si sabemos que el 'next'
      // es solo la siguiente página consecutiva, o parsear la URL.
      // Aquí, simplemente incrementamos el estado 'page', lo que dispara el useEffect.
      setPage(prevPage => prevPage + 1);
    }
  };

  // Componente que se muestra al pie de la lista mientras carga
  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text style={styles.loadingText}>Cargando más episodios...</Text>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      {/*Informacion | conteo */}
      <View>
        {/* Mostrar el conteo total dinámico si está disponible */}
        <Text style={styles.total}>{info ? info.count : '...'}</Text>
        <Text style={styles.personajestitulo}>Episodios</Text>
      </View>

      <FlatList
        data={episodes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <EpisodeCard episode={item as any} />}
        // Propiedades para Infinite Scroll
        onEndReached={loadNextPage}
        onEndReachedThreshold={0.5} // Empieza a cargar cuando el usuario está a la mitad de la vista (0.5 = 50%)
        ListFooterComponent={renderFooter}
      />
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#ffffffff' // Fondo oscuro para contraste con las tarjetas
  },
  total: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#0e0d0dff' // Texto blanco
  },
  personajestitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#aaaaaa' // Texto gris claro
  },
  loadingContainer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#CED0CE",
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    color: '#ffffff',
    marginTop: 8
  }
})
