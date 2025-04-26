import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/FirabaseConfig'
import PetListItem from './PetListItem'

export default function PetListByCategory() {
    const [petList, setPetList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Cats');

    useEffect(() => {
        getPetList(selectedCategory);
    }, [selectedCategory]);


    //pet list on category selection 

    const getPetList = async (category) => {
        setPetList([]);
        try {
            const q = query(collection(db, 'Pets'), where('category', '==', category));
            const querySnapshot = await getDocs(q);
            const newPetList = [];
            querySnapshot.forEach(doc => {
                newPetList.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setPetList(newPetList);
        } catch (error) {
            console.error("Error fetching pets:", error);
        }
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <View>
            <Category category={handleCategoryChange} />
            <View style={{ marginTop: 10 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {petList.map((item, index) => (
                        <PetListItem key={index} pet={item} />
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}