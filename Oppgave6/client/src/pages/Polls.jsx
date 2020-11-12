import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Icon, Button, Checkbox } from '@chakra-ui/core';
import { list, updatePoll } from '../utils/pollService';

const Polls = () => {
  const [polls, setPolls] = useState();
  const [error, setError] = useState(null);
  //const [disabled, setDisabled] = useState(false);

  const [chosenAnswers, setChosenAnswers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        console.log(data);
        setPolls(data);
      }
    };
    fetchData();
  }, []);

  const handleChecked = async (answer) => {
    console.log("HANDLE CHECKED ANSWER: " + JSON.stringify(answer))
    chosenAnswers.map((existingAnswer) => {
       if(existingAnswer === answer) {
        removeAnswer(answer);
        return;
        }}, 
        setChosenAnswers([answer, ...chosenAnswers]))
        }
  
  const removeAnswer = async (toRemove) => {
    console.log("ANSWER THAT WAS UNCHECKED: " + JSON.stringify(toRemove))
    const removed = chosenAnswers.filter((a) => a !== toRemove);
    setChosenAnswers([...removed]);
    console.log("AFTER DELETION: " + JSON.stringify(chosenAnswers))
  }

  //Denne må også nullstille checkboxene eller gjøre at de ikke kan checkes pånytt
  const handleSubmitAnswer = async (e) => {
    console.log("SIZE OF ANSWERARRAY: " + chosenAnswers.length)
    console.log("HANDLE SUBMIT ANSWER: " + JSON.stringify(chosenAnswers))
 
    chosenAnswers.map((ans) => {
    updatePoll(e.target.id, ans)
  })
  chosenAnswers.map((ans) => removeAnswer(ans));
  //setDisabled(true); 
  alert(`Votes for ${e.target.name} has been submitted`);
  };

  return (
    <section>
      <Heading mb={10} as="h1" fontSize="xl">
        Available Polls
      </Heading>
      {error && <p>{error}</p>}
      <Flex direction={"column"}>
        {polls &&
          polls.map((poll) => (
            <Box p="6" as="article" key={poll._id}>
              <Heading mb={2} as="h2" size="md" color="#007b5f">
                {poll.question}
              </Heading>
              <div fontSize="md" mb={2}>
              {poll.answers.map((answer) => {
                  if(answer.answer !== null){
                    return(
                      <Flex key={answer._id}>
                      <Text  width="200px"><Icon name="chevron-right" mr={2} />{answer.answer}</Text>
                      <Checkbox name={"checkbox"} variantColor="gray" onChange={() => handleChecked(answer)}/>
                      </Flex>
                    )
                  }})
                }
                </div>
              <Text fontSize="sm" marginTop="10px" mb={2}>
                {new Date(poll.createdAt).toDateString()}
              </Text>
              <Text  width="200px"><Icon name="email" mr={2} />{poll.user ? poll.user : "Anonymous" }</Text>
              <Button marginTop="20px" 
                _hover={{
                    bg: "#007b5f",
                    transform: "scale(1.06)",
                    borderColor: "#000000",}} 
                onClick={handleSubmitAnswer} id={poll._id} name={poll.question} ><Icon name="check" mr={2} />Submit Votes</Button>
            </Box>
          ))}
      
      </Flex>
      </section>
  );
};

export default Polls;
