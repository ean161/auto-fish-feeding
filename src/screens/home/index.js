import { useState, useEffect } from 'react';
import { View, SafeAreaView, Pressable } from 'react-native'
import { Text, Button, Toast, Colors, StackAggregator, Typography, FloatingButton } from 'react-native-ui-lib';
import styles from './../../theme';
import Header from './../../component/header';
import Storage from './../../utils/storage';
import Timer from './timer';
import Tab from './tab';

export default function Home({ navigation }) {
	const clockIcon = require("./../../assets/images/clock.png");
	const feedIcon = require("./../../assets/images/feed.png");

	const [deviceCode, setDeviceCode] = useState("Unknown");
	const [timerType, setTimerType] = useState(0);
	const [dailySelectedHour, setDailySelectedHour] = useState("16");
	const [dailySelectedMin, setDailySelectedMin] = useState("10");
	const [countSelectedHour, setCountSelectedHour] = useState("16");
	const [countSelectedMin, setCountSelectedMin] = useState("10");

	const [notify, setNotify] = useState({
		isShow: false,
		backgroundColor: "red",
		content: "",
		icon: feedIcon
	});

	useEffect(() => {
		const getDeviceCode = async () => {
			setDeviceCode(await Storage.get("deviceCode"));
		}

		getDeviceCode();
	}, []);

	const handleFeed = () => {
		showNotify(
			"Cho cá ăn thành công",
			Colors.blue30,
			feedIcon
		);
	}

	const addTimer = () => {
		showNotify(
			"Thêm hẹn giờ cho ăn thành công",
			Colors.blue30,
			clockIcon
		);

		setDailySelectedHour("16");
		setCountSelectedHour("16");
		setDailySelectedMin("10");
		setCountSelectedMin("10");
	}

	const logout = async () => {
		await Storage.remove("deviceCode");
		navigation.replace("Auth");
	}

	const showNotify = (content, color, icon) => {
		setNotify(prev => ({
			...prev,
			isShow: true,
			content: content,
			backgroundColor: color,
			icon: icon
		}));

		setTimeout(() => {
			setNotify(prev => ({
				...prev,
				isShow: false
			}));
		}, 3000);
	}

	return (
		<SafeAreaView style={styles.container}>
			<Toast
				renderAttachment={false}
				visible={notify.isShow}
				position="top"
				backgroundColor={notify.backgroundColor}
				message={notify.content}
				icon={notify.icon}
			/>
			<View style={styles.wrapper}>
				<Header deviceCode={deviceCode} logout={logout}/>
				<Text
					white
					text60BO
					marginB-16
				>Hẹn giờ</Text>
				<Tab
					onChangeIndex={setTimerType}
					items={
						[{
							label: "Hôm nay"
						}, {
							label: "Hằng ngày"
						}]
					}
				/>
				{
					(timerType == 0) ? (
						<Timer
							selectedHour={dailySelectedHour}
							setSelectedHour={setDailySelectedHour}
							selectedMin={dailySelectedMin}
							setSelectedMin={setDailySelectedMin}
						/>
					) :
					(
						<Timer
							selectedHour={countSelectedHour}
							setSelectedHour={setCountSelectedHour}
							selectedMin={countSelectedMin}
							setSelectedMin={setCountSelectedMin}
						/>
					)
				}
				<Button
					backgroundColor="#252954"
					label="Thêm"
					iconSource={clockIcon}
					iconStyle={{
						width: 20,
						height: 20,
						resizeMode: "contain",
						marginRight: 6
					}}
					labelStyle={{
						fontWeight: "600"
					}}
					style={{
						// position: "absolute",
						// bottom: 0,
						// right: 0,
						// marginHorizontal: 32
						alignSelf: "flex-end",
						width: 100
					}}
					enableShadow
					onPress={addTimer}
				/>
				<Text
					white
					text60BO
					marginB-16
				>Lịch sử</Text>
				{/* <StackAggregator
					containerStyle={{marginTop: 12}}
					//   onItemPress={this.onItemPress}
					collapsed={true}
					contentContainerStyle={{
						backgroundColor: "#252954",
						padding: 16,
						color: "white"
					}}
					itemBorderRadius={10}
					buttonProps={{
						color: "white",
						labelStyle: {
							...Typography.text80,
							fontWeight: "500",
							color: "white"
						}
					}}
				>
					<View key={1} center padding-16>
						<Text white>hdh</Text>
					</View>
					<View key={2} center padding-16>
						<Text white>hdh</Text>
					</View>
				</StackAggregator> */}
				<Button
					backgroundColor={Colors.blue30}
					label="Cho ăn"
					iconSource={feedIcon}
					iconStyle={{
						width: 30,
						height: 30,
						resizeMode: "contain",
						marginRight: 10
					}}
					labelStyle={{
						fontWeight: '600'
					}}
					style={{
						position: "absolute",
						bottom: 10,
						right: 0,
						marginHorizontal: 32
					}}
					enableShadow
					onPress={handleFeed}
				/>
			</View>
		</SafeAreaView>
	)
}