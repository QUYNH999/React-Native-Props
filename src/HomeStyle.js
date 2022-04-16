import {StyleSheet, Dimensions} from 'react-native'

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      
    },
    header: {
        width: Dimensions.get('window').width,
        height: 64,
        backgroundColor: '#CC99FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtHeader: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black'
    },
    body: {
      width: Dimensions.get('window').width,
      height: 300,
      backgroundColor: '#FFFFCC'
    },
    end: {
      flexDirection: 'row',
      width: Dimensions.get('window').width,
      height: 55,
      backgroundColor: '#CC99FF',
    }

  });

  export default Styles
  