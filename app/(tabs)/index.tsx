import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Link, Redirect } from 'expo-router';

export default function HomeScreen() {
  return (
    <Redirect href="/pokemon"/>
  );
}
