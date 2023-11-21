import '../css/section1.css'
import Logo from "../img/solid_white_logo.png"

function Section1() {
  return (
    <section className="section1">
      <article className="w1500 section1Article">
        <div className="section1Left">
          <img src={Logo} className="section1Logo"></img>
          <h1 className="section1Title">Brand History</h1>
          <table className="section1Table">
            <tr className="tableCol">
              <td className="tableTitle">설립연도</td>
              <td className="tableText">1997년 11월 6일</td>
            </tr>
            <tr className="tableCol">
              <td className="tableTitle">본사위치</td>
              <td className="tableText">서울시 노원구 중계동</td>
            </tr>
            <tr className="tableCol">
              <td className="tableTitle">자격증</td>
              <td className="tableText">#웹디자인기능사 #신변보호사</td>
            </tr>
            <tr className="tableCol">
              <td className="tableTitle">주요사업</td>
              <td className="tableText">Front-End Developer</td>
            </tr>
            <tr className="tableCol">
              <td className="tableTitle">대표번호</td>
              <td className="tableText">010-2250-8162</td>
            </tr>
            <tr className="tableCol">
              <td className="tableTitle">매출액</td>
              <td className="tableText">500,000원</td>
            </tr>
            <tr className="tableCol">
              <td className="tableTitle">인사말</td>
              <td className="tableText">
                  안녕하세요 GUARD에서 FRONT-END Developer가 된 CSM 입니다. 
                <br/>CSM의 사명은 도전을 무서워 하지 말자 입니다.
                <br/>사업을 바꾸는 도전을 시작한지 어느덧 8개월이 되었습니다.
                <br/>꾸준히 자기개발을 통해 성장하는 Developer가 되겠습니다</td>
            </tr>
          </table>
        </div>
        <div className="section1Right">
          <div className="sectionLeftBorder">
            <p>1997.11.06 </p>
            <p>2016.02.23 ~ 2018.02.09</p>
            <p>2017.03.11 ~ 2018.01.20</p>
            <p>2018.03.06 ~ 2019.11.04</p>
            <p>2020.01.28 ~ 2023.03.15</p>
            <p>2023.05.31 ~ 2023.12.18</p>
            <p>2023.12.16 ~ 2060.12.31</p>
            <p>2071.01.01 ~</p>
          </div>
          <div className="sectionRightBorder">
            <p>조성민(Cho sung min) 탄생</p>
            <p>아세아 항공 전문학교 (경찰경호과)</p>
            <p>프리랜서 경호원</p>
            <p>군인</p>
            <p>SK 쉴더스 (前 ADT 캡스)</p>
            <p>그린 컴퓨터 아카데미 (프론트엔드 과정)</p>
            <p>Front-end developer 전문가 </p>
            <p>서울 아파트 매매</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Section1;
