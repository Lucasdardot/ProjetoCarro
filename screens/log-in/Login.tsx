import { LinearGradient } from 'expo-linear-gradient';
import {StyleSheet} from 'react-native'
import {Text,View,Pressable} from 'react-native'
import Logo from '@/components/Logo'
import Input from '@/components/Input'
import Button from '@/components/Button'
export default function Login(){
    return(
        <LinearGradient 
        colors = {['#3A7CC2', '#FFFFFF']} 
        style = {styles.containerLogin}>
    <Logo/>
    <Text style={styles.loginTitle}>ENTRAR</Text>
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
    <Button
    text='Log-in'
    />
    <View style={styles.view}>
        <Text>Não tem uma conta? <Pressable><Text style={styles.criarContaBtn}>Cadastre-se agora!</Text></Pressable></Text>
    </View>
    
        </LinearGradient>
    
    )
}

export const styles = StyleSheet.create({
    containerLogin:{
        flex:1,
        alignItems:'center',
        marginTop:0
       
    },
    view:{
        marginTop:10
    },
    criarContaBtn:{
        color:'blue',
        fontWeight:600
    },
    loginTitle:{
        fontSize:33,
        fontWeight:700,
        marginBottom:30
    }

})