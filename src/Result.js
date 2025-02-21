import React from "react";

function result({secretNum, term}){
   
    let result;

    console.log(term);
    if(term){

        if(term > secretNum){

            result = 'Higher';
        } else if(term < secretNum){
    
            result = 'Lower';
        } else if(term == secretNum){
            result = "Yes! correct";
        } else {
    
            result = "Please enter a valid input";
        }

    }
    

    return <h3>You guessed: {result}</h3>
}

export default result;