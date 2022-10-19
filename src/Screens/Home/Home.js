//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Images from '../../assets/images/Images';

// create a component
class Home extends Component {
    render() {
        return (

           
           <View style={{flex:1}} >
               
                <View style={styles.container}>


                    <Image
                        style={{ height: 40, width: 40, marginTop: 50}}
                        source={Images.icback}
                    />

                    <Image
                        style={{ height: 50, width: 70, marginTop: 50 }}
                        source={Images.ichome}
                    />

                    <Image
                        style={{ height: 40, width: 50, marginTop: 50 }}
                        source={Images.icfront}
                    />
                </View>

                <ScrollView>
                <View style={{ flex:1,marginVertical: 16, marginHorizontal: 16, justifyContent: 'center' }}>

                
                    <TextInput style={{ backgroundColor: 'pink', height: 50, borderRadius: 15, padding: 10 }}
                        placeholder='Enter Name'
                        placeholderTextColor="black"
                    />

                    <TextInput style={{ backgroundColor: 'pink', height: 50, marginTop: 20, borderRadius: 15, padding: 10 }}
                        placeholder="Email"
                        placeholderTextColor="black"
                    />
                    <TextInput style={{ backgroundColor: 'pink', height: 50, marginTop: 20, borderRadius: 15, padding: 10 }}
                        placeholder="Address"
                        placeholderTextColor="black"
                    />
                    <TextInput style={{ backgroundColor: 'pink', height: 50, marginTop: 20, borderRadius: 15, padding: 10 }}
                        placeholder="City"
                        placeholderTextColor="black"
                    />
                 
                </View>
                </ScrollView>
                    <View style={{ flex:1, justifyContent:'flex-end', marginBottom: 20, width: "100%", height: 70 }}>

                    <TouchableOpacity style={{ backgroundColor: '#5f9ea0', alignItems:'center', width: '90%', marginHorizontal: 16, height: 40, justifyContent: 'center', borderRadius: 5 }}>

                        <Text>Click Me</Text>
                    </TouchableOpacity>
                    

                </View>
               
                </View>
        );









    }
}

// define your styles
const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'grey',
        borderBottomWidth: 2,
        padding: 10,

        //backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Home;
