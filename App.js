import React from 'react';
import {
	SafeAreaView,
	Text,
	StatusBar,
	StyleSheet
} from 'react-native';

function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Its working</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
	}
});

export default App;
