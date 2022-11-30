import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import AnswerSection from '../answerSection'
import Button from '../../../components/buttonComponent'

const QuesSection = () =>{  
    const [modalIsOpen, setIsOpen] = useState(false)
  

  function closeModal() {
    setIsOpen(false)
  }
    const Container = styled.div`
    background-color:grey;
    margin: 2.5rem;
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    padding:0.4rem;
    border: 1px solid;
    `
    const QuesWrapper = styled.div`
    `
    const Wrapper = styled.div`
    background-color:white;
    `
    const Question = styled.div`
    background-color:lightgrey;
    height:4rem;
    overflow-y :scroll;   
    `
    const ButtonWrapper = styled.div`
    padding:0.8rem;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:end;
    `
    

    const questions = [{
        id:1,
        ques: "What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?  "
    },
    {
        id:2,
        ques: "What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it? "
    },{
        id:3,
        ques: "What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it? "
    }] 
    return(
        <Container>
        {questions.map((ques)=>{
            return(
                <Wrapper key={ques.id}>
                    <QuesWrapper>
                    <Question> {ques.ques}</Question>
                    <ButtonWrapper>
                    <Button  onClick={()=>{}} name="View Answers" />
                    <Modal isOpen={modalIsOpen} contentLabel="Example Modal">
                   <AnswerSection close={closeModal} />
      </Modal> 
                    </ButtonWrapper>        
                    </QuesWrapper>            
                </Wrapper>
            )
        })} 

        </Container>
    )
}
export default QuesSection