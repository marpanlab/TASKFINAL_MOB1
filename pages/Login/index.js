import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={require('./img/login.png')}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Senha"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
      </View>

      <TouchableOpacity style={styles.forgotpass}>
        <Text style={styles.foot}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => navigation.navigate('Routes')}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
        <Text style={styles.loginText}>Registrar</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.foot}>Por Marlon e Alexia</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  forgotpass: {
    width: 250,
    marginBottom: 50,
    alignItems: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#F8A8B5',
  },
  loginText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  footer: {
    position: 'absolute',
    bottom: -5,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foot: {
    color: 'gray',
    fontSize: 16,
  },
});

export default LoginScreen;
