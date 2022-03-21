import React, { useState } from 'react';

import {
  ModalPeopleBtn,
  ModalPeopleBtnWrapper,
  InputNum,
  CounterButton,
  PeopleCounter,
  PeopleTitle,
  ModalBack,
} from '../List';
import { AiOutlineClose } from 'react-icons/ai';

// const useCounter = () => {
//   const [quantity, setQuantity] = useState({
//     adult: 0,
//     child: 0,
//     baby: 0,
//   });

//   const plusQuantity = name => {
//     setQuantity({
//       ...quantity,
//       [name]: quantity[name] + 1,
//     });
//   };

//   const minusQuantity = name => {
//     setQuantity({
//       ...quantity,
//       [name]: quantity[name] < 1 ? 0 : quantity[name] - 1,
//     });
//   };

//   return { quantity, plusQuantity, minusQuantity };
// };

export default function SelectPeople({
  closeHandler,
  handleFilter,
  getSelectedPeople,
  quantity,
  setQuantity,
}) {
  // const { quantity, plusQuantity, minusQuantity } = useCounter();
  // const [quantity, setQuantity] = useState({
  //   adult: 0,
  //   child: 0,
  //   baby: 0,
  // });

  const plusQuantity = name => {
    setQuantity({
      ...quantity,
      [name]: quantity[name] + 1,
    });
  };

  const minusQuantity = name => {
    setQuantity({
      ...quantity,
      [name]: quantity[name] < 1 ? 0 : quantity[name] - 1,
    });
  };

  const COUNTER_DATA = [
    { id: 1, type: '성인', name: 'adult' },
    { id: 2, type: '아동', age: '24개월~12세', name: 'child' },
    { id: 3, type: '영아', age: '24개월 미만', name: 'baby' },
  ];

  return (
    <ModalBack>
      <PeopleTitle>
        인원
        <AiOutlineClose onClick={closeHandler} />
      </PeopleTitle>
      <div>
        {COUNTER_DATA &&
          COUNTER_DATA.map((item, idx) => {
            return (
              <PeopleCounter key={idx}>
                <span>
                  {item.type}
                  <p>{item.age}</p>
                </span>
                <div>
                  <CounterButton onClick={() => minusQuantity(item.name)}>
                    -
                  </CounterButton>
                  <InputNum>
                    <input type="number" value={quantity[item.name]} />
                    <span>명</span>
                  </InputNum>
                  <CounterButton onClick={() => plusQuantity(item.name)}>
                    +
                  </CounterButton>
                </div>
              </PeopleCounter>
            );
          })}
      </div>
      <ModalPeopleBtnWrapper>
        <ModalPeopleBtn onClick={() => getSelectedPeople()}>
          {/* <ModalPeopleBtn onClick={() => handleFilter(quantity)}> */}
          적용하기
        </ModalPeopleBtn>
      </ModalPeopleBtnWrapper>
    </ModalBack>
  );
}
