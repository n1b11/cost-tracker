import Box from "./Restyle/Box"
import Text from "./Restyle/Text"
import { TouchableOpacity,Button, StyleSheet } from "react-native"
import AddCardModal from "./AddCardModal"
import { createPayment, createExpense, getUsers } from "../lib/api";
import { CardCreationData, PaymentData, PaymentExpenseData } from "../interfaces";
import { Dispatch, SetStateAction } from "react";

import { useState, useEffect } from "react";

export default function PaymentFooter({setPaymentData, name}: 
    {setPaymentData: Dispatch<SetStateAction<PaymentExpenseData[]>>, name:string}) 
{
    const [modalVisible, setModalVisible] = useState(false);
    const [people, setPeople] = useState<string[]>([])

   
    useEffect(() => {
        getUsers(setPeople);
    }, []); 

    const handleCreate = (data: CardCreationData) => {
        if (name == ''){
            return; 
        }
        if (data.type === 'payment') {
            createPayment({
                description: data.description,
                amount: data.amount,
                type: 'payment',
                author: name,
                recipient: data.recipient,
                date: new Date().toISOString(),
            })
            setPaymentData(prev => [...prev, {
                description: data.description,
                amount: data.amount,
                type: data.type,
                author: name,
                recipient: data.recipient,
                date: new Date().toISOString(),
            }])
        } else {
            createExpense({
                description: data.description,
                amount: data.amount,
                type: 'expense',
                author: name,
                recipients: [data.recipient],
                date: new Date().toISOString(),
            })
            setPaymentData(prev => [...prev, {
                description: data.description,
                amount: data.amount,
                type: data.type,
                author: name,
                recipients: [data.recipient],
                date: new Date().toISOString(),
            }])
        }
       
        console.log('t', data.type)
    }  
    
    return (
    <Box style={styles.footer}>
            <AddCardModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSubmit={handleCreate}
                people={people}
            />
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