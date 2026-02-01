import Box from "./Restyle/Box"
import Text from "./Restyle/Text"
import { TouchableOpacity,Button, StyleSheet } from "react-native"

import { Dispatch, SetStateAction } from "react";
export default function PaymentFooter({people, setModalVisible}: 
    {people: string[], setModalVisible: Dispatch<SetStateAction<boolean>>}) 
{
    

   
   
    
    return (
    <Box style={styles.footer}>
            <TouchableOpacity 
                style={styles.buttonContainer}
                activeOpacity={0.7}
                onPress={() => setModalVisible(true)}
            >
                <Box style={styles.addButton} backgroundColor="purple">
                    <Text style={styles.plusText}>+</Text>
                </Box>
            </TouchableOpacity>
        </Box>
    )
}
        


const styles = StyleSheet.create({
    footer: {
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: 'gray',
        alignItems: 'center', 
    },
    buttonContainer: {
        position: 'absolute',
        bottom: -36,
    },
    addButton: {
        width: 72,
        height: 72,
        borderRadius: 24, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    plusText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    }
})