import React, { useState } from 'react';
import {
  ModalPeopleBtn,
  ModalPeopleBtnWrapper,
  PeopleTitle,
  ModalBack,
  CheckList,
} from '../List';
import { AiOutlineClose } from 'react-icons/ai';

const TYPE_DATA = [
  // { id: 1, type: '전체', name: 'all' },
  { id: 1, type: '게스트하우스', name: '게스트하우스' },
  { id: 2, type: '호텔', name: '호텔' },
];

export default function SelectTheme({
  closeHandler,
  handleFilter,
  getSelectedCategory,
}) {
  const [selectedType, setSelectedType] = useState({
    게스트하우스: false,
    호텔: false,
  });

  const handleChange = e => {
    // 1. event 객체에서 클릭이 일어난 돔이 뭔지 가져오기(guestHouse, Hotel)
    // 2. 1을 가져온 이유는 selectedType에 있는 값을 '거꾸로 뒤집기(이전 값을 가져와서 반대 연산자를 적용)' 위해서
    // 3. setSelectedType에 적절한 값을 넣어줘야지요

    // setSelectedType(prev => ({
    //   ...prev,
    //   [e.target.name]: !prev[e.target.name],
    // }));

    const { name } = e.target;
    setSelectedType(current => ({ ...current, [name]: !current[name] }));
  };

  const handleCheckedAll = () => {
    if (isCheckedAll) {
      setSelectedType({ 게스트하우스: false, 호텔: false });
    } else {
      setSelectedType({ 게스트하우스: true, 호텔: true });
    }
  };

  const isCheckedAll = Object.values(selectedType).every(value => value);

  return (
    <ModalBack>
      <PeopleTitle>
        스테이유형
        <AiOutlineClose onClick={closeHandler} />
      </PeopleTitle>
      <ModalPeopleBtnWrapper>
        <ModalPeopleBtn onClick={() => getSelectedCategory(selectedType)}>
          {/* <ModalPeopleBtn onClick={() => handleFilter(selectedType)}> */}
          적용하기
        </ModalPeopleBtn>
      </ModalPeopleBtnWrapper>
      <CheckList>
        <li>
          <label onChange={handleCheckedAll} name="all">
            <span>전체</span>
            <input
              type="checkbox"
              value="space"
              name="all"
              checked={isCheckedAll}
            />
          </label>
        </li>
        {TYPE_DATA.map((item, idx) => {
          return (
            <li key={idx}>
              <label onChange={handleChange} name={item.name}>
                <span>{item.type}</span>
                <input
                  type="checkbox"
                  value="space"
                  name={item.name}
                  checked={selectedType[item.name]}
                />
              </label>
            </li>
          );
        })}
      </CheckList>
    </ModalBack>
  );
}
// 사용자가 선택한 타입 값 관리. > 불리언 데이터 사용
