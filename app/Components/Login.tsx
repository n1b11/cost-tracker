import { useState } from "react";
import { StyleSheet, TextInput, Button } from "react-native";
import Box from "./Restyle/Box";
import Text from "./Restyle/Text";
import { Theme } from "../theme";
import { useTheme } from "@shopify/restyle";

export default function Login() {

    const [name, setName] = useState('');
    const theme = useTheme<Theme>();
    return (
        <Box style={styles.container} backgroundColor="background">
            <Box style={styles.inputContainer} backgroundColor="card">
                <Text color="text">Login</Text>
               <Box style={styles.input} backgroundColor="input" borderRadius="s" padding="s" >
                    <TextInput
                        style={{ color: theme.colors.text }}
                        value={name}
                        onChangeText={setName}
                    />
                    </Box>
                <Box style={styles.button} backgroundColor="purple">
                <Button  color={theme.colors.text}title="Enter" onPress={() => {}} />
                </Box>
            </Box>
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
    input: {
        width: '100%',
        height: 40,
        borderRadius: 4,
        marginBottom: 16,
        marginTop: 16,
        
    },
    inputContainer: {
        width: '85%',
        height: '30%',
        borderRadius: 8,
        padding: 16,
        justifyContent: 'center',
    },
    button: {
        width: '100%',
        height: 52,
        borderRadius: 8,
        padding: 8,
    },
});