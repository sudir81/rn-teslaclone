import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import CustomLongRoundedButton from '../CustomLongRoundedButton'
import styles from './styles'

const CarItem = ({ name, tagline, taglineCTA, image }) => {
    return (
        <>
            <View style={styles.carContainer}>
                <ImageBackground source={image}
                    style={styles.bgImage} />
                <View style={styles.titlesView}>
                    <Text style={styles.title}>{ name }</Text>
                    <Text style={styles.subTitle}>
                        { tagline }{' '}
                        <Text style={styles.subTitleCTA}>
                            {taglineCTA}
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
