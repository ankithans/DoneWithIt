import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen() {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://assets.ajio.com/medias/sys_master/root/h7f/h18/15064423530526/-473Wx593H-460538694-black-MODEL.jpg',
        }}
      />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Black Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title='Ankit Hans'
            subtitle='5 Listings'
            image='https://assets.ajio.com/medias/sys_master/root/h7f/h18/15064423530526/-473Wx593H-460538694-black-MODEL.jpg'
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
