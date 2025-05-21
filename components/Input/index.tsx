
import {TextInput, TextInputProps, View} from "react-native"
import {styles} from "./styles"
import Icon from 'react-native-vector-icons/MaterialIcons';
interface inputProps extends TextInputProps{
    placeholder:string,
    keyboardType:TextInputProps["keyboardType"],
    iconName:string
}
export default function Input({placeholder,keyboardType,iconName}:inputProps){
    return(
         <View style={styles.viewInput}>
            <Icon name={iconName} size={24} color="#fff"/>
            <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType={keyboardType}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
        />
        
         </View>
    )
}