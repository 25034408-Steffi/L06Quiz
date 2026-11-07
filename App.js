import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';
import { FontAwesome6 } from "@expo/vector-icons";
import QuestionCard from "./components/QuestionCard";
import {checkAnswersSubmit, gradeScore} from "./utils/quizUtils";


const App = () => {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const correctAnswers = {
      "q1": "Gengar",
      "q2": "Ground/Flying",
      "q3": "Generation 7 (Sun/Moon/USUM)"
  }

  function handleAnswerChange(questionId, currentAnswer) {
      setAnswers({
          ...answers,
          [questionId]: currentAnswer
      })
  }

  function handleSubmit() {
      const result = checkAnswersSubmit(correctAnswers, answers)
      setScore(result);
      Alert.alert(`Quiz Results: You scored ${result}!`, `${gradeScore(result)}`);
  }

  return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text></Text>

         <View style={styles.header}>
             <FontAwesome6 name="circle-question" size={25} color="#7C0D0E"/>
             <Text style={styles.headerText}>
                 Pokemon Quiz
             </Text>
         </View>

        <QuestionCard
            questionId="q1"
            question="What Pokemon is this?"
            picture={{
              src: { uri: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png" },
              alt: "Dark purple ghost/poison type Pokemon from Generation 1"
            }}
            options={[
                "Mismagius",
                "Gengar",
                "Barraskewda",
                "Dhelmise"
            ]}
            handleAnswerChange={handleAnswerChange}
            hint="This pokemon is the final evolution of Gastly"
        />

        <QuestionCard
            questionId="q2"
            question="What is this Pokemon's typing?"
            picture={{
              src: { uri: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/472.png" },
              alt: "Image of Gliscor"
            }}
            options={[
                "Dark/Ground",
                "Poison/Flying",
                "Poison/Dark",
                "Ground/Flying"
            ]}
            handleAnswerChange={handleAnswerChange}
            hint="Does purple always have to mean it's bad or evil?"
        />

          <QuestionCard
              questionId="q3"
              question="Which Generation was this Pokemon introduced?"
              picture={{
                  src: { uri: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/801.png" },
                  alt: "Image of Magearna"
              }}
              options={[
                  "Generation 3 (Ruby/Sapphire/Emerald)",
                  "Generation 7 (Sun/Moon/USUM)",
                  "Generation 5 (Black/White)",
                  "Generation 1 (Red/Blue/Green)"
              ]}
              handleAnswerChange={handleAnswerChange}
              hint="The game it belongs to was released for the 3DS"
          />

          <Button title="SUBMIT"
                onPress={handleSubmit}
          />
      </ScrollView>
  )
};


const styles = StyleSheet.create({
  contentContainer: {
      padding: 20,
    backgroundColor: '#fff'
  },
  content: {
      alignItems: 'center',
      justifyContent: 'center',
  },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold'
  },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    }

});

export default App;