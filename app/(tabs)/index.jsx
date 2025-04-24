// app/(tabs)/index.jsx
import { useUser } from '@clerk/clerk-expo';
import { Text, View, StyleSheet, Image } from 'react-native';
import Colors from '../../constants/Colors';

export default function HomeTab() {
    const { user } = useUser();

    return (
        <View style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>
                    Welcome, {user?.firstName || user?.emailAddresses[0]?.emailAddress}
                </Text>
                <Text style={styles.subtitle}>
                    Find your perfect pet to adopt!
                </Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    welcomeContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 24,
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
    image: {
        width: '100%',
        height: 300,
        marginBottom: 30,
    }
});