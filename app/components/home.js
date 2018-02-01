'use strict'

import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { FlatList, View,  Text } from 'react-native'
import { loadProduct, addProduct, setProduct, removeProduct } from '../actions'
import Loader from './loader'
import Rows from './renderRows'
import CustomButton from './customButton'
import ProductModal from './productModal'
import { styles } from '../style'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
          modalIsVisible: false
        }
    }

    openModal = () => {
        this.setState({
          modalIsVisible:true,
          actionAdd:true,
          title:'',
          description:'',
          postKey: ''
        })
    }

    closeModal = () => {
      this.setState({modalIsVisible:false})
    }

    componentDidMount = () => {
        this.props.loadProduct()
    }

    touchAction = (product) => {
      const { title, description, postKey } = product
      this.setState({modalIsVisible:true, title, description, postKey, actionAdd:false})
    }

    saveProduct =() => {
       const product = {
         title: this.state.title || 'untitled',
         description: this.state.description || 'no description'
       }
       this.props.addProduct(product)
       this.setState({modalIsVisible:false})
    }

    updateProduct =() => {
       const product = {
         postKey: this.state.postKey,
         title: this.state.title || 'untitled',
         description: this.state.description || 'no description'
       }
       this.props.setProduct(product)
       this.setState({modalIsVisible:false})
    }

    deleteProduct =() => {
       const product = {
         postKey: this.state.postKey
       }
       this.props.removeProduct(product)
       this.setState({modalIsVisible:false})
    }

    handleChange = (input) => {
      const {name, text} = input
      this.setState({[name]:text})
    }

    render() {
        if (this.props.loading) {
            return (
                <Loader message={'Loading Please Wait..'} />
            )
        } else {
            return (
                <View style={styles.backdrop}>
                    <Text style={styles.mainTitle}>Product List</Text>
                     <FlatList
                        data={this.props.data}
                        renderItem={({item})=><Rows item={item} touchAction={this.touchAction}/>}
                        keyExtractor={(item, index) => index}
                     />
                      <ProductModal close={this.closeModal}
                        modalState={this.state.modalIsVisible}
                        productState={this.state}
                        handleChange={this.handleChange}
                        save={this.saveProduct}
                        update={this.updateProduct}
                        delete={this.deleteProduct}
                       />
                     <CustomButton title={'Add Item'} onPress={this.openModal}  />
                </View>
            )
        }
    }
}

function mapStateToProps(state, props) {
    return {
        loading: state.reducer.loading,
        data: state.reducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadProduct: bindActionCreators(loadProduct, dispatch),
        removeProduct: bindActionCreators(removeProduct, dispatch),
        setProduct: bindActionCreators(setProduct, dispatch),
        addProduct: bindActionCreators(addProduct, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
