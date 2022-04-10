import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
input{
    margin-top: 1rem;
    width: 100%;
    height: 2.5rem;
    border: 0.15rem solid rgba(178,179,180, 0.5);
    border-radius: 5px;
    padding: 0 1rem;
    font-size: 15px;
    font-family: 'Roboto' sans-serif;
    font-weight: 400;
    color: rgba(99, 99,99);
  }

  input:focus{
    outline: 0;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
  }

  .form{
    width:90%;
    display: flex;
    position: relative;
    justify-content: center;
    @media (min-width: 1024px){
      width:40%
    }
  }


  .table{
    margin-top: 2rem;
    width: 90%;
    height: 400px;
    @media (min-width:1024px){
      width: 40%;
    }
  }

`;
