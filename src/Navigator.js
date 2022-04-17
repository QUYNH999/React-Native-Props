import { react, Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Home from './Home.js';
import Styles from './HomeStyle';
import City from './City.js';

class Navigator extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        // var home = new Home()
        // var city = new City()

        return (


            <View style={[Styles.container, { zIndex: 1 }]}>
                <View style={Styles.header}>
                    <Text style={Styles.txtHeader}>Home</Text>
                </View>

                <ScrollView style={Styles.body}>
                    {
                        <Home/>
                    }
                </ScrollView>

                <View style={Styles.tabbar}>
                    <TouchableOpacity style={Styles.tabbarHome}>
                        <Text style={Styles.txtTabbarHome}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.tabbarCity}
                        onPress={() => {
                            return (
                                <City/>
                            )

                        }}>
                        <Text style={Styles.txtTabbarCity}>City</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default Navigator

