import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native'
import { View, Text, Colors, Image, TextField, Button } from 'react-native-ui-lib';
import styles from './../../theme';
import Storage from './../../utils/storage';
import verifyDeviceCode from '../../api/verifyDeviceCode';

export default function Auth() {
	const [deviceCode, setDeviceCode] = useState("Unknown");
	const [authRes, setAuthRes] = useState();

	useEffect(() => {
		const getDeviceCode = async () => {
			setDeviceCode(await Storage.get("deviceCode"));
		}

		getDeviceCode();
	}, []);

	const enterDeviceCode = async () => {
		console.log(deviceCode);
		setAuthRes(await verifyDeviceCode(deviceCode));
		await Storage.set("deviceCode", deviceCode);
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
								textAlign: "center",
								color: "white"
							}}
							style={{
								color: "white",
								textAlign: "center"
							}}
							placeholderTextColor="#e6e8eb"
							onChangeText={setDeviceCode}
						/>
						<Button
							label={"Kết nối"}
							backgroundColor={Colors.blue30}
							onPress={() => {
								enterDeviceCode();
							}}
						/>
					</View>
				</View>
				<Text
					center
					style={{
						position: "absolute",
						bottom: 0,
						width: "100%",
						textAlign: "center",
						color: "#e6e8eb"
					}}
				>Auto fish feeding @G3 {deviceCode} {JSON.stringify(authRes)}</Text>
			</View>
		</SafeAreaView>
	)
}