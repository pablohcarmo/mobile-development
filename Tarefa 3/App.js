import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles/styles';
import titleStyle from "./styles/titleStyle";

export default function App() {
    const [base, setBase] = useState('');
    const [birthDate, setBirthdate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || birthDate;
        setShowPicker(Platform.OS === 'ios');
        setBirthdate(currentDate);
    };

    return (
        <View style={styles.container}>
            <Text style={titleStyle.container}>Digite os dados abaixo:</Text>

            <TextInput
                placeholder="Nome"
                style={inputStyle}
                keyboardType="default"
                onChangeText={(text) => setBase(text)}
            />

            <TextInput
                placeholder="Sobrenome"
                style={inputStyle}
                keyboardType="default"
                onChangeText={(text) => setBase(text)}
            />

            {/* Campo de Data de Nascimento estilizado como TextInput */}
            <TouchableOpacity
                onPress={() => setShowPicker(true)}
                style={inputStyle}
            >
                <Text style={{ textAlign: 'left', color: '#000' }}>
                    {birthDate ? birthDate.toLocaleDateString('pt-BR') : 'Data de nascimento'}
                </Text>
            </TouchableOpacity>

            {showPicker && (
                <DateTimePicker
                    value={birthDate}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}

            <TextInput
                placeholder="Seu e-mail"
                style={inputStyle}
                keyboardType="email-address"
                onChangeText={(text) => setBase(text)}
            />

            <StatusBar style="auto" />
        </View>
    );
}

// Estilo reutilizável para os campos
const inputStyle = {
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 8,
    textAlign: 'left',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
    marginTop: 5,
};
