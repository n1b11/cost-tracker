import Box from "./Restyle/Box"
import Text from "./Restyle/Text"
import { StyleSheet } from "react-native"
export default function PaymentExpenseHeader() {
    return (
        <Box style={styles.header} padding="s">   
            <Text>History</Text>
        </Box>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    
    }
})