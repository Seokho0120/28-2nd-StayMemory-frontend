# STAYFOLIO Project

스테이폴리오를 모티브로 한 팀 프로젝트

21.01.10 - 22.01.20

[구현영상](http://stay-memory.s3-website.ap-northeast-2.amazonaws.com/) | [Github](https://github.com/Seokho0120/28-2nd-StayMemory-frontend.git) | [회고](https://velog.io/@leesegho/STAYFOLIO-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8) | [Trello](https://trello.com/b/u2X2xFAH/stay)

## 인원

프론트엔드 3명 | 백엔드 3명

## Tech Stack

JavaScript(ES6) | React | React Router | Styled-component | Recoil | Material-ui

## Overview

제가 제안했던 사이트인 [**스테이폴리오**](https://www.stayfolio.com/)가 많은 투표를 받아 감사하게도 프로젝트를 진행할 수 있게 되었습니다. 스테이폴리오는 수많은 여행 플랫폼 중 저의 시선을 끄는 **매력 포인트**가 많았습니다.

첫번째로 정말 까다로운 조건으로 숙소를 큐레이팅하고 있다는게 한눈에 보였고, 이는 **고객의 니즈를 심도있게 고민**한다는 의미라고 생각했습니다.

두번째로 **감성적인 UI와 디자인**, **다양한 조건부 필터링**을 구현해보고 싶었고, 더불어 성장 가능성이 높은 플랫폼이라고 판단되었습니다.

## What did I do

✔️ **조건부 필터링 검색 페이지** 구현

✔️ Query String 및 데이터를 활용하여 조건에 맞는 **호텔 리스트 시각화**

*→ 실제 스테이폴리오 웹사이트의 구조와 동일하게, “적용하기 버튼”을 클릭 시 query string을 붙여주고 query string이 변경되면 useEffect에서 API호출했습니다. 하지만 이러한 구조를 유지한다면 **“SEARCH 버튼“의 존재 이유가 불분명하여 좋지 않은 UI라고 판단**했습니다. 이를 해결하기 위해 “적용하기 버튼“을 클릭 시 모달창만 닫아주고, **“SEARCH 버튼”을 클릭 시 API호출하도록 [리팩토링](https://github.com/Seokho0120/28-2nd-StayMemory-frontend/tree/master/src/pages/List) 중입니다.***

✔️ **순수 CSS(Input Range)** 로 가격슬라이드 구현 [(React 버전 문제로 MUI 라이브러리 삭제)](https://www.notion.so/STAYFOLIO-Project-38df71f252ce4ef7897cf0840b227cef)

✔️ 조건 메뉴 **Drop-down** 구현

✔️ **Styled Components를 학습**하며 CSS-in-JS 개념을 이해하고 작성

## 구현영상

조건 검색 페이지에서 제가 구현한 기능을 전부 확인할 수 있는 영상입니다.

![스테이폴리오 전체](https://user-images.githubusercontent.com/93597794/159905745-364d5632-4eb6-4c3a-a65b-33d187a53904.gif)
