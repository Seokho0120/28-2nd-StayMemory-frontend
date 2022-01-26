import React, { useEffect, useState } from 'react';
import {
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
  createSearchParams,
} from 'react-router-dom';
import styled from 'styled-components';
import PageBtn from '../../components/PageBtn';

function MyPage() {
  const [hotelData, setHotelData] = useState([]);
  const [welcomeData, setWelcomeData] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = location.pathname;
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const LOGIN_TOKEN = sessionStorage.getItem('loginToken');

  const page = {
    W: 'wishlists',
    R: 'reservations',
  };

  const filter = {
    R: 'reservation',
    H: 'history',
  };

  function handleQueryString() {
    if (params.page === page.R) {
      return `${params.page}?filter=${searchParams.get('filter')}`;
    } else {
      return `${params.page}`;
    }
  }
  function handleFilter(filter) {
    setSearchParams(createSearchParams({ filter: filter }));
  }

  useEffect(() => {
    fetch(
      `http://ec2-3-36-124-170.ap-northeast-2.compute.amazonaws.com/${handleQueryString()}`,
      {
        headers: {
          Authorization: LOGIN_TOKEN,
        },
      }
    )
      .then(res => res.json())
      // .then(res => console.log(res));
      .then(res => {
        setHotelData(res.data);
      });
  }, [queryString, location.pathname]);

  useEffect(() => {
    console.log(hotelData);
  }, [hotelData]);

  const updateOffset = btnidx => {
    const limit = 2;
    const offset = btnidx * limit;
    const queryString = `?limit=${limit}&offset=${offset}`;
    navigate(queryString);
  };

  useEffect(() => {
    fetch('http://192.168.243.37:8082/users/info', {
      method: 'GET',
      headers: {
        Authorization: LOGIN_TOKEN,
      },
    })
      .then(res => res.json())
      .then(res => setWelcomeData(res));
  }, []);

  const keyObj = {
    id: 'id' ?? 'hotelId',
    name: 'hotelNameKor' ?? 'hotelName',
  };

  return (
    <Container>
      <TitleContainer>
        <EngTitle>MY PAGE</EngTitle>
        <KorTitle>마이 페이지</KorTitle>
      </TitleContainer>
      {welcomeData && (
        <WelcomeWrap>
          <Welcome>{welcomeData.data.nickname}님 반가워요!</Welcome>
          <TravelCount>
            스테이 메모리와 함께 {welcomeData.data.travelNumber}번의 여행을
            했어요.
          </TravelCount>
          <ClientInfo>
            <ClientEmail>{welcomeData.data.email}</ClientEmail>
            <ClientEdit>회원 정보 수정</ClientEdit>
          </ClientInfo>
        </WelcomeWrap>
      )}
      <MainContainer>
        <SideMenu>
          <ul>
            <SideMenuList>My Stay</SideMenuList>
            <SideMenuList
              onClick={() => navigate(`/mypage/${page.R}?filter=${filter.R}`)}
            >
              예약 정보
            </SideMenuList>
            <SideMenuList>취소 내역</SideMenuList>
            <SideMenuList>프리미엄 숙박권</SideMenuList>
            <SideMenuList>이용권</SideMenuList>
            <SideMenuList onClick={() => navigate(`/mypage/${page.W}`)}>
              관심 스테이
            </SideMenuList>
          </ul>
          <ul>
            <SideMenuList>내 계정</SideMenuList>
            <SideMenuList>회원 정보 수정</SideMenuList>
            <SideMenuList>1:1 문의</SideMenuList>
            <SideMenuList>FAQ</SideMenuList>
          </ul>
        </SideMenu>
        <MyPageContent>
          {params.page === page.R && (
            <ButtonsWrapper>
              <ReservationInfo onClick={() => handleFilter(filter.R)}>
                예약 정보
              </ReservationInfo>
              <History onClick={() => handleFilter(filter.H)}>
                다녀온 스테이
              </History>
            </ButtonsWrapper>
          )}
          <HotelInfo>
            {hotelData &&
              hotelData.map(hotelEle => {
                return (
                  <HotelWrap key={hotelEle.id || hotelEle.hotelId}>
                    <HotelInfoText>
                      <HotelNameKor>
                        {hotelEle.hotelNameKor || hotelEle.hotelName}
                      </HotelNameKor>
                      <HotelNameEng>PARADISE HOTEL</HotelNameEng>
                      <HotelNormalInfoWrap>
                        <HotelNormalInfo>{hotelEle.address}</HotelNormalInfo>
                        <HotelNormalInfo>
                          최소{hotelEle.baseNum}명/최대{hotelEle.maxNum}명
                        </HotelNormalInfo>
                        <HotelNormalInfo>{hotelEle.price}</HotelNormalInfo>
                      </HotelNormalInfoWrap>

                      <ReserveBtn>예약하기</ReserveBtn>
                    </HotelInfoText>
                    <div>
                      <HotelImg src={hotelEle.img} alt="호텔이미지" />
                    </div>
                  </HotelWrap>
                );
              })}
          </HotelInfo>
        </MyPageContent>
      </MainContainer>
      <PageBtn updateOffset={updateOffset} />
    </Container>
  );
}

export default MyPage;

const Container = styled.div`
  margin: 30px;
`;

const TitleContainer = styled.div`
  padding: 70px 20px 0px;
  margin-bottom: 80px;
`;
const EngTitle = styled.div`
  text-align: center;
  font-size: 30px;
`;
const KorTitle = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 18px;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const SideMenu = styled.div`
  width: 270px;
  font-size: 18px;
  padding-top: 50px;
  border-top: 4px black solid;
`;

const SideMenuList = styled.li`
  height: 34px;
  cursor: pointer;
`;

const MyPageContent = styled.div`
  justify-content: center;
  width: 800px;
  border-top: 4px black solid;
  padding-top: 50px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  height: 5rem;
`;

const ReservationInfo = styled.span`
  margin-right: 1rem;
  font-size: 1.3rem;
  cursor: pointer;
`;
const History = styled.span`
  font-size: 1.3rem;
  cursor: pointer;
`;
const ReserveBtn = styled.button`
  width: 150px;
  height: 45px;
  margin-top: 30px;
  background-color: black;
  color: white;
`;

const HotelInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 2px solid gray;
`;

const HotelInfoText = styled.div`
  width: 410px;
`;
const HotelWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
`;
const HotelNameKor = styled.div`
  font-size: 32px;
`;
const HotelNameEng = styled.div`
  margin: 4px 0px 18px 2px;
  font-size: 12px;
`;

const HotelNormalInfoWrap = styled.div`
  margin-bottom: 40px;
`;
const HotelNormalInfo = styled.div`
  margin-bottom: 7px;
  font-size: 14px;
`;
const HotelImg = styled.img`
  width: 388px;
`;

const WelcomeWrap = styled.div`
  text-align: center;
`;

const Welcome = styled.div`
  font-size: 30px;
`;

const TravelCount = styled.div`
  margin: 20px 0px 0px;
  font-size: 18px;
  color: rgb(168, 160, 149);
`;

const ClientInfo = styled.div`
  margin: 20px 0px 0px;
`;

const ClientEmail = styled.span`
  font-size: 16px;
`;

const ClientEdit = styled.span`
  font-size: 12px;
  border-left: 1px gray solid;
  padding-left: 10px;
  margin-left: 10px;
  color: rgb(168, 160, 149);
`;
