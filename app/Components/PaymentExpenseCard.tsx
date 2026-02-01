import { useState } from "react";
import { PaymentExpenseData } from "../interfaces";
import Box from "./Restyle/Box";
import Text from "./Restyle/Text";
import { StyleSheet, TouchableOpacity } from "react-native";
import CardModal from "./CardModal";
import { handleUpdate } from "../lib/utils";
import { Dispatch, SetStateAction } from "react";
interface PaymentExpenseCardProps { 
    description:string; 
    amount: number; 
    author: string;
    type:string;
    name:string;
    id?:number;
    people: string[];
    setPaymentData: Dispatch<SetStateAction<PaymentExpenseData[]>>;
}

export default function PaymentExpenseCard({ description, amount, author, type, name,id, people, setPaymentData }: PaymentExpenseCardProps) {
    const positive = type === 'payment' && author != name || type === 'expense' && author === name;
    const [modalVisible, setModalVisible] = useState(false);    
    return (
        <Box style={styles.card}  borderRadius="s" padding="s">
            <Box style={styles.nameDescription}>
                <Box style={styles.authorBox} backgroundColor = 'card' padding = "s" borderRadius = "s">
                    <Text>{author}</Text>
                </Box>
                <Text>{description}</Text>
                
            </Box>
            
            <Box style={styles.amountBox}>
            <Text variant={positive ? "green" : "red"}>{positive ? '+' : '-'} ${amount}</Text>
            
            {(author === name) && <Box backgroundColor="purple" padding="s" borderRadius="s">
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text>Edit</Text>
                </TouchableOpacity>
            </Box>}
            </Box>
            <CardModal
                            visible={modalVisible}
                            onClose={() => setModalVisible(false)}
                            onSubmit={ (data) => {handleUpdate(data, name, id, setPaymentData)} }
                            people={people}
                            title="Edit Payment/Expense"
                            defaultData={{description, amount: amount, type: type as 'payment' | 'expense', recipient: author}}
                        />
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
    },
    amountBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:8
    },
   
    
})