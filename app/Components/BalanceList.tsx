import Box from "./Restyle/Box";
import { StyleSheet } from "react-native";
import BreakdownCard from "./BreakdownCard";
import { ExpenseData, PaymentData, PaymentExpenseData } from "../interfaces";
import { getBalanceLists } from "../lib/utils";

interface BalanceListProps {
    name:string;
    setPaymentData: (paymentData: PaymentExpenseData[]) => void;
    paymentData: PaymentExpenseData[];
}

export default function BalanceList({name, paymentData, setPaymentData}: BalanceListProps) {
    const [owedList, owesList] = getBalanceLists(name, paymentData);
    
    return (
        <Box style={styles.wrapper} padding="s">
            <BreakdownCard 
                total={owedList.reduce((acc, person) => acc + person.amount, 0)} 
                byPersonList={owedList} 
                positive={true}
            />
            <BreakdownCard 
                total={owesList.reduce((acc, person) => acc + person.amount, 0)} 
                byPersonList={owesList} 
                positive={false}
            />
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '48%',
        height: '100%',
    },
    wrapper: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});