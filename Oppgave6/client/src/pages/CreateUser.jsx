import React, { useState } from 'react';
import { Heading, Input, Button, FormControl, FormLabel, FormHelperText } from '@chakra-ui/core';
import { create } from "../utils/userService.js";

const CreateUser = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //const data = "{\"question\": "+`${questionValue},\n`+"\"answer\": " +`${answerValue}}`;

        const data = {
            email: email,
            password: password
          };

        const createData = async () => {
            await create(data);
            }
            createData();

        alert("Din bruker er opprettet");    
    }

    return (
        <div>
            <Heading mb={10} as="h1" fontSize="xl">
        Create User
            </Heading>
            <FormControl marginLeft="20px" width="350px">
                <FormLabel  htmlFor="email">Email address</FormLabel>
                <Input autoFocus={true} type="email" id="email" focusBorderColor="#007b5f" onChange={handleEmail} />
                <FormHelperText id="email-helper-text">
                    Vi skal ikke hacke deg!
                </FormHelperText>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input type="password" id="password" focusBorderColor="#007b5f" onChange={handlePassword} />
            </FormControl>
            <Button 
                marginTop="20px" 
                marginLeft="20px" 
                _hover={{
                    bg: "#007b5f",
                    transform: "scale(1.06)",
                    borderColor: "#000000",}} 
                onClick={handleSubmit}>Submit</Button>             
        </div>
    )
    };

export default CreateUser;