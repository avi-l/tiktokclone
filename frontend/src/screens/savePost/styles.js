import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  spacer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'white'
  },
  formContainer: {
    margin: 20,
    flexDirection: 'row'
  },
  inputText: {
    paddingVertical: 10,
    marginRight: 20,
    flex: 1,
  },
  mediaPreview: {
    aspectRatio: 9 / 16,
    backgroundColor: 'black',
    width: 60
  },
  buttonsContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  cancelButton: {
    alignItems: 'center',
    flex: 1,
    borderColor: 'lightgray',
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    borderRadius: 4,
    marginRight: 10
  },
  postButton: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ff4040',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    borderRadius: 4,
    marginRight: 10
  },
  cancelButtonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    marginLeft: 5
  },
  postButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    marginLeft: 5
  },
  uploadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default styles;  