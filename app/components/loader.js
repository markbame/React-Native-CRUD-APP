import React from 'react'
import { View,  Text, ActivityIndicator } from 'react-native'
import { styles } from '../style'

export default loader = (props) => (
	<View style={styles.activityIndicator}>
			<Text>
				{ props.message }
			</Text>
			<ActivityIndicator
					animating={true}
					style={[{height: 80}]}
					size="small"
			/>
	</View>
)
