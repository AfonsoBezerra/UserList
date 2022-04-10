import styled from 'styled-components';
import { PersonSearch } from '@styled-icons/material-outlined/PersonSearch';
import { Reload } from '@styled-icons/open-iconic/Reload';
import { CloseCircle } from '@styled-icons/ionicons-sharp/CloseCircle';

export const SearchIcon = styled(PersonSearch)`
  width: 30px;
  color: rgba(178,179,180);
  position: absolute;
  bottom: 4px;
  right: 4px;
  transition: all .5s;
  :hover{
    transform: scale(105%);
    color: rgba(146,146,147);
    cursor: pointer;
  }
`;

export const ReloadIcon = styled(Reload)`
  width: 1.5rem;
  transition: all 0.5s;
`;

export const CloseIcon = styled(CloseCircle)`
  width: 1.5rem;
  color: white;
`;
