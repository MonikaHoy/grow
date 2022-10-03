import React from 'react';
import {Button, SafeAreaView, View, StyleSheet, Text} from 'react-native';

const AddPlant = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text>
          Here will be a camera capture for taking a new plant picture
        </Text>
      </View>
      <Button title="*snapshot*" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
});

export default AddPlant;