import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';



const QuestionCard = ({ questionId, handleAnswerChange, question, hint, picture, options, }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={picture.src}
                       alt={picture.alt}
                       style={{ width: 200, height: 200 }}/>
                <Text>
                    {question}
                </Text>
            </View>
            <Picker
                onValueChange={(value) => handleAnswerChange(questionId, value)}
            >
                <Picker.Item
                    label="Select an item..."
                    value=""
                    enabled={false}
                />
                {options.map(option => (
                <Picker.Item
                    key={option}
                    label={option}
                    value={option}
                />
                ))
            }
            </Picker>
            <TouchableOpacity
                style={styles.button}
                onPress={() => ToastAndroid.show(hint, ToastAndroid.LONG)}
            >
                <Text>Hint</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create( {
    container: {
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 5,
        borderStyle: 'solid',
        marginVertical: 10,
        padding: 10,
    },
    innerContainer: {
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FFCE1B',
        padding: 10
    }
})
export default QuestionCard;