import React from 'react'
import { View,  Text, TouchableHighlight } from 'react-native'
import { styles } from '../style'

export default renderRows = (props) => {
	const { title, description, id } = props.item
	return (
		<TouchableHighlight onPress={()=>{ props.touchAction(props.item)} }>
			<View style={styles.row}>
				<Text style={styles.title}>
					{ title }
				</Text>
				<Text style={styles.description}>
					{ description }
				</Text>
			</View>
		</TouchableHighlight>
	)
}
