import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import CustomLongRoundedButton from '../CustomLongRoundedButton'
import styles from './styles'

const CarItem = ({ car }) => {
    // const {
    //     name, tagline, taglineCTA, image
    // } = car;
    
    return (
        <>
            <View style={styles.carContainer}>
                <ImageBackground source={car.image}
                    style={styles.bgImage} />
                <View style={styles.titlesView}>
                    <Text style={styles.title}>{ car.name }</Text>
                    <Text style={styles.subTitle}>
                        { car.tagline }{' '}
                        <Text style={styles.subTitleCTA}>
                            { car.taglineCTA }
                        </Text>
                    </Text>
                </View>
                <View style={styles.btnContainer}>
                <CustomLongRoundedButton
                    type="primary"
                    btnTitle="Custom Order"
                    onPress={() => {
                            console.warn("custom order pressed")
                        }
                    }
                />
                <CustomLongRoundedButton
                    type="secondary"
                    btnTitle="Existing Inventory"
                    onPress={() => {
                            console.warn("existing inventory pressed")
                        }
                    }
                />
                </View>
            </View>
        </>
    )
}

export default CarItem
