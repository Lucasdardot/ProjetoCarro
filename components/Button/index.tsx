
import {Pressable,Text} from "react-native"
import {styles} from './style'
interface buttonProps{
    text:string,
}


export default function Button({text}:buttonProps){
    return(
        <Pressable style={styles.loginButton}>
  <Text style={styles.loginBtnText}>{text}</Text>
        </Pressable>
    )
}