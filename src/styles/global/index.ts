import { createGlobalStyle } from 'styled-components';

export const Colors = createGlobalStyle`
  :root {
    --bg-page: ${(props) => props.theme.colors.beige};
  }
`;

export const Reset = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--bg-page);
  }
  #__next {
    width: 100%;
    height: 100%;
  }

  .container{
    display: grid;
    grid-template-columns: 48% 52%;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transform: translateZ(40px);
    box-shadow:  0 5px 10px rgba(0,0,0,.4);
    @media (max-width: 1024px){
      grid-template-columns: inherit;
      grid-row: 48% 52%;
    }
    .person{
      grid-column: 1;
      border-radius: 10px 0 0 10px;
      box-shadow:  10px 0px 15px rgba(0,0,0,.2);
      z-index: 2;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      @media (max-width: 1024px){
        grid-column: 1;
        grid-row: 1;
        border-radius: 10px 10px 0 0;
        box-shadow:  0 5px 15px rgba(0,0,0,.2);
      }
      button{
        background: none;
        border: none
      }
      .close{
        position: absolute;
        top:1rem;
        left: 1rem;
        transition: all .5s;
        :hover{
          transform: rotate(180deg) scale(110%);
        }
      }
        img{
          border-radius: 50%;
          box-shadow:  0 0 10px rgba(255,255,255,.4);
          transition: all .5s;
          :hover{
            transform: scale(110%);
          }
        }
        .persontext{
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-top: 1rem;
          padding: 0.5rem;
          background-color:rgba(0,0,0,.3);
          border-radius: 15px;
          box-shadow:  0 0 5px rgba(255,255,255,.3);
          width: auto;
          transition: all .5s;
          :hover{
            transform: scale(105%);
          }
            h1{
              font-size: 19px;
              color: #fff;
              font-family: 'Roboto' sans-serif;
              font-weight: 400;
            }
            h2{
              font-size:15px;
              margin-top: 0.2rem;
              color: rgba(255,255,255,.8);
              font-family: 'Roboto' sans-serif;
              font-weight: 400;
            }
            h3{
              font-size:12px;
              margin-top:0.2rem;
              color: rgba(255,255,255,.5);
              font-family: 'Roboto' sans-serif;
              font-weight: 400;
              padding: 0 1rem;
            }
        }
    }
    .about{
      grid-column: 2;
      background-color: var(--bg-page);
      border-radius: 10px;
      z-index: 1;
      display: grid;
      gap: 1.25rem;
      grid-template-areas:
      'birth birth'
      'gender phone'
      'address state'
      'url url';
      padding: 1.5rem;

      @media (max-width: 1024px){
        grid-column: 1;
        grid-row: 2;
      }
      >div{
        display: flex;
        justify-content: space-between;
        h1{
          font-size: 18px;
          font-family: 'Roboto' sans-serif;
          font-weight: 900;
        }
      }
        .content{
          display: grid;
          gap: .25rem;
          height: auto;
          align-content: flex-start;
          span{
            font-size: 15px;
            font-family: 'Roboto' sans-serif;
            font-weight: 500;
            color: rgba(0,0,0,.6);
          }

          h1{
            font-size: 16px;
            font-family: 'Roboto' sans-serif;
            width: 9rem;
            font-weight: 900;
          }
        }

        .birth{
          grid-area: birth;
        }
        .gender{
          grid-area: gender;
        }
        .state{
          grid-area: state;
        }
        .phone{
          grid-area: phone;
        }
        .address{
          grid-area: address;
        }
        .url{
          grid-area: url;
        }

      }
    }
`;
