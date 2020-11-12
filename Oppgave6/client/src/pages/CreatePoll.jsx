import React, { useContext, useState } from 'react';
import { Input, Button, FormControl, Heading } from '@chakra-ui/core';
import { create } from "../utils/pollService";
import { UserContext } from '../contexts/UserProvider';

const CreatePoll = () => {
    const derp = useContext(UserContext);

    const [answerValue, setAnswerValue] = useState(null);
    const [answerValue2, setAnswerValue2] = useState(null);
    const [answerValue3, setAnswerValue3] = useState(null);
    const [answerValue4, setAnswerValue4] = useState(null);
    
    const [questionValue, setQuestionValue] = useState(null);
    
    const handleAnswerChange = (e) => {
        setAnswerValue(e.target.value);
    }
    const handleAnswerChange2 = (e) => {
        setAnswerValue2(e.target.value);
    }
    const handleAnswerChange3 = (e) => {
        setAnswerValue3(e.target.value);
    }
    const handleAnswerChange4 = (e) => {
        setAnswerValue4(e.target.value);
    }

    const handleQuestionChange = (e) => {
        setQuestionValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //const data = "{\"question\": "+`${questionValue},\n`+"\"answer\": " +`${answerValue}}`;

        console.log("DETTE ER STATE FOR USER     : " + derp.state)

        const data = {
            question: questionValue,
            user : derp.state,
            answers: [
                {answer: answerValue},
                {answer: answerValue2},
                {answer: answerValue3}, 
                {answer: answerValue4},
            ],
          };

        const createData = async () => {
            await create(data);
            }
            createData();
    }

    return (
        <div><Heading mb={10} as="h1" fontSize="xl">
        Create Poll
      </Heading>
            <FormControl marginLeft="20px" width="350px">
                    <Input size="md" focusBorderColor="#007b5f" autoFocus={true} placeholder="Question" type="text" onChange={handleQuestionChange} />
                    <Input marginTop="10px" size="md" focusBorderColor="#007b5f" placeholder="Answer" type="text" onChange={handleAnswerChange} />
                    <Input marginTop="10px" size="md" focusBorderColor="#007b5f" placeholder="Answer" type="text" onChange={handleAnswerChange2} />
                    <Input marginTop="10px" size="md" focusBorderColor="#007b5f" placeholder="Answer" type="text" onChange={handleAnswerChange3} />
                    <Input size="md" marginTop="10px" focusBorderColor="#007b5f" placeholder="Answer" type="text" onChange={handleAnswerChange4} />
            </FormControl>
            <Button 
                marginTop="20px" 
                marginLeft="20px" 
                _hover={{
                    bg: "#007b5f",
                    transform: "scale(1.07)"}} 
                onClick={handleSubmit}>Submit</Button>     
    
        </div>
    )
}

export default CreatePoll;
