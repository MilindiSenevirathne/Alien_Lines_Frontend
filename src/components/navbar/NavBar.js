import { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function NavBar({ isLogged }) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      width: 360,
    },
    logoImageContainer: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'start',
    },
    profileImageContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    menuIconContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    authButtonContainer: {
      flex: 2,
      justifyContent: 'center',
    },
    logoImage: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      resizeMode: 'contain',
    },

    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'contain',
    },
    menuIcon: {
      width: 40,
      height: 50,
      justifyContent: 'center',
      resizeMode: 'contain',
    },
    authButton: {
      width: 100,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'contain',
    },
  });
  
  const navigation = useNavigation();

  const handleProfileImageClick = () => {
    navigation.navigate('MyProfile'); 
  };


  if (isLogged) {
    return (
      <View style={styles.container}>
        <View style={styles.logoImageContainer}>
          <Image
            source={require('../../images/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <TouchableOpacity
          style={styles.profileImageContainer}
          onPress={handleProfileImageClick} // Call the function when the image is clicked
        >
          <Image
            source={require('../../images/profile.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <View style={styles.menuIconContainer}>
          <Image
            source={require('../../images/menu.png')}
            style={styles.menuIcon}
          />
        </View>
      </View>
    );
  }

  if (!isLogged) {
    return (
      <View style={styles.container}>
        <View style={styles.logoImageContainer}>
          <Image
            source={require('../../images/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.authButtonContainer}>
          <Image
            source={require('../../images/authButton.png')}
            style={styles.authButton}
          />
        </View>
      </View>
    );
  }
}
