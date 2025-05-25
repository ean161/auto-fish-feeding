import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './src/screens/auth/index';
import Home from './src/screens/home/index';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
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