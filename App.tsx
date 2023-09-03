import React from "react";
import {Text, SafeAreaView, View} from "react-native";
import Todoapp from "./components/todoapp";

function Anasayfa(){
    return(
        <View style={{backgroundColor:"#e0e0e0" , flex:1}}>
        <SafeAreaView>

            
            <Todoapp />


        </SafeAreaView>
        </View>
    )
}

export default Anasayfa;