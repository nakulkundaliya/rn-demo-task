import {StyleSheet} from 'react-native';
import {black, darkblue, light_green, white} from '../../Utils/Colors';
import {SCREEN_HEIGHT} from '../../Utils/helper';

const style = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT - 400,
    paddingHorizontal: 20,
    backgroundColor: darkblue,
    position: 'absolute',
    width: '100%',
  },
  topContainer: {
    flexDirection: 'row',
    width: '70%',
  },
  mainContainer: {
    marginTop: -100,
  },
  contentContainer: {
    marginTop: 250,
    position: 'relative',
    zIndex: 999,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 25,
  },
  cardContainer: {
    paddingHorizontal: 20,
    width: '90%',
    height: 200,
    backgroundColor: light_green,
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 10,
  },
  hideCardNumber: {
    width: '40%',
    textAlign: 'center',
    color: light_green,
    marginLeft: 10,
    marginTop: 2,
    fontSize: 12,
    paddingHorizontal: 2,
    bottom: 5,
    border: 25,
    fontWeight: '600',
    fontFamily: 'AvenirNextLTPro-SemiBold',
  },
  cardNoText: {
    fontSize: 14,
    letterSpacing: 3,
    color: white,
    marginTop: 15,
    fontFamily: 'AvenirNextLTPro-SemiBold',
  },
  cvvView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  cvvText: {
    fontSize: 13,
    color: white,
    marginTop: 15,
    fontFamily: 'AvenirNextLTPro-SemiBold',
  },
  cardNo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '80%',
  },
  hideShowImage: {
    height: 20,
    width: 20,
    bottom: 5,
    marginLeft: 10,
  },
  cardNoContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    backgroundColor: white,
    marginHorizontal: 19,
    marginLeft: 10,
    paddingVertical: 8,
    bottom: -10,
    borderRadius: 5,
    borderBottomRightRadius: 3,
  },
  dataSubTitle: {
    color: '#222222',
    opacity: 0.4,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 13,
  },
  itemContainer: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  imageStyle: {
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 15,
    color: black,
    padding: -5,
    marginBottom: 2,
  },
  balanceText: {
    color: white,
    fontSize: 24,
    marginLeft: 10,
    marginTop: -2,
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  markText: {
    fontSize: 18,
    color: white,
    fontWeight: 'bold',
  },
  logo: {
    width: 25,
    height: 25,
    marginTop: 15,
    alignSelf: 'flex-end',
  },
  companyIcon: {
    width: 70,
    marginVertical: 25,
    alignSelf: 'flex-end',
  },
  groupIcon: {
    width: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  iconBtn: {
    width: 45,
    height: 25,
    backgroundColor: light_green,
    borderRadius: 5,
    justifyContent: 'center',
  },
  dollartext: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: white,
  },
  headerText: {
    fontSize: 24,
    color: white,
    marginTop: -10,
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  balanceView: {
    flexDirection: 'row',
    marginTop: 15,
  },
  avaiableBalanceText: {
    fontSize: 14,
    textAlign: 'left',
    color: white,
    marginRight: 200,
    marginTop: 15,
  },
  debitConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default style;
