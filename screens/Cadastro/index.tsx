import {Text} from 'react-native'
import {StyleSheet} from 'react-native'
import Input from '@/components/Input'
import Button from '@/components/Button'

import Logo from '@/components/Logo'
import { LinearGradient } from 'expo-linear-gradient';


export default function Cadastro(){
    return(
        <LinearGradient 
                colors = {['#3A7CC2', '#FFFFFF']} 
                style = {styles.containerLogin}>
                    <Logo/>
                     <Text style={styles.cadastroTitle}>CADASTRO</Text>
                    <Input
                        placeholder="Insira seu e-mail"
                        keyboardType="email-address"
                        iconName = "email"
                        />
                        <Input
                        placeholder="Crie uma senha"
                        keyboardType = "default"
                        iconName = "lock"
                        />
                        <Input
                        placeholder="Nome de usuário"
                        keyboardType = "default"
                        iconName = "supervised-user-circle"
                        />
                        <Input
                        placeholder="Cidade"
                        keyboardType = "default"
                        iconName = "home"
                        />
                        <Input
                        placeholder="Telefone"
                        keyboardType = 'numeric'
                        iconName = "phone"
                        />
                        <Button
                        text='Cadastrar-se'
                        />
                </LinearGradient>
        
    )
}export const styles = StyleSheet.create({
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
      cadastroTitle:{
        fontSize:33,
        fontWeight:700,
        marginBottom:30
      }
  
  })
