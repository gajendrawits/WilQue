import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '../../../components/buttonComponent'
import Like from '../../../assets/svg/likeButton'
import DisLike from '../../../assets/svg/dislikeButton'
import Star from '../../../assets/svg/star'
import MyComponent from 'components/RichText';

const AnswerSection = (props:any) =>{
    const Container = styled.div `
    display:grid;
    grid-template-column: 20% 20% 20%;
    `
    const AnswersWrapper = styled.div`
    background: grey;
    border: 1px solid red;
       `
    const Answer = styled.div`
    background: white;
    display:flex;
    justify-content:center;
    align-items:center;
    height:200px;
    margin: 4rem;
    `
   
    const PopupContainer = styled.div`
    margin: 2.5rem;
    .quill{
        margin-bottom:1rem;
    }
    .ql-container{
        height:150px;
    }
    `
    const Div = styled.div``


    return(   
        <>
        <Button  onClick={ props.close} name="X"/>
        <Container>
            <AnswersWrapper>
                <Answer>
                    <>Your Answer</>
                </Answer>
            </AnswersWrapper>
        <div>    
            <DisLike />
        </div>
        <div>    
            <Like />
        </div>
        <div>
            <Star />
        </div>
       
        </Container> 
   
           <PopupContainer>

           <MyComponent/>
           <Button name="Post Answer" />
           </PopupContainer>
          
                
   
        
   
        </>  
    )
}

export default AnswerSection