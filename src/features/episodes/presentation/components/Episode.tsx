import { StyleSheet, Text, View } from "react-native";
import { Episode } from "../../domain/episode.entity";

type Props = {
    episode: Episode
}
export function EpisodeCard({ episode }: Props) {
    return (
        <View style={styles.card}>

            <View>
                <Text style={styles.name}>Nombre del episodio: {episode.name}</Text>
                <Text style={styles.name}>Fecha: {episode.air_date}</Text>
                <Text style={styles.name}>Cap: {episode.episode}</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgba(128, 81, 81, 0.2)',
        minHeight: 160,
        borderRadius: 16,
        marginVertical: 4
    },

    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#443535ff',
        marginVertical: 4,
        marginHorizontal: 8,
    }
});