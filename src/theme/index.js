import {
	StyleSheet
} from 'react-native';
import { StatusBar } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1d2041",
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
	},
	notify: {
		width: "90%",
		borderRadius: 10,
		padding: 15,
		flexDirection: "row",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	notifyContainer: {
		flex: 1,
		marginLeft: 10
	},
	notifyTitle: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 16
	},
	notifyContent: {
		color: "#fff",
		fontSize: 14,
		marginTop: 4
	},
	successNotify: {
		backgroundColor: "#4CAF50"
	},
	errorNotify: {
		backgroundColor: "#FF5722"
	},
	wheel: {
		width: 100,
	},
	header: {
		backgroundColor: "#242852",
		paddingVertical: 6,
		paddingHorizontal: 6,
		borderRadius: 50,
		marginBottom: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	headerIcon: {
		width: 40,
		height: 40,
		resizeMode: "contain",
		marginRight: 10,
		backgroundColor: "#1d2041",
		padding: 3,
		borderRadius: 50
	},
	headerTitle: {

	},
	headerDeviceName: {

	}
});

export default styles;