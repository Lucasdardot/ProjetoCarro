import{StyleSheet} from 'react-native'
import{View,Image} from 'react-native'
export default function Logo(){
    return(
        <View>
            <Image style = {styles.logoImg} source={require('C:/Users/User/Desktop/ProjetoCarro/assets/images/png-clipart-car-wash-google-play-customer-app-store-car-blue-logo-removebg-preview.png')} />
        </View>
    )
}


export const styles = StyleSheet.create({
    logoImg:{
        marginTop:75,
        height:100,
        width:100,
        marginBottom:40
    }

})