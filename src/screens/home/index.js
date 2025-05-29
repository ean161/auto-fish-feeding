import { useState, useEffect } from 'react';
import { View, SafeAreaView, Pressable } from 'react-native'
import { Text, Button, Toast, Colors, SegmentedControl } from 'react-native-ui-lib';
import styles from './../../theme';
import Header from './../../component/header';
import Timer from './timer';
import Tab from './tab';

export default function Home() {
	const feedIcon = require("./../../assets/images/feed.png");

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


	const handleFeed = () => {
		showNotify(
			"Cho cá ăn thành công",
			Colors.blue30,
			feedIcon
		);
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
				position={"top"}
				backgroundColor={notify.backgroundColor}
				message={notify.content}
				icon={notify.icon}
			/>
			<View style={styles.wrapper}>
				<Header/>
				<Text
					white
					text60BO
					marginB-16
				>Hẹn giờ</Text>
				
				<Tab
					onChangeIndex={setTimerType}
					items={
						[{
							label: "Đếm ngược"
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
						bottom: 0,
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