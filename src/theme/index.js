import {
	StyleSheet
} from 'react-native';
import { StatusBar } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1d2041',
		paddingVertical: Platform.OS === "android" ? StatusBar.currentHeight : 0
	},
	wrapper: {
		padding: 16,
		paddingTop: 25,
		height: "100%"
	},
	textWhite: {
		color: "white"
	},
	credit: {
		position: "absolute",
		bottom: 16,
		width: "100%",
		textAlign: "center",
		color: "#e6e8eb"
	}
});

export default styles;