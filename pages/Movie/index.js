import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView, Image,} from 'react-native';

export default Movie = ({ navigation }) => {
  return (
    
    <ScrollView>
    <View style={styles.container}>

        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <View style={styles.card}>
            <Image style={styles.posterImage} source={require('./img/1.png')}/>
          </View>
        </TouchableOpacity>


        <View style={styles.card}>
          <Image style={styles.posterImage} source={require('./img/2.png')}/>
        </View>

        <View style={styles.card}>
          <Image style={styles.posterImage} source={require('./img/3.png')}/>
        </View>

        <View style={styles.card}>
          <Image style={styles.posterImage} source={require('./img/4.png')}/>
        </View>

                <View style={styles.card}>
          <Image style={styles.posterImage} source={require('./img/5.png')}/>
        </View>

        <View style={styles.card}>
          <Image style={styles.posterImage} source={require('./img/6.png')}/>
        </View>

        <View style={styles.card}>
          <Image style={styles.posterImage} source={require('./img/7.png')}/>
        </View>

        <View style={styles.card}>
          <Image style={styles.posterImage} source={require('./img/8.png')}/>
        </View>

        <View style={styles.card}>
          <Image style={styles.posterImage} source={require('./img/9.png')}/>
        </View>

        <View style={styles.card}>
          <Image style={styles.posterImage} source={require('./img/10.png')}/>
        </View>

        <View style={styles.card}>
          <Image style={styles.posterImage} source={require('./img/11.png')}/>
        </View>

        <View style={styles.card}>
          <Image style={styles.posterImage} source={require('./img/12.png')}/>
        </View>

        <View style={styles.card}>
          <Image style={styles.posterImage} source={require('./img/13.png')}/>
        </View>

        <View style={styles.card}>
          <Image style={styles.posterImage} source={require('./img/14.png')}/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
