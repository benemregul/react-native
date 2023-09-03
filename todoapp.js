import React, {useState} from "react";
import {Text, TextInput, View, TouchableOpacity, Alert, FlatList} from "react-native";
import stil from "./todoapp.style";

function Todoapp(){

    const [yapilacakIsAdi, setyapilacakIsAdi] = useState();
    const [listeElemani, setlisteElemani] = useState([]);


    const isEkleme = () => {
        if(yapilacakIsAdi==""){
        Alert.alert("Lütfen yapılacak işi giriniz...")
        }else(setlisteElemani([...listeElemani, yapilacakIsAdi]))
    }

    const veriSilme = (index) => {
        const yeniListe = [...listeElemani];
        yeniListe.splice(index, 1)
        setlisteElemani(yeniListe)
    }

    return(


        <View>
            <View style={stil.ustAnasayfa}>
            <Text style={stil.baslik}>Yapılacaklar Listesi</Text>
            <View style={stil.ustveribolumu}>
            <TextInput onChangeText={setyapilacakIsAdi} style={stil.yapilacakkutusu} placeholder="Yapılacak işi giriniz..."></TextInput>
            <TouchableOpacity onPress={isEkleme}><Text style={stil.yapilacakkutusuekle}>Ekle</Text></TouchableOpacity>
            </View>
            </View>

            <View>


                <FlatList
                data={listeElemani}
                renderItem={({item, index}) => <>
                <View style={stil.altAnasayfa}>
                <Text style={stil.listeElemani}>{item}</Text>
                <TouchableOpacity style={stil.silarkaplan} onPress={() => veriSilme(index)}>
                    <Text style={stil.sil}>X</Text>
                </TouchableOpacity>
                </View>
                </>}

                />

                

            </View>
        </View>

    )
}
export default Todoapp;