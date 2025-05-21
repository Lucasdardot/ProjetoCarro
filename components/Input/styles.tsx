
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    
    viewInput:{
        borderStyle:"solid",
        borderColor:"black",
        borderWidth:2,
        borderRadius: 3,
        height:50,
        width:350,
        flexDirection:"row",
        alignItems:'center',
        margin:10
    },
    
    input:{
        flex:1,
        fontSize:17,
        borderWidth:0,
        paddingHorizontal: 5,
        paddingVertical:10,
        marginLeft:2,
        outlineWidth:0
    }

})