import { SafeAreaView } from 'react-native'
import { View, Text, StateScreen, LoaderScreen, Colors, Image, TextField, Button } from 'react-native-ui-lib';
import styles from './../../theme';

export default function Auth() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.wrapper}>
				<View center>
					<Image
						width={100}
						height={140}
						marginT-100
						source={
							require("./../../assets/images/icon_trans.png")
						}
					/>
					<Text
						white
						marginT-50
						text30BO
					>AFF</Text>
					
					<View row centerV marginT-15>
						<TextField
							width={150}
							placeholder="Nhập mã thiết bị"
							// floatingPlaceholder
							textStyle={{
								textAlign: "center",
								color: "white"
							}}
							style={{
								color: "white",
								textAlign: "center"
							}}
							placeholderTextColor="#e6e8eb"
						/>
						<Button
							label={"Kết nối"}
							backgroundColor={Colors.blue30}
						/>
					</View>
				</View>
				<Text center style={{
					position: "absolute",
					bottom: 0,
					width: "100%",
					textAlign: "center",
					color: "#e6e8eb"
				}}>Auto fish feeding @G3</Text>
			</View>
		</SafeAreaView>
	)
}