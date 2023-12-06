import '../css/section1.css'
import Logo from "../img/solid_white_logo.png"
import Sec1Data from '../data/section1.json'



function Section1({onInputChange, inputValues, textColor}) {
  const {bgColor} = inputValues;
  const inputChange = (e)=>{
      const {name, value} = e.target;
      onInputChange(name,value)
  }

  const tableData = [
    {tableTitle : Sec1Data.Title.name, tableText : Sec1Data.Text.name},
    {tableTitle : Sec1Data.Title.year, tableText : Sec1Data.Text.year},
    {tableTitle : Sec1Data.Title.location, tableText : Sec1Data.Text.location},
    {tableTitle : Sec1Data.Title.certificate, tableText : Sec1Data.Text.certificate},
    {tableTitle : Sec1Data.Title.work, tableText : Sec1Data.Text.work},
    {tableTitle : Sec1Data.Title.number, tableText : Sec1Data.Text.number},
    {tableTitle : Sec1Data.Title.price, tableText : Sec1Data.Text.price},
    {tableTitle : Sec1Data.Title.greetings, tableText : (<span>안녕하세요 GUARD에서 FRONT-END Developer가 된 CSM입니다.<br />CSM의 사명은 도전을 무서워하지 말자입니다.<br />사업을 바꾸는 도전을 시작한 지 어느덧 8개월이 되었습니다.<br />꾸준히 자기개발을 통해 성장하는 Developer가 되겠습니다.</span>)},
  ]
  const yearNumData = [
    {yearNum : Sec1Data.YearNum.name},
    {yearNum : Sec1Data.YearNum.university},
    {yearNum : Sec1Data.YearNum.guard},
    {yearNum : Sec1Data.YearNum.soldier},
    {yearNum : Sec1Data.YearNum.caps},
    {yearNum : Sec1Data.YearNum.student},
    {yearNum : Sec1Data.YearNum.developer},
  ]
  const yearTextData = [
    {yearText : Sec1Data.YearText.name},
    {yearText : Sec1Data.YearText.university},
    {yearText : Sec1Data.YearText.guard},
    {yearText : Sec1Data.YearText.soldier},
    {yearText : Sec1Data.YearText.caps},
    {yearText : Sec1Data.YearText.student},
    {yearText : Sec1Data.YearText.developer},
  ]


  return (
    <section className="section1">
            <div className='logoInputBg'>
              <h1 style={{color : textColor}}>배경색</h1>
              <div><input style={{border :`1px solid ${textColor}`}} className='inputBg' type='color'name="bgColor" onChange={inputChange}></input></div>
              <h1 style={{color : textColor}}>을 바꿔보세요.</h1>
            </div>
      <article className="w1500 section1Article">
        <div className="section1Left">
          <img src={Logo} alt='logo' className="section1Logo"></img>
          <h1 style={{color : textColor}}className="section1Title">Brand History</h1>
          <table className="section1Table">
            <tbody>
              {tableData.map((data,index)=>(
                <tr key={index} className="tableCol">
                  <td className="tableTitle">{data.tableTitle}</td>
                  <td  style={{color : textColor}} className="tableText">{data.tableText}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="section1Right">
          <div style={{borderRight :`1px solid ${textColor}`}} className="sectionLeftBorder">
            {yearNumData.map((numData,index)=>(
              <p key={index}>{numData.yearNum}</p>
            ))}
            <div className='sectionLeftBorderMove' style={{backgroundColor : bgColor}}></div>
          </div>
          <div className="sectionRightBorder">
          {yearTextData.map((textData,index)=>(
              <p style={{color : textColor}} key={index}>{textData.yearText}</p>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

export default Section1;