import React from 'react'
import { View,  Text, Button } from 'react-native'
import { styles } from '../style'

export default customButton = (props) => (
	<View style={styles.itemButtonContainer}>
		<Button
			onPress={()=>{ props.onPress()} }
			title={props.title}>
		</Button>
	</View>
)
