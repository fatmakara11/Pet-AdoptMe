// app/(tabs)/index.jsx
import { useUser } from '@clerk/clerk-expo';
import { Text, View, StyleSheet, Image } from 'react-native';
import Colors from '../../constants/Colors';

export default function HomeTab() {
    const { user } = useUser();

    return (
        <View style={styles.container}>
            {/* Header */}

            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>
                    Welcome, {user?.firstName || user?.emailAddresses[0]?.emailAddress}
                </Text>
                <Text style={styles.subtitle}>
                    Find your perfect pet to adopt!
                </Text>
            </View>
            <Image source={{ uri: user?.imageUrl }} style={{ width: 40, height: 40, borderRadius: 99, margin: 20 }} />
            {/* Slider */}

            {/* Category */}
            {/* List of Pets */}
            {/* Add new pet option */}



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    welcomeContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',



    },
    welcomeText: {
        fontSize: 20,
        fontFamily: 'outfit-bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'outfit',
        color: Colors.GRAY,
        textAlign: 'center',
        marginBottom: 30,
    },

});