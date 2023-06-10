import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('./img/Profile/kim.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>Kin Seon-Ho</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Bio:</Text>
        <Text style={styles.infoValue}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
infoValue: {
  marginTop: 5,
  textAlign: 'justify',
}

});

export default Profile;