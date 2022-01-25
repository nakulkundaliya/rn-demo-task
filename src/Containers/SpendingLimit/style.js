import {StyleSheet} from 'react-native';
import {
  black,
  darkblue,
  gray_3,
  grey_1,
  light_green,
  white,
} from '../../Utils/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Utils/helper';

const style = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT - 400,
    paddingHorizontal: 20,
    backgroundColor: darkblue,
    position: 'relative',
    width: '100%',
  },
  logo: {
    width: 25,
    height: 25,
    marginTop: 15,
    alignSelf: 'flex-end',
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
  spendingLimit: {
    color: white,
    fontSize: 30,
    marginTop: 50,
    textAlign: 'left',
    marginLeft: 10,
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  weeklyContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  weeklyIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  debitSpendingText: {
    color: black,
    fontSize: 15,
  },
  amountContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  amount: {
    fontSize: 30,
    color: black,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: -20,
  },
  borderStyle: {
    borderBottomColor: grey_1,
    borderBottomWidth: 1,
  },
  weeklyCalenderText: {
    color: gray_3,
    marginTop: 15,
  },
  amountContent: {
    backgroundColor: 'rgba(32, 209, 103, 0.06)',
    height: 45,
    paddingHorizontal: 15,
    marginRight: 10,
    justifyContent: 'center',
    marginTop: 30,
  },
  priceText: {
    textAlign: 'center',
    color: light_green,
    fontWeight: 'bold',
  },
  dataContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    bottom: 0,
    height: SCREEN_HEIGHT,
    marginTop: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  saveButtonContainer: {
    backgroundColor: light_green,
    position: 'absolute',
    bottom: 250,
    left: 0,
    height: 60,
    width: SCREEN_WIDTH - 90,
    marginHorizontal: 45,
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: {
    color: white,
    fontSize: 20,
    textAlign: 'center',
  },
  backIcon: {
    width: 23,
    height: 23,
    marginTop: 15,
    alignSelf: 'flex-start',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default style;
