# STAYFOLIO Project

원하는 조건 설정 후 항공권 예약이 가능한 여행 플랫폼 프로젝트 입니다.

21.01.10 - 22.01.20

[구현영상](http://stay-memory.s3-website.ap-northeast-2.amazonaws.com/) | [Github](https://github.com/Seokho0120/28-2nd-StayMemory-frontend.git) | [회고](https://velog.io/@leesegho/STAYFOLIO-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8) | [Trello](https://trello.com/b/u2X2xFAH/stay)

## 인원

프론트엔드 3명 | 백엔드 3명

## Tech Stack

JavaScript(ES6) | React | React Router | Styled-component | Material-ui


## What did I do

### 조건부 검색 페이지 담당

- 검색 버튼을 통해 원하는 조건(인원, 가격, 숙소 종류)을 설정하면, api가 호출 되는 동시에 전달 받은 데이터가 화면에 렌더링 됩니다.

### Query String 및 데이터를 활용하여 조건에 맞는 호텔 리스트 시각화

- Query string 을 작성하며 블로커를 만나, 부족함을 채찍질하며 지치기도 했지만 여러 코드를 살펴보며 결국 해결해냈습니다.
- 스테이폴리오의 구조와 동일하게, ‘적용하기 버튼’ 클릭 시 query string을 붙여주고 query string이 변경되면 API를 호출했습니다.
- 하지만 이렇게 ‘적용하기 버튼’ 으로 API호출을 하면 ‘SEARCH 버튼’의 존재 이유가 불분명하여 좋지 않은 UI라고 판단했습니다.

### Refactoring [(자세한 내용 보러가기)](https://velog.io/@leesegho/%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%8F%B4%EB%A6%AC%EC%98%A4-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81ing)

- ‘적용하기 버튼’을 클릭 시 정보를 저장 후 Drop-down이 닫히며, ‘SEARCH 버튼’을 클릭 시 API 호출하도록 리팩토링 진행 중입니다.

### 항공권 검색 기능 Drop-down (인원, 가격, 숙소 종류)

- 고유한 ID값을 각각의 Drop-down에 설정 했습니다. 버튼의 ID와 Drop-down의 ID값이 동일하면 Drop-down이 렌더링 됩니다.

### 순수 CSS(Input Range)로 가격슬라이드 구현 [(자세한 내용 보러가기)](https://velog.io/@leesegho/%EB%A7%88%EA%B0%90-%EC%A0%84%EB%82%A0-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EA%B8%B0%EB%8A%A5-%EC%82%AD%EC%A0%9C)

- 버전의 의존성을 고려하지 않아 merge 과정에서 문제가 생겼습니다. 리액트의 버전 충돌로 인해 리액트 버전을 다운그레이드 했지만 MUI Slider 컴포넌트가 리액트 16버전을 지원하지 않았기 때문에 순수 CSS를 사용해 직접 구현했습니다.
- 라이브러리는 언제나 신중하게 사용해야하고, 버전의 의존성을 항상 고려해야한다는 것을 배웠습니다.

### Styled Components를 학습하며 CSS-in-JS 개념을 이해하고 작성

- 컴포넌트 관리와 스타일 적용을 동시에 가능하기 때문에 편리해서 사용하게 되었습니다.

### 스탠드업 미팅 및 주간 회고 리드 [(자세한 내용 보러가기)](https://velog.io/@leesegho/STAYFOLIO-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8)

- 틀을 기획하여 (블로킹 포인트, 어제 작업한 내용, 오늘 작업할 내용, 기타 공유 사항) 효율적인 미팅과 원활한 팀워크를 이끌어냈습니다.


## 구현영상

- 메인페이지에서 FIND STAY 를 클릭하면 조건부 검색 페이지로 이동 됩니다.
- 인원, 가격범위, 스테이 유형에서 조건을 선택 후 적용하기 버튼을 클릭 하면 조건에 맞는 숙소가 화면에 구현됩니다.

![스테이폴리오 전체](https://user-images.githubusercontent.com/93597794/159905745-364d5632-4eb6-4c3a-a65b-33d187a53904.gif)
