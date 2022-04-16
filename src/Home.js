import {react, Component} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Styles from './HomeStyle';

class Home extends Component {
    constructor (props) {
        super (props)
        this.state = {

        }
    }
    
    

    render () {
        return (
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <Text style={Styles.txtHeader}>Home</Text>
                </View>
                <ScrollView style={Styles.body}>
                    
                </ScrollView>
                <View style={Styles.end}></View>
            </View>
        )
    }
}

const provinces = [
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
]
export default Home 