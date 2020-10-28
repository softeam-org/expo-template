import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/stores';
import Routes from './src/routes';

const App = () => {
	return (
		<Provider store={store}>
			<SafeAreaView style={styles.container}>
				<StatusBar barStyle="light-content" backgroundColor="#00a" />
				<Routes />
			</SafeAreaView>
		</Provider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#00a',
	},
});

export default App;
