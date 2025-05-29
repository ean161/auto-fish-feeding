import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToastManager from 'toastify-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Auth from './src/screens/auth';
import Home from './src/screens/home';
import styles from './src/theme';

const Stack = createStackNavigator();
const toastConfig = {
	success: (props) => (
		<View style={[styles.notify, styles.successNotify]}>
			<View style={styles.notifyContainer}>
				<Text style={styles.notifyTitle}>{props.text1}</Text>
				<Text style={styles.notifyContent}>{props.text2}</Text>
			</View>
		</View>
	),
	error: (props) => (
		<View style={[styles.notify, styles.errorNotify]}>
			<View style={styles.notifyContainer}>
				<Text style={styles.notifyTitle}>{props.text1}</Text>
				<Text style={styles.notifyContent}>{props.text2}</Text>
			</View>
		</View>
	),
	custom: (props) => <CustomToast {...props} />,
}

function App() {
	return (
		<NavigationContainer>
			<ToastManager
				config={toastConfig}
				theme="light"
				position="bottom"
				isRTL={true}
				showProgressBar={false}
				showCloseIcon={false}
				animationStyle="fade"
			/>
			<Stack.Navigator initialRouteName="Auth">
				<Stack.Screen
					name="Auth"
					component={Auth} options={{
						headerShown: false,
						statusBarHidden: true
					}}
				/>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerShown: false,
						statusBarHidden: true
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App;