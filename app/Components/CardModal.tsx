import React, { useState } from 'react';
import { Modal, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import Box from './Restyle/Box';
import Text from './Restyle/Text';
import { CardCreationData } from '../interfaces';

interface AddExpenseModalProps {
    visible: boolean;
    onClose: () => void;
    onSubmit: (data: CardCreationData) => void;
    people: string[];
    title: string;
    defaultData?: CardCreationData;
}

export default function CardModal({ visible, onClose, onSubmit, people, title, defaultData }: AddExpenseModalProps) {
    const [description,setDescription] = useState(defaultData?.description || '');
    const [amount, setAmount] = useState(defaultData?.amount?.toString() || '');
    const [type, setType] = useState<'payment' | 'expense'>(defaultData?.type || 'expense');
    const [selectedPerson, setSelectedPerson] = useState<string | null>(defaultData?.recipient || null);

    const handleSubmit = () => {
        if (!description || !amount || !selectedPerson) {
            alert('Please fill in all fields');
            return;
        }

        onSubmit({
            description: description,
            amount: parseFloat(amount),
            type,
            recipient: selectedPerson,
        });
            
        setDescription('');
        setAmount('');
        setType('expense');
        setSelectedPerson(null);
        onClose();
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <Box style={styles.overlay}>
                <Box style={styles.modalContainer} backgroundColor="card">                    
                    <Box style={styles.header}>
                        <Text variant="heading" style={styles.title}>{title}</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.closeButton}>✕</Text>
                        </TouchableOpacity>
                    </Box>
                    <Box style={styles.form}>
                        <Box style={styles.inputGroup}>
                            <Text>Description</Text>
                            <TextInput
                                style={styles.input}
                                value={ description}
                                onChangeText={setDescription}
                                placeholder="e.g., Pizza last night"
                                placeholderTextColor="#999"
                            />
                        </Box>
                        <Box style={styles.inputGroup}>
                            <Text >Amount</Text>
                            <TextInput
                                style={styles.input}
                                value={amount}
                                onChangeText={setAmount}
                                placeholder="0.00"
                                keyboardType="decimal-pad"
                                placeholderTextColor="#999"
                            />
                        </Box>
                        <Box style={styles.inputGroup}>
                            <Text >Type</Text>
                            <Box style={styles.typeSelector}>
                                <TouchableOpacity
                                    style={styles.typeButtonContainer}
                                    onPress={() => setType('expense')}
                                >
                                    <Box 
                                        style={styles.typeButton}
                                        backgroundColor={type === 'expense' ? 'purple' : 'card'}
                                        borderColor="border"
                                    >
                                        <Text style={styles.typeButtonText}>
                                            Expense
                                        </Text>
                                    </Box>
                                </TouchableOpacity>
                                
                                <TouchableOpacity
                                    style={styles.typeButtonContainer}
                                    onPress={() => setType('payment')}
                                >
                                    <Box 
                                        style={styles.typeButton}
                                        backgroundColor={type === 'payment' ? 'purple' : 'card'}
                                        borderColor="border"
                                    >
                                        <Text  style={styles.typeButtonText}>
                                            Payment
                                        </Text>
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                        </Box>
                        <Box style={styles.inputGroup}>
                            <Text >Select Person</Text>
                            <ScrollView 
                                horizontal 
                                showsHorizontalScrollIndicator={false}
                                style={styles.peopleScroll}
                            >
                                <Box style={styles.peopleContainer}>
                                    {people?.length > 0 && people.map((person, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => setSelectedPerson(person)}
                                        >
                                            <Box
                                                style={styles.personBox}
                                                backgroundColor={selectedPerson === person ? 'purple' : 'card'}
                                                borderColor="border"
                                            >
                                                <Text >
                                                    {person}
                                                </Text>
                                            </Box>
                                        </TouchableOpacity>
                                    ))}
                                </Box>
                            </ScrollView>
                        </Box>
                    </Box>

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={handleSubmit}
                        activeOpacity={0.8}
                    >
                        <Box backgroundColor="purple" style={styles.submitButtonInner}>
                            <Text style={styles.submitButtonText}>Add Item</Text>
                        </Box>
                    </TouchableOpacity>
                </Box>
            </Box>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '90%',
        maxWidth: 400,
        borderRadius: 16,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    closeButton: {
        fontSize: 28,
    },
    form: {
        gap: 20,
    },
    inputGroup: {
        gap: 8,
    },
    input: {
        borderWidth: 1,
        backgroundColor: 'black',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: 'white',
    },
    typeSelector: {
        flexDirection: 'row',
        gap: 12,
    },
    typeButtonContainer: {
        flex: 1,
    },
    typeButton: {
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        alignItems: 'center',
    },
    typeButtonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    peopleScroll: {
        flexGrow: 0,
    },
    peopleContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    personBox: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 20,
        borderWidth: 1,
    },
    submitButton: {
        marginTop: 24,
    },
    submitButtonInner: {
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    submitButtonText: {
        fontSize: 18,
        fontWeight: '600',
    },
});