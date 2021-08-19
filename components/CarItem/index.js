import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'

const CarItem = () => {
    return (
        <>
            <View style={styles.carContainer}>
                <ImageBackground source={require('../../assets/images/ModelX.jpeg')}
                style={styles.bgImage} />
                <View style={styles.titlesView}>
                    <Text style={styles.title}>Model S</Text>
                    <Text style={styles.subTitle}>Starting at $69,000</Text>
                </View>
            </View>
        </>
    )
}

export default CarItem
