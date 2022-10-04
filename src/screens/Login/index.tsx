import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

const emailInputPlaceholder = 'Email';
const passwordPlaceholder = 'Password';
const ctaLogin = 'Sign in';

const Login = () => {
  const onLogin = () => {
    console.log('logging in');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.topContainer}>
          <TextInput
            placeholder={emailInputPlaceholder}
            secureTextEntry={false}
          />
          <TextInput placeholder={passwordPlaceholder} secureTextEntry={true} />
        </View>
        <Button disabled={false} onPress={onLogin} title={ctaLogin} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
