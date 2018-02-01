import React from 'react'
import { Modal, Text, TextInput } from 'react-native'
import { styles } from '../style'
import CustomButton from './customButton'

export default productModal = (props) => (
	<Modal
			 visible={props.modalState}
			 animationType={'slide'}
			 onRequestClose={() => props.close()}
	 >
	 		<Text style={styles.mainTitle}>Add New Product</Text>
			<TextInput
          style={{height: 40}}
          placeholder={'Product title'}
          onChangeText={(text)=>props.handleChange({name:'title',text})}
					 value={props.productState.title }
					 editable = {true}
        />
				<TextInput
	          style={{height: 40}}
	          placeholder={'Product description'}
	          onChangeText={(text)=>props.handleChange({name:'description',text})}
						value={props.productState.description }
	        />
		 		<CustomButton title={'Save'} onPress={() => (props.productState.actionAdd)? props.save() : props.update()} />
				{!props.productState.actionAdd && <CustomButton title={'Delete'} onPress={() => props.delete() } />}
		 		<CustomButton title={'Close'} onPress={() => props.close()} />
	 </Modal>
)
