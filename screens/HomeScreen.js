import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Stories</Text>
          {/* Add dummy profiles here */}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Posts</Text>
          {/* Add dummy posts here */}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile Suggestions</Text>
          {/* Add profile suggestions here */}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.profileIcon}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 50,
  },
});

export default HomeScreen;
