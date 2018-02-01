export const DATA_LOADED = 'DATA_LOADED'
import { firebaseConfig } from '../config'
import * as firebase from 'firebase'

const firebaseAPI = firebase.initializeApp(firebaseConfig)

export const loadProduct = () => {
    return (dispatch) => {
        const ref = firebaseAPI.database().ref("products")
        ref.on('value', (items) => {
          let payload = []

          items.forEach((child)=>{
            payload.push({
              postKey: child.val().postKey,
              title: child.val().title,
              description: child.val().description
            })
          })

          dispatch({type: DATA_LOADED, payload})
        })
    }
}

export const addProduct = (product) => {
    var postKey = firebase.database().ref().child('products/').push().key
    let updates = {}
    updates['/products/' + postKey] =  {...product, postKey}
    return () => firebase.database().ref().update(updates)
}

export const setProduct = (product) => {
    let updates = {}
    updates['/products/' + product.postKey] = product
    return () => firebase.database().ref().update(updates)
}

export const removeProduct = (product) => {
    return () => firebase.database().ref().child('products/'+ product.postKey).remove()
}
