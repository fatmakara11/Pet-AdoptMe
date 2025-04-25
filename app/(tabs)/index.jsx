// app/(tabs)/index.jsx
import { useUser } from '@clerk/clerk-expo';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import Slider from '../components/Slider';

export default function HomeTab() {
    const { user } = useUser();

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcomeText}>
                            Welcome, {user?.firstName || user?.emailAddresses[0]?.emailAddress}
                        </Text>
                        <Text style={styles.subtitle}>
                            Find your perfect pet to adopt!
                        </Text>
                    </View>
                    <Image
                        source={{ uri: user?.imageUrl }}
                        style={styles.profileImage}
                    />
                </View>

                {/* Slider */}
                <Slider />

                {/* Category */}
                {/* List of Pets */}
                {/* Add new pet option */}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    welcomeContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    welcomeText: {
        fontSize: 20,
        fontFamily: 'outfit-bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'outfit',
        color: Colors.GRAY,
        marginBottom: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 99,
    },
});