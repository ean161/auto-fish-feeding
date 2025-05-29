import { useState, useEffect } from 'react';
import { SafeAreaView, Pressable } from 'react-native'
import { Text, Button, Toast, Colors, Image, View } from 'react-native-ui-lib';
import styles from './../theme';

export default function Header() {
	return (
		<View style={styles.header}>
            <Image style={styles.headerIcon} source={require("./../assets/images/icon_trans.png")} />
            <View>
                <Text white text90L marginB-1 style={styles.headerTitle}>Thiết bị</Text>
                <Text white text70BO style={styles.headerDeviceName}>DVC2628222</Text>
            </View>

		</View>
	);
}