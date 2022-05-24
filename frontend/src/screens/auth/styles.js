import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
        marginTop: 30
    //   backgroundColor: 'black',
    },
    containerMain: {
      flex: 1,
      padding: 30,
    //   backgroundColor: 'black',
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 25,
      marginTop: 100,
      marginBottom: 25,
      color: 'darkslategray',
      textAlign: 'center'
    },
    providerButton: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    providerButtonText: {
        paddingRight: 20
    },
    containerBottomButton: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
  });
export default styles;  