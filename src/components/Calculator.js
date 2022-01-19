import { useEffect, useState } from "react";
import styled from "styled-components";

const CalculatorWrap = styled.div`
  background-color:lightgray;
  width:350px;
  height:550px;
  padding:20px;
  box-sizing:border-box;
`
const CalculatorResult = styled.div`
  background-color:white;
  width:100%;
  height:100px;
  font-size:55px;
  text-align:right;
  box-sizing:border-box;
  padding:0 10px;
  line-height:100px;
  overflow-x:auto;
  overflow-y:hidden;

`
const CalculatorBtnWrap = styled.div`
  margin-top:10px;
  padding:15px 15px;
  height:350px;
  border-top:3px solid dimgray;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-content:space-between;
`
const CalculatorBtn = styled.div`
  width:80px;
  height:80px;
  border-radius:50%;
  background-color:gray;
  color:white;
  font-size:55px;
  text-align:center;
 
`

export default function Calculator(){

  const [result, setResult] = useState(0);
  // inputFlag : 직전에 클릭한 버튼이 +, =, 숫자(N) 중 어떤 것인지 확인
  const [inputFlag, setInputFlag] = useState("=");
  const [tmpNum, setTmpNum] = useState(0);
  const [tmpSum, setTmpSum] = useState(0);

  function handleOperand(num){
    switch(inputFlag){
      case 'N' : {
        let string = result.toString() + num.toString();
        setTmpNum(Number(string));
        setResult(Number(string));
      } break;
      case '+' : {
        setTmpNum(num);
        setResult(num);
      } break;
      case '=' : {
        setTmpSum(0);
        setTmpNum(num);
        setResult(num);
      } break;
    }
    setInputFlag("N");
  }

  function handleOperator(op){
    let sum = tmpSum+tmpNum;
    switch(op){
      case '=' : {
        setResult(sum);
        setTmpSum(sum);
        setInputFlag('=')
        console.log({tmpSum, tmpNum, result})
      }; break;
      case '+' : {
        if (inputFlag === '='){
          setTmpSum(result);
          
        }
        else{
          setResult(sum);
          setTmpSum(sum);
          console.log({tmpSum, tmpNum, result})
        }
        setInputFlag('+')
      } break; 
    }
  }

  return <CalculatorWrap>
    <CalculatorResult>{result} </CalculatorResult>
    <CalculatorBtnWrap>
      <CalculatorBtn onClick = {(e)=>{handleOperand(1, e)}}>1</CalculatorBtn>
      <CalculatorBtn onClick = {(e)=>{handleOperand(2, e)}}>2</CalculatorBtn>
      <CalculatorBtn onClick = {(e)=>{handleOperand(3, e)}}>3</CalculatorBtn>
      <CalculatorBtn onClick = {(e)=>{handleOperand(4, e)}}>4</CalculatorBtn>
      <CalculatorBtn onClick = {(e)=>{handleOperand(5, e)}}>5</CalculatorBtn>
      <CalculatorBtn onClick = {(e)=>{handleOperand(6, e)}}>6</CalculatorBtn>
      <CalculatorBtn onClick = {(e)=>{handleOperand(7, e)}}>7</CalculatorBtn>
      <CalculatorBtn onClick = {(e)=>{handleOperand(8, e)}}>8</CalculatorBtn>
      <CalculatorBtn onClick = {(e)=>{handleOperand(9, e)}}>9</CalculatorBtn>
      <CalculatorBtn onClick = {(e)=>{handleOperand(0, e)}}>0</CalculatorBtn>
      <CalculatorBtn onClick = {(e) => handleOperator('+', e)}>+</CalculatorBtn>
      <CalculatorBtn onClick = {(e) => handleOperator('=', e)}>=</CalculatorBtn>
    </CalculatorBtnWrap>
  </CalculatorWrap>
}