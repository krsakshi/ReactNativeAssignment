import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSection}>
        {/* Profile Picture, Followers, Following Count */}
        <Text>Profile Picture</Text>
        <Text>Followers: 100</Text>
        <Text>Following: 50</Text>
      </View>
      <View style={styles.middleSection}>
        <Text>Posts: 20</Text>
      </View>
      <View style={styles.bottomSection}>
        {/* Display dummy posts in a stacked card format */}
        <Text>Post 1</Text>
        <Text>Post 2</Text>
        {/* Add more dummy posts here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  topSection: {
    marginBottom: 20,
  },
  middleSection: {
    marginBottom: 20,
  },
  bottomSection: {
    marginBottom: 20,
  },
});

export default ProfileScreen;
