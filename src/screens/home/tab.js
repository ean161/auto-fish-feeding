import { SegmentedControl } from 'react-native-ui-lib';

export default function Tab({ onChangeIndex, items }) {
    return (
        <SegmentedControl
            onChangeIndex={onChangeIndex}
            // containerStyle={styles.container}
            backgroundColor="#252954"
            segments={items}
            initialIndex={0}
            activeColor="white"
            activeBackgroundColor="#1d2041"
            borderRadius={5}
            outlineColor="#252954"
            // preset={screenPreset}
            style={{
                width: 180,
                borderColor: "#252954"
            }}
        />
    );
}