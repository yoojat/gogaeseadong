import styled from 'styled-components';
import DefaultContentLayout from '../components/defaultContent';
import Divider from '../components/Divider';

const ReserveationHeaderContainer = styled.div`
  margin-top: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

const ReservationButton = styled.button`
  background-color: #f2dc02;
  color: ##371a1a;
  border: none;
  font-weight: 800;
  padding: 10px 20px;
`;
const Spacer = styled.div`
  margin-top: 70px;
`;

const ReservationContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-weight: 300;
`;
const ReservationContentCol = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 600px;
  @media screen and (max-width: 992px) {
    max-width: 800px;
  }
`;
const ReservationContentRow = styled.div`
  /* background-color: #e27a68; */
  border: 2px solid white;
  border-top: 1px solid black;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 100px;
  line-height: 25px;
`;

const ContentTitle = styled.div``;

const Inquery = () => {
  return (
    <DefaultContentLayout
      title={
        <>
          책을 읽고,
          <br />
          차를 마시며 보내는
          <br />
          독서를 위한 공간
        </>
      }
      photoUrl='/mainPhotos/3.JPG'
    >
      <Spacer />

      <ReserveationHeaderContainer>
        <Divider />
        <Spacer />

        <ReservationButton>예약하기</ReservationButton>
        <Spacer />
        <Divider />
      </ReserveationHeaderContainer>
      <ReservationContentContainer>
        <ReservationContentCol>
          <ReservationContentRow>
            <ul>
              <li>
                · 이용 예약 확인 후, 문자로 비밀번호 등을 안내해 드립니다.
              </li>
              <li>
                · 매일 12:00 ~ 21:00 (최소 3시간 이용 가능) 부산 금정구 서동로
                91번길 7, 1층 - 인근 공영 주차장과 갓길 주차가 가능합니다.
              </li>
              <li>
                · 평일(월~목) 1시간 - 9,900원(2인 기준) 주말(금~일) 1시간 -
                12,000원(2인 기준) 인원 추가 - 시간에 상관없이 1인 7,000원의
                추가요금을 받고 있습니다.
              </li>
            </ul>
          </ReservationContentRow>
          <ReservationContentRow>
            <ul>
              <li>· 예약 안내 예약 신청 후 계좌이체 부탁드립니다.</li>
              <li>
                · 계좌이체 결제시 예약신청 후 12시간 이내에 입금되지 않을 경우,
                예약이 취소됩니다.
              </li>
              <li>
                · 한 날짜에 예약신청이 중복 될 경우, 입금 순서가 아닌 신청
                순서로 예약이 확정됩니다.
              </li>
              <li>
                · 계좌이체 결제시 현금영수증 발행이 가능합니다. 예약시
                요청사항에 신청해주세요.
              </li>
              <li>
                · 예약 변경 및 취소는 카카오톡 @고개_서동 으로 남겨주세요.
              </li>
              <li>
                · 추가적으로 궁금사항이 있다면, 카카오톡 @고개_서동 으로
                연락부탁드립니다.
              </li>
            </ul>
          </ReservationContentRow>
        </ReservationContentCol>
        <ReservationContentCol>
          <ReservationContentRow>
            <ul>
              <li>
                · 환불 규정 환불 시 아래의 기준일에 따른 환불 금액을 드립니다.
              </li>
              <li>
                · 이용 10일전 - 총 결제금액의 100% 환불 이용 5일전 - 총
                결제금액의 50% 환불 이용 3일전 - 변경/환불 불가
              </li>
            </ul>
          </ReservationContentRow>
          <ReservationContentRow>
            <ul>
              <li>
                · 예약 전 확인 사항 보호자가 없는 미성년자 및 반려동물 동반시
                입실하실 수 없습니다.
              </li>
              <li>
                · 예약 인원 외의 공간 사용은 불가합니다. 인원 규정 위반에 대한
                책임은 게스트에게 있습니다.
              </li>
              <li>
                · 시설, 집기의 훼손 또는 파손시 경우에 따라 변상비를 청구할 수
                있습니다.
              </li>
              <li>
                · 무인으로 운영되는 숙소의 특성상, 방범을 위해 CCTV가
                설치되어있습니다.
              </li>
              <li>
                · 방역업체와의 계약을 통해, 주기적으로 소독 작업을 하고
                있습니다.
              </li>
              <li>
                · 다만, 주변 환경 특성상 벌레가 유입될 수 있음을 알려드립니다.
                이로 인한 사용 중 환불은 불가함을 알려드립니다.
              </li>
              <li>· 공간 사용 후, 전열기기 전원을 꺼주시기 바랍니다.</li>
              <li>· 공간 사용 후, 설거지와 정리정돈 부탁드립니다.</li>
            </ul>
          </ReservationContentRow>
        </ReservationContentCol>
      </ReservationContentContainer>
    </DefaultContentLayout>
  );
};

export default Inquery;
