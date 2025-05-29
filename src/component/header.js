import { useState, useEffect } from 'react';
import { SafeAreaView, Pressable } from 'react-native'
import { Text, Button, Toast, Colors, Image, View } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './../theme';

export default function Header() {
	return (
		<View style={styles.header}>
            <Icon style={styles.headerIcon} name="chevron-back-outline" size={30} color="white" />
            <Text white text70 style={styles.headerTitle}>DEVICE1610</Text>
		</View>
	);
}