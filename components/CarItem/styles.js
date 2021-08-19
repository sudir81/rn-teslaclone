import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bgImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover'
    },
    carContainer: {
      width: '100%',
      height: '100%'
    },
    titlesView: {
      marginTop: '40%',
      width: '100%',
      alignItems: 'center',
      position: 'absolute'
    },
    title: {
      fontSize: 40,
      fontWeight: '500'
    },
    subTitle: {
      fontSize: 16,
      color: '#5c5e62'
    }
  });

  export default styles;