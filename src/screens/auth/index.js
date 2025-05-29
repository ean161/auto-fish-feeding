import { useEffect, useState } from 'react';
import { SafeAreaView, Alert } from 'react-native'
import { View, Text, Colors, Image, TextField, Button } from 'react-native-ui-lib';
import styles from './../../theme';
import Storage from './../../utils/storage';
import verifyDeviceCode from '../../api/verifyDeviceCode';
import { Toast } from 'toastify-react-native';

export default function Auth({ navigation }) {
	const [deviceCode, setDeviceCode] = useState("Unknown");

	useEffect(() => {
		const handleStoredCode = async () => {
			const storedCode = await Storage.get("deviceCode");
			handleDeviceCode(storedCode);
			setDeviceCode(storedCode);
		}

		handleStoredCode();
	}, []);

	const handleDeviceCode = async (code) => {
		const verifyRes = await verifyDeviceCode(code);

		if (verifyRes.status == 0) {
			Toast.show({
				type: "error",
				text1: "Thất bại",
				text2: verifyRes.message,
				position: "bottom",
			});
		} else {
			await Storage.set("deviceCode", code);
			navigation.push("Home");
		}
	}

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
					<View row centerV marginT-15 zIndex-200>
						<TextField
							width={150}
							placeholder="Nhập mã thiết bị"
							textStyle={{
								color: "white",
								textAlign: "center"
							}}
							style={{
								color: "white",
								textAlign: "center"
							}}
							hitSlop={300}
							placeholderTextColor="#e6e8eb"
							onChangeText={setDeviceCode}
							height={50}
							onSubmitEditing={() => {
								handleDeviceCode(deviceCode);
							}}
						/>
						<Button
							label={"Kết nối"}
							enableShadow
							backgroundColor={Colors.blue30}
							onPress={() => {
								handleDeviceCode(deviceCode);
							}}
						/>
					</View>
				</View>
				<Text
					center
					style={styles.credit}
				>Auto fish feeding @G3 {deviceCode}</Text>
			</View>
		</SafeAreaView>
	)
}