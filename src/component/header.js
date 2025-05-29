import { useState, useEffect } from 'react';
import { SafeAreaView, Pressable } from 'react-native'
import { Text, Button, Toast, Colors, Image, View } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './../theme';

export default function Header({ deviceCode, logout }) {
	return (
		<View style={styles.header}>
            <Pressable
                style={styles.headerBack}
                onPress={logout}
            >
                <Icon name="chevron-back-outline" size={30} color="white" />
            </Pressable>
            <Text white text70 style={styles.headerTitle}>{deviceCode}</Text>
		</View>
	);
}