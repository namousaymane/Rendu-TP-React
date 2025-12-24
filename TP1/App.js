import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/logo-vert.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.schoolName}>EMSI MAARIF</Text>
      </View>
      
      <View style={styles.info}>
        <Text style={styles.label}>Nom : <Text style={styles.value}>NAMOUS</Text></Text>
        <Text style={styles.label}>Prénom : <Text style={styles.value}>AYMANE</Text></Text>
        <Text style={styles.label}>Année universitaire : <Text style={styles.value}>2025 / 2026</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%', 
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  schoolName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    letterSpacing: 1,
  },
  info: {
    alignItems: 'left',
    gap: 8,
    marginTop: 40, 
  },
  label: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '500',
  },
  value: {
    fontSize: 17,
    color: '#111827',
    fontWeight: 'bold',
  },
});