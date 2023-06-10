import * as React from 'react';
import {  TouchableOpacity, Image, StyleSheet, View, Text, SafeAreaView} from 'react-native';

const Favorite = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate()}>
          <View style={styles.card}>
            <Image style={styles.posterImage} source={require('../Movie/img/4.png')}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate()}>
          <View style={styles.card}>
            <Image style={styles.posterImage} source={require('../Movie/img/14.png')}/>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Ranking')}>
          <Text style={styles.buttonText}>Top 5 Global</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#F8A8B5',
    padding: 10,
    width: '50%',
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
    container: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 9,
    backgroundColor: 'white',
    flexBasis: '30%',
    marginHorizontal: 5,
    
  },
  posterImage: {
    height: 200,
    width: 120,
    borderRadius: 5,
    alignSelf: 'center',
  },
});
export default Favorite;
