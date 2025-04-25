import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/FirabaseConfig';

export default function Slider() {
    useEffect(() => {
        GetSliders();

    }, [])


    const GetSliders = async () => {
        const snapshot = await getDocs(collection(db, 'Slider'))
        snapshot.forEach((doc) => {
            console.log(doc.data());
        })
    }
    return (
        <View>
            <Text>Slider</Text>
        </View>
    )
}