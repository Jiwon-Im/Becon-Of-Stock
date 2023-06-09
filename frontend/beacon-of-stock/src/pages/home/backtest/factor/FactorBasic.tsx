import React, { useState } from 'react';
import FactorDetail from './FactorDetail';

import dropdownImg from '../../../../assets/img/down-arrow.png';
import question from '../../../../assets/img/question.png';

interface Props {
  id: number;
  title: string;
  description: string;
  indicators: {
    id: number;
    title: string;
    count: number;
    description: string;
  }[];
}

const BasicFactor = (props: Props) => {
  const [showIndicator, setShowIndicator] = useState<boolean>(true);
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const showIndicatorHandler = () => {
    setShowIndicator(!showIndicator);
  };

  const mouseEnterHandler = () => {
    setShowDescription(true);
  };

  const mouseLeaveHandler = () => {
    setShowDescription(false);
  };

  return (
    <React.Fragment>
      <div className='flex items-center mt-[5%]'>
        <img
          src={dropdownImg}
          alt='dropdownImg'
          className={
            showIndicator
              ? 'w-6 mx-[5%] cursor-pointer origin-center rotate-180 transition duration-300 ease-out hover:ease-in'
              : 'w-6 mx-[5%] cursor-pointer transition duration-300 ease-out hover:ease-in'
          }
          onClick={showIndicatorHandler}
        />
        <div className='text-lg'>{props.title}</div>
        <img
          src={question}
          alt='question'
          className='w-6 mx-[5%]'
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        />
      </div>
      {showDescription && (
        <div className='flex justify-center'>
          <p className='text-sm absolute border rounded-lg border-[#131313] bg-[#FEFEFE] w-[90%] px-[3%] py-[2%]'>
            {props.description}
          </p>
        </div>
      )}
      <ul className={showIndicator ? '' : 'hidden'}>
        {props.indicators.map((indicator) => {
          return (
            <li key={indicator.id}>
              <FactorDetail
                id={indicator.id}
                title={indicator.title}
                count={indicator.count}
                description={indicator.description}
              />
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default BasicFactor;
