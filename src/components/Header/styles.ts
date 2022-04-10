import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  padding: 0 2rem;
  .company{
  display: flex;
  align-items: center;
    img{
    border-radius:25%;
    width: 50px;
    height: 50px;
  }
    h1{
      padding: 0.5rem;
      font-size: 18px;
      font-family: 'Roboto', sans-serif;
      font-weight: 900;
      color: #000140;
    }
}

.perfil{
    width:60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid rgb(161,196,66);
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 90%;
      background-size: cover;
      border-radius: 50%;
      background-position: top center;
    }
}
  
`;
