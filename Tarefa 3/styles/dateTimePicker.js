import React, { useState} from "react";
import {View, Button, Platform, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DataDeNascimento() {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    }

    return (
        <View style={{ marginVertical: 10 }}>
            <Button title="Data de Nascimento" onPress={() => setShow(true)}/>
            <Text style={{ marginTop: 10, textAlign: 'center' }}>
                {date.toLocaleDateString()}
            </Text>
            {show && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
}