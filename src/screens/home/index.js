import { View, SafeAreaView } from 'react-native'
import { Text } from 'react-native-ui-lib';
import styles from './../../theme';

export default function Home() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.wrapper}>
				<Text white>
					Home
				</Text>
			</View>
		</SafeAreaView>
	)
}