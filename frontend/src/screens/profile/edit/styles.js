import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20

  },
  imageViewContainer: {
    backgroundColor: 'gray',
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'

  },
  image: {
    position: 'absolute',
    height: 100,
    width: 100,

  },
  imageOverlay: {
    backgroundColor: 'rgba(0,0,0, .5)',
    ...StyleSheet.absoluteFill
  },
  feildsContainer: {
    marginTop: 20,
    padding: 20,
    flex: 1,
  },
  feildItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  feildValueContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }

});
export default styles;  