import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/CarItem';

const carData = [
  {
    name: "Model S",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: './assets/images/ModelS.jpeg'
  },
  {
    name: "Model Y",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: './assets/images/ModelY.jpeg'
  },
  {
    name: "Model 3",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: './assets/images/Model3.jpeg'
  },
  {
    name: "Model X",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: './assets/images/ModelX.jpeg'
  },
  {
    name: "Solar Panels",
    tagline: "Lowest Cost Solar Panels in America",
    taglineCTA: "",
    image: './assets/images/SolarPanels.jpeg'
  },
  {
    name: "Solar Roof",
    tagline: "Produce Clean Energy From Your Roof",
    taglineCTA: "",
    image: './assets/images/SolarRoof.jpeg'
  }
]

export default function App() {
  return (
    <View style={styles.container}>
        <CarItem
          name="Model S"
          tagline="Order Online for"
          taglineCTA="Touchless Delivery"
          image={require('./assets/images/ModelS.jpeg')}
          />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
