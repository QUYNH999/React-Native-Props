import { react, Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Styles from './HomeStyle'
import Home from './Home'

class City extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={[Styles.container, { zIndex: 2 }]}>
                <View style={Styles.header}>
                    <Text style={Styles.txtHeader}>City</Text>
                </View>
                <View style={Styles.body}></View>
                <View style={Styles.tabbar}>
                    <TouchableOpacity style={Styles.tabbarHome}>
                        <Text style={Styles.txtTabbarHome}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.tabbarCity}>
                        <Text style={Styles.txtTabbarCity}>City</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default City