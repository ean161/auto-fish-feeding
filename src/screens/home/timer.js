import { useState, useEffect } from 'react';
import { View, SafeAreaView, Pressable } from 'react-native'
import { Text, Button, Toast, Colors } from 'react-native-ui-lib';
import { Picker } from '@react-native-picker/picker';
import styles from './../../theme';

export default function Timer({ selectedHour, setSelectedHour, selectedMin, setSelectedMin }) {
	return (
		<View>
			<View style={{
				flexDirection: "row",
				marginHorizontal: "auto"
			}}>
				<Picker
					selectedValue={selectedHour}
					onValueChange={(itemValue, itemIndex) =>{
						setSelectedHour(itemValue);
					}}
					style={styles.wheel}
					itemStyle={{ color: "white" }}
				>
					{Array.from({ length: 24 }, (_, i) => (
						<Picker.Item
						key={i}
						label={`${i}h`}
						value={i.toString()}
						/>
					))}
				</Picker>
				<Picker
					selectedValue={selectedMin}
					onValueChange={(itemValue, itemIndex) =>{
						setSelectedMin(itemValue);
					}}
					style={styles.wheel}
					itemStyle={{ color: "white" }}
				>
					{Array.from({ length: 60 }, (_, i) => (
						<Picker.Item
						key={i}
						label={`${i}p`}
						value={i.toString()}
						/>
					))}
				</Picker>
			</View>
		</View>
	);
}