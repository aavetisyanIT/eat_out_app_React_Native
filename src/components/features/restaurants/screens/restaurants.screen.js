import React from 'react';
import {
	StatusBar,
	StyleSheet,
	SafeAreaView,
	Text,
	View,
	Platform,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCart } from '../components/restaurant-info-cart.component';

export default function RestaurantsScreen() {
	const [searchQuery, setSearchQuery] = React.useState('');

	const onChangeSearch = query => setSearchQuery(query);
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.search}>
				<Searchbar
					placeholder='Search'
					onChangeText={onChangeSearch}
					value={searchQuery}
				/>
			</View>
			<View style={styles.list}>
				<RestaurantInfoCart />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, marginTop: StatusBar.currentHeight },
	search: { padding: 16, backgroundColor: 'green' },
	list: {
		flex: 1,
		padding: 16,
		backgroundColor: 'blue',
	},
});
