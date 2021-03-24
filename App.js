import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import RestaurantsScreen from './src/components/features/restaurants/screens/restaurants.screen';

export default function App() {
	return (
		<>
			<RestaurantsScreen />
			<ExpoStatusBar style='auto' />
		</>
	);
}
