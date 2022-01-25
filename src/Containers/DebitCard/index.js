import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Switch,
} from 'react-native';
import {MyImage} from '../../Component/Image';
import {green, grey_1, light_green} from '../../Utils/Colors';
import IMAGES from '../../Utils/Images';
import style from '../../Containers/DebitCard/style';

const DATA = [
  {
    image: IMAGES.DOWNLOAD_LOGO,
    title: 'Top-up account',
    subTitle: 'Deposit money to your account to use with card',
  },
  {
    image: IMAGES.TRANSFER_LOGO,
    title: 'Weekly spending limit',
    subTitle: 'You haven’t set any spending limit on card',
  },
  {
    image: IMAGES.FREEZE_LOGO,
    title: 'Freeze card',
    subTitle: 'Your debit card is currently active',
  },
  {
    image: IMAGES.FREEZE_LOGO,
    title: 'Get a new card',
    subTitle: 'This deactivates your current debit card',
  },
  {
    image: IMAGES.DOWNLOAD_LOGO,
    title: 'Deactivated cards',
    subTitle: 'Your previously deactivated cards',
  },
  {
    image: IMAGES.DOWNLOAD_LOGO,
    title: 'Get a new card',
    subTitle: 'This deactivates your current debit card',
  },
  {
    image: IMAGES.DEACTIVE_LOGO,
    title: 'Deactivated cards',
    subTitle: 'Your previously deactivated cards',
  },
];

const DebitCard = ({navigation}) => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const toggleSwitch1 = () => {
    if (!switch1) {
      navigation.navigate('spendinglimit');
    }

    setSwitch1(previousState => !previousState);
  };
  const toggleSwitch2 = () => setSwitch2(previousState => !previousState);

  const renderItem = ({item, index}) => {
    return (
      <View style={style.itemContainer}>
        <View style={style.debitConatiner}>
          <View style={style.topContainer}>
            <MyImage source={item.image} style={style.imageStyle} />
            <View style={{marginLeft: 10}}>
              <Text style={style.title}>{item.title}</Text>
              <Text numberOfLines={1} style={style.dataSubTitle}>
                {item.subTitle}
              </Text>
            </View>
          </View>
          <View>
            {index === 1 && (
              <Switch
                trackColor={{false: grey_1, true: green}}
                thumbColor={switch1 ? light_green : grey_1}
                ios_backgroundColor={light_green}
                onValueChange={toggleSwitch1}
                value={switch1}
              />
            )}
            {index === 2 && (
              <Switch
                trackColor={{false: grey_1, true: green}}
                thumbColor={switch2 ? light_green : grey_1}
                ios_backgroundColor={green}
                onValueChange={toggleSwitch2}
                value={switch2}
              />
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={style.container}>
        <MyImage source={IMAGES.LOGO} style={style.logo} />
        <Text style={style.headerText}>Debit Card</Text>
        <Text style={[style.avaiableBalanceText]}>Available Balance</Text>
        <View style={style.balanceView}>
          <TouchableOpacity style={style.iconBtn}>
            <Text style={style.dollartext}>$$</Text>
          </TouchableOpacity>
          <Text style={style.balanceText}>3,000</Text>
        </View>
      </View>

      <ScrollView>
        <View style={style.contentContainer}>
          <View style={style.mainContainer}>
            <TouchableOpacity style={style.cardNoContainer}>
              <MyImage source={IMAGES.HIDE_SHOW} style={style.hideShowImage} />
              <Text style={style.hideCardNumber}>Hide card number</Text>
            </TouchableOpacity>
            <View style={style.cardContainer}>
              <MyImage source={IMAGES.ASPIRE_LOGO} style={style.companyIcon} />
              <Text style={style.markText}>Mark Henry</Text>
              <View style={style.cardNo}>
                <Text style={style.cardNoText}>5647</Text>
                <Text style={style.cardNoText}>3411</Text>
                <Text style={style.cardNoText}>2413</Text>
                <Text style={style.cardNoText}>2020</Text>
              </View>
              <View style={style.cvvView}>
                <Text style={style.cvvText}>Thrs: 12/20</Text>
                <Text style={[style.cvvText]}>CVV 456</Text>
              </View>
              <MyImage source={IMAGES.VISA_ICON} style={style.groupIcon} />
            </View>
          </View>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DebitCard;
