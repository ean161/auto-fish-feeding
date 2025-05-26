import { useEffect, useState } from 'react';
import { SafeAreaView, Alert } from 'react-native'
import { View, Text, Colors, Image, TextField, Button } from 'react-native-ui-lib';
import styles from './../../theme';
import Storage from './../../utils/storage';
import verifyDeviceCode from '../../api/verifyDeviceCode';
import ToastManager, { Toast } from 'toastify-react-native'

export default function Auth({ navigation }) {
	const [deviceCode, setDeviceCode] = useState("Unknown");
	const [authRes, setAuthRes] = useState();
	const [deviceInputColor, setDeviceInputColor] = useState("white");
	console.log(122);

	useEffect(() => {
		const getDeviceCode = async () => {
			setDeviceCode(await Storage.get("deviceCode"));
		}

		getDeviceCode();
	}, []);

	useEffect(() => {
		if (deviceInputColor != "white") {
			setDeviceInputColor("white");
		}
	}, [deviceCode]);

	const handleDeviceCode = async () => {
		const verifyRes = await verifyDeviceCode(deviceCode);
		setAuthRes(verifyRes);

		if (verifyRes.status == 0) {
			setDeviceInputColor("red");
		} else {
			await Storage.set("deviceCode", deviceCode);
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
					<View row centerV marginT-15>
						<TextField
							width={150}
							placeholder="Nhập mã thiết bị"
							textStyle={{
								color: "white",
								textAlign: "center"
							}}
							style={{
								color: deviceInputColor,
								textAlign: "center"
							}}
							placeholderTextColor="#e6e8eb"
							onChangeText={setDeviceCode}
						/>
						<Button
							label={"Kết nối"}
							backgroundColor={Colors.blue30}
							onPress={() => {
								handleDeviceCode();
							}}
						/>
					</View>
				</View>
				<Text
					center
					style={styles.credit}
				>Auto fish feeding @G3 {deviceCode} {JSON.stringify(authRes)}</Text>
			</View>
		</SafeAreaView>
	)
}