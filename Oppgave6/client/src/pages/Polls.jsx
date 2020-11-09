import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Icon } from '@chakra-ui/core';
import { list } from '../utils/pollService';

const Polls = () => {
  const [polls, setPolls] = useState();
  const [error, setError] = useState(null);

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

  const handleChecked = (e) => {
      chosenAnswers.map((ans) => {
        if(ans === e.target.id) {
          removeAnswer(e.target.id);
          return;
        }}, 
      setChosenAnswers([e.target.id, ...chosenAnswers])) 
      
  }
  
  const removeAnswer = (toRemove) => {
    const removed = chosenAnswers.filter((a) => a !== toRemove);
    setChosenAnswers([...removed]);
  }

  //Denne må også nullstille checkboxene eller gjøre at de ikke kan checkes pånytt
  const handleSubmitAnswer = (e) => {
    console.log("Disse svarene skal være de som er krysset av nå");
    console.log(chosenAnswers);
    setChosenAnswers([]);
  }

  return (
    <section>
      <Heading mb={2} as="h1" size="md">
        Polls page
      </Heading>
      {error && <p>{error}</p>}
      <Flex direction={"column"}>
        {polls &&
          polls.map((poll) => (
            <Box p="6" as="article" key={poll.id}>
              <Heading mb={2} as="h2" size="sm">
                {poll.question}
              </Heading>
              <Text fontSize="lg" mb={2}>
                {poll.answers.map((answer) => (
                  <label key={answer._id}>
                    {answer.answer}
                    <input id={answer.answer} type="checkbox" name="checkfield"  onChange={handleChecked}/>
                    <br></br>
                  </label>
                ))
                }

              </Text>
              <Text fontSize="lg" mb={2}>
                <Icon name="time" mr={2} />
                {new Date(poll.createdAt).toDateString()}
              </Text>
              <Text fontSize="lg">By: { }</Text>
              <button onClick={handleSubmitAnswer}>VIS ALLE ANSWERS</button>
            </Box>
          ))}
      
      </Flex>
      </section>
  );
};

export default Polls;
