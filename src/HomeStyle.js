import { StyleSheet, Dimensions } from 'react-native'

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
    borderBottomWidth: 3,
    borderBottomColor: 'black'
  },
  txtHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  body: {
    width: Dimensions.get('window').width,
    backgroundColor: '#FFFFCC',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  tabbar: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 44,
    backgroundColor: 'white',
    borderTopColor: 'black',
    borderTopWidth: 3
  },
  tabbarHome: {
    flex: 2,
    backgroundColor: '#888888',
    borderRightColor: 'black',
    borderRightWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  txtTabbarHome: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  tabbarCity: {
    flex: 2,
    backgroundColor: '#888888',
    borderLeftWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtTabbarCity: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  province: {
    height: 200,
    width: 130,
    marginHorizontal: 16,
    marginVertical: 16,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 130,
    borderRadius: 10,
    
  },
  txtProvinceName: {
    fontSize: 13,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
  


});

export default Styles
