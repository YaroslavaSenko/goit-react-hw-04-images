import { InfinitySpin  } from 'react-loader-spinner';
import {Backdrop} from './Loader.styled';


export const Loader = () => {
  return (
    <Backdrop>
    <InfinitySpin 
    width='200'
  color="#010a00"/>
  </Backdrop>
)
};

