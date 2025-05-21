import { LinearGradient } from 'expo-linear-gradient';
import {StyleSheet} from 'react-native'
import {View} from 'react-native'
import Logo from '@/components/Logo'
import Input from '@/components/Input'
export default function Login(){
    return(
        <LinearGradient 
        colors = {['#3A7CC2', '#FFFFFF']} 
        style = {styles.containerLogin}>
    <Logo/>
    <Input
    placeholder="Log-in"
    keyboardType="email-address"
    iconName = "email"
    />
    <Input
    placeholder="senha"
    keyboardType = "default"
    iconName = "lock"
    />
        </LinearGradient>
    
    )
}

export const styles = StyleSheet.create({
    containerLogin:{
        flex:1,
        alignItems:'center',
        marginTop:0
       
    }

})