import styled from 'styled-components';
import DefaultContentLayout from '../components/defaultContent';
import Divider from '../components/Divider';

const ReserveationHeaderContainer = styled.div`
  margin-top: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

const KakaoButton = styled.a`
  background-color: #f2dc02;
  color: #371a1a;
  border: none;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  margin: 10px;
  width: 160px;
  display: inline-block;
  padding: 10px;
`;
const NaverButton = styled.a`
  background-color: #02c75a;
  color: white;
  border: none;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  margin: 10px;
  width: 160px;
  display: inline-block;
  padding: 10px;
`;

const Spacer = styled.div`
  margin-top: 70px;
`;

const ReservationContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ReservationContentCol = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 600px;
  @media screen and (max-width: 992px) {
    max-width: inherit;
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
  word-break: keep-all;
`;

const Table = styled.table`
  width: 100%;
  * {
    border: 1px solid black;
  }
  td {
    padding: 5px;
  }
`;

const Inquery = () => {
  return (
    <DefaultContentLayout
      title={
        <>
          소중한 공간의
          <br />
          특별한 주인공이 되어주세요.
        </>
      }
      photoUrl='/mainPhotos/3.JPG'
      seoTitle='문의'
    >
      <Spacer />

      <ReserveationHeaderContainer>
        <Divider />
        <Spacer />

        <KakaoButton target={'_blank'} href='https://pf.kakao.com/_VCxnsb/chat'>
          카카오톡 문의
        </KakaoButton>
        <NaverButton
          target={'_blank'}
          href='https://m.booking.naver.com/booking/10/bizes/638724?theme=place&entry=pll&area=pll'
        >
          네이버 예약
        </NaverButton>
        <Spacer />
        <Divider />
      </ReserveationHeaderContainer>
      <ReservationContentContainer>
        <ReservationContentCol>
          <ReservationContentRow>
            <ul>
              <li>이용 안내</li>
              <li>
                · 이용 예약 확인 후, 문자로 비밀번호 등을 안내해 드립니다.
              </li>
              <li>· 매일 08:00 ~ 24:00(최소 3시간 이용 가능)</li>
              <li>
                · 부산 금정구 서동로 91번길 7, 1층 - 인근 공영 주차장과 갓길
                주차가 가능합니다.
              </li>
              <li>
                <div style={{ paddingTop: '20px' }}>
                  · 베이킹 도구를 사용하지 않을 경우
                </div>
                <div>
                  <Table>
                    <tr>
                      <td>평일(월~목) 1시간</td>
                      <td>13,000원(2인 기준)</td>
                    </tr>
                    <tr>
                      <td>주말(금~일), 공휴일 1시간</td>
                      <td>17,000원(2인 기준)</td>
                    </tr>
                  </Table>
                  <div>
                    * 인원 추가
                    <br />- 시간 상관없이 1인 8,000원
                  </div>
                </div>
              </li>
              <li>
                <div style={{ paddingTop: '20px' }}>
                  · 베이킹 도구를 사용할 경우
                </div>
                <div>
                  <Table>
                    <tr>
                      <td>평일(월~목) 1시간</td>
                      <td>17,000원(2인 기준)</td>
                    </tr>
                    <tr>
                      <td>주말(금~일), 공휴일 1시간</td>
                      <td>20,000원(2인 기준)</td>
                    </tr>
                  </Table>
                  <div>
                    * 인원 추가
                    <br />- 시간 상관없이 1인 12,000원
                  </div>
                </div>
              </li>
            </ul>
          </ReservationContentRow>
          <ReservationContentRow>
            <ul>
              <li>예약 안내</li>
              <li>· 예약 신청 후 계좌이체 부탁드립니다.</li>
              <li>
                · 계좌이체 결제시 예약신청 후 12시간 이내에 입금되지 않을 경우,
                예약이 취소됩니다.
              </li>
              <li>
                · 같은 날짜에 예약신청이 중복 될 경우, 입금 순서가 아닌 신청
                순서로 예약이 확정됩니다.
              </li>
              <li>
                · 계좌이체 결제시 현금영수증 발행이 가능합니다. 예약시
                요청사항에 신청해주세요.
              </li>
              <li>· 예약 변경 및 취소는 카카오톡 @고개서동 으로 남겨주세요.</li>
              <li>
                · 추가적으로 궁금사항이 있다면, 카카오톡 @고개서동 으로
                연락부탁드립니다.
              </li>
            </ul>
          </ReservationContentRow>
        </ReservationContentCol>
        <ReservationContentCol>
          <ReservationContentRow>
            <ul>
              <li>환불 규정</li>
              <li>· 환불 시 아래의 기준일에 따른 환불 금액을 드립니다.</li>
              <li>
                · 이용 8일전 - 총 결제금액의 100% 환불 / 이용 5일전 - 총
                결제금액의 50% 환불 / 이용 5일이내 - 환불 불가
              </li>
            </ul>
          </ReservationContentRow>
          <ReservationContentRow>
            <ul>
              <li>예약 전 확인 사항</li>
              <li>
                · 보호자가 없는 미성년자 및 반려동물 동반시 입실하실 수
                없습니다.
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

      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.892894912934!2d129.09660176292584!3d35.217138962793804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356893bb7df20ff1%3A0x587edfd9dd9a1fb2!2z67aA7IKw6rSR7Jet7IucIOq4iOygleq1rCDshJzrj5nroZw5MeuyiOq4uCA3!5e0!3m2!1sko!2skr!4v1640074496992!5m2!1sko!2skr'
        width='100%'
        height='450'
        style={{ border: 0 }}
        allowFullScreen={false}
        loading='lazy'
      ></iframe>
    </DefaultContentLayout>
  );
};

export default Inquery;
