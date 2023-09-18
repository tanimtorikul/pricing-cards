import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({ feature }) => {
  return (<div className="flex items-center gap-2 text-lg">
  <AiFillCheckCircle className='text-green-500' />
  <p className="text-gray-700">{feature}</p>
</div>);

  
};

export default Feature;
