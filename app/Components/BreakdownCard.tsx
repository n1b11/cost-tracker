import  Box from "./Restyle/Box";
import  Text from "./Restyle/Text";
import { StyleSheet, View } from "react-native";

interface IByPersonList { 
    name: string;
    amount: number;
}

interface IBreakdownCardProps {
    total: number;
    byPersonList: IByPersonList[];
    positive: boolean;
}

export default function BreakdownCard({total, byPersonList, positive}: IBreakdownCardProps) {
    return (
        <Box style={styles.wrapper}>
            <Text padding = "s">{positive ? "Owed" : "Owes"}: </Text>
            <Box style={styles.container} backgroundColor="card" borderRadius="m" padding = "s">

                    <Text variant={positive ? "owedHeader" : "owesHeader"}>${positive? total : -total}</Text>
                    <View style={{borderBottomColor: positive ? "green" : "red", borderBottomWidth: 1, marginBottom: 12}} />
                    {
                        byPersonList.map((person, index) => (
                            <Box key={index} style={styles.row}>
                                <Text>{person.name} </Text>
                                <Text>${positive ? person.amount : -person.amount}</Text>
                            </Box>
                        ))
                    }
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '48%',
        paddingBottom: 24,
    },
    container: {
        width: '100%',
        height: '100%',
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        marginBottom: 4,
    },
})