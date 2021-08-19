import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const CustomLongRoundedButton = ({ type, btnTitle, onPress }) => {
    const bgColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const btnTxtColor = type === 'primary' ? '#FFFFFF' : '#171A20'

    return (
        <View style={styles.container}>
            <Pressable style={[{backgroundColor: bgColor}, styles.button]}
                onPress={ onPress }>
            <Text style={[styles.text, { color: btnTxtColor }]}>{ btnTitle }</Text>
            </Pressable>
        </View>
    )
}

export default CustomLongRoundedButton
