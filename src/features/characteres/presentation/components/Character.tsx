import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Character } from "../../domain/character.entity";

type Props = {
    character: Character
}
export function CharacterCard({ character }: Props) {
    return (
        <View style={styles.card}>
            <Image
                source={{
                    uri: character.image
                }}
                style={styles.image}
                transition={500}
            />
            <View>
                <Text style={styles.name}>{character.name}</Text>
                <Text style={styles.name}>{character.species}</Text>
                <Text style={styles.name}>{character.gender}</Text>
                {character.origin.name && <Text style={styles.name}>Origin: {character.origin.name}</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgba(8, 8, 8, 0.2)',
        minHeight: 160,
        borderRadius: 16,
        marginVertical: 4
    },
    image: {
        height: "100%",
        width: '35%'
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff'
    }
});