import { PaymentExpenseData } from "../interfaces";
import Box from "./Restyle/Box";
import Text from "./Restyle/Text";
import { StyleSheet } from "react-native";
interface PaymentExpenseCardProps { 
    description:string; 
    amount: number; 
    author: string;
    type:string;
    name:string;
}

export default function PaymentExpenseCard({ description, amount, author, type, name }: PaymentExpenseCardProps) {
    const positive = type === 'payment' && author != name || type === 'expense' && author == name;
    return (
        <Box style={styles.card}  borderRadius="s" padding="s">
            <Box style={styles.nameDescription}>
                <Box style={styles.authorBox} backgroundColor = 'card' padding = "s" borderRadius = "s">
                    <Text>{author}</Text>
                </Box>
                <Text>{description}</Text>
                
            </Box>
            

            <Text variant={positive ? "green" : "red"}>{positive ? '+' : '-'} ${amount}</Text>
            
        </Box>
    )
}   




const styles = StyleSheet.create({
    card: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    nameDescription: {
        flexDirection: 'row',   
        alignItems: 'center',
    },
    authorBox: {
        marginRight: 16,
        alignItems: 'center',
    }
    
})