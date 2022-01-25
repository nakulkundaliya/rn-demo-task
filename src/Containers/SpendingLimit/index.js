import React from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {MyImage} from '../../Component/Image';
import style from '../SpendingLimit/style';
import IMAGES from '../../Utils/Images';

const AMOUNT_DATA = [
  {
    price: 'S$ 5,000',
  },
  {
    price: 'S$ 10,000',
  },
  {
    price: 'S$ 20,000',
  },
  {
    price: 'S$ 30,000',
  },
];

const SpendingLimit = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={style.amountContent}>
        <TouchableOpacity>
          <Text style={style.priceText}>{item.price}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View style={style.container}>
        <View style={style.iconView}>
          <TouchableOpacity onPress={() => navigation.navigate('debit')}>
            <MyImage source={IMAGES.BACK_ICON} style={style.backIcon} />
          </TouchableOpacity>

          <MyImage source={IMAGES.LOGO} style={style.logo} />
        </View>

        <Text style={style.spendingLimit}>Spending limit</Text>
      </View>

      <View style={[style.dataContainer]}>
        <View style={style.weeklyContainer}>
          <MyImage source={IMAGES.WEEKLY_DEBIT} style={style.weeklyIcon} />
          <Text style={style.debitSpendingText}>
            Set a weekly debit card spending limit
          </Text>
        </View>

        <View style={style.amountContainer}>
          <TouchableOpacity style={style.iconBtn}>
            <Text style={style.dollartext}>$$</Text>
          </TouchableOpacity>

          <TextInput style={style.amount} keyboardType="number-pad" />
        </View>

        <View style={style.borderStyle} />
        <Text style={style.weeklyCalenderText}>
          Here weekly means the last 7 days - not the calendar week
        </Text>

        <FlatList horizontal data={AMOUNT_DATA} renderItem={renderItem} />

        <TouchableOpacity style={style.saveButtonContainer}>
          <Text style={style.buttonText}>save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SpendingLimit;
