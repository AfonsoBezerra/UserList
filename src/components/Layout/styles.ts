import { ReloadIcon } from '@styles/components/Icons';
import styled from 'styled-components';

export const MainStyle = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2{
    margin-top: 4rem;
    font-size: 15px;
    text-align: center;
    width: 90%;
    font-family: 'Roboto' sans-serif;
    font-weight: 500;
    color:rgba(99, 99,99);

    @media (min-width:1024px){
      width: 40%;
    }

  }
  .loading{
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s;
    background:none;
    border: none;
    >div{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
        h3{
          font-size: 1.2rem;
          font-family: 'Roboto' sans-serif;
          font-weight: 500;
          color: rgba(99, 99,99, 0.6);
          transition: all .5s;
        }
    }

    ${ReloadIcon}{
        transform: rotate(180deg);
        color: rgba(99, 99,99, 0.6);
      }

    &:hover{
      transform: scale(110%);

      h3{
        color: rgba(99, 99,99)
      }

      ${ReloadIcon}{
        transform: rotate(540deg);
        color: rgba(99, 99,99);
      }
    }

  }

  `;
