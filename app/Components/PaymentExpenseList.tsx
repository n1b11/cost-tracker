import PaymentExpenseCard from "./PaymentExpenseCard";
import Box from "./Restyle/Box";
import { ScrollView, StyleSheet } from "react-native";
import { PaymentExpenseData } from "../interfaces";

interface PaymentExpenseListProps {
    setPaymentData: (paymentData: PaymentExpenseData[]) => void;
    paymentData: PaymentExpenseData[];
    name: string;
}

export default function PaymentExpenseList(
    {setPaymentData, paymentData, name}: PaymentExpenseListProps
) {
    
    return (
        <Box style={styles.wrapper}>
        <ScrollView>
            <Box style={styles.container}>
                {paymentData.map((expense, index) => (
                    <PaymentExpenseCard key={index} {...expense} name={name} />
                ))}
            </Box>
        </ScrollView>
    </Box>
    )
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column-reverse',
        gap: 4,

        
    },
    
    wrapper: {
        height: '40%',
    }
})