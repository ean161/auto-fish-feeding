import {
	StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1d2041',
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
	},
	wrapper: {
		padding: 16,
		paddingTop: 25,
		height: "100%"
	},
	textWhite: {
		color: "white"
	}
});

export default styles;