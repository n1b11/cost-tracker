import Box from "../Components/Restyle/Box";
import Text from "../Components/Restyle/Text";
import { StyleSheet } from "react-native";
import PaymentExpenseList from "../Components/PaymentExpenseList";
import PaymentExpenseHeader from "../Components/PayementExpenseHeader";
import PaymentFooter from "../Components/PaymentFooter";
import BalanceList from "../Components/BalanceList";
import { useEffect, useState } from "react";
import { PaymentData, PaymentExpenseData } from "../interfaces";
import { getSortedPaymentsAndExpenses, handleCreate } from "../lib/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUsers } from "../lib/api";
import CardModal from "../Components/CardModal";
import { CardCreationData } from "../interfaces";

export default function Home() {
    const [paymentData, setPaymentData] = useState<PaymentExpenseData[]>([]);
    const [name, setName] = useState<string>('')
    const loadName = async () => {
        const username = await AsyncStorage.getItem('username');
        console.log(username)
        if (username) {
            console.log('1')
            setName(username);
            console.log('2')
            const  payments = await getSortedPaymentsAndExpenses(username)
            console.log('payments', payments)
            setPaymentData(payments)
    }
    
}
    useEffect(() => {  
        loadName()
    },[])
    const [modalVisible, setModalVisible] = useState(false);
    const [people, setPeople] = useState<string[]>([])
    
    useEffect(() => {
            getUsers(setPeople);
        }, []); 
    
    
    return (
        <Box style={styles.container} backgroundColor="background">
            <BalanceList name = {name} paymentData = {paymentData} setPaymentData = {setPaymentData}/>
            <PaymentExpenseHeader />
            <PaymentExpenseList paymentData = {paymentData} setPaymentData = {setPaymentData} people = {people} name = {name}/>
            <PaymentFooter people = {people} setModalVisible={setModalVisible}/>
            
            <CardModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSubmit={(data: CardCreationData) => handleCreate(data, name, setPaymentData)}
                people={people}
                title="Add Payment/Expense"
            />
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});