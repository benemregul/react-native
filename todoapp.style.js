import { StyleSheet } from "react-native";

export default StyleSheet.create({
    ustAnasayfa:{
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        borderBottomColor:"grey",

        borderBottomWidth:1,
        
    },
        altAnasayfa:{
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between"
        
    },
    baslik:{
        fontSize:20,
    },

    yapilacakkutusu:{
        backgroundColor:"#cccccc",
        fontSize:15,
        padding:10,
        flex:1,
    },
    yapilacakkutusuekle:{
        padding:10,
        backgroundColor:"#91ffaf",
        height:50,
        fontSize:25,
    },
    ustveribolumu:{
 
        flexDirection:"row",
        marginTop:20,
        marginBottom:10,

    },
    listeElemani:{
        fontSize:18,
    },
    sil:{
        fontSize:18,
        color:"white",
    },
    silarkaplan:{
        backgroundColor:"red",
        borderRadius:10,
        width:20,
        alignItems:"center"
    }


})