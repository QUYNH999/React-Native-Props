import { react, Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Styles from './HomeStyle';
import City from './City';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    //Hàm xuất ra từng tỉnh
    _renderProvince(province) {
        return (
            <TouchableOpacity style={Styles.province}
                
            >
                <Image
                    style={Styles.image}
                    source={{ uri: province.image }}
                />
                <Text style={Styles.txtProvinceName}>{province.name}</Text>
            </TouchableOpacity>
        )
    }

    //Hàm để chia 2 cột, hiển thị trên phần body
    _renderColumn(column) {
        return (
            <View style={{ flex: 1 }}>
                {
                    provinces.map((province, index) => {
                        if (index % 2 === column) {
                            return (
                                this._renderProvince(province)
                            )
                        }
                    })
                }
            </View>
        )
    }

    render() {
        return (
            <View style={Styles.column}>
                {
                    [0, 1].map(column => this._renderColumn(column))
                }
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
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },

]


export default Home 