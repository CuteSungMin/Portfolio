import '../css/section4.css'
import BlackLogo from "../img/solid_bold_LOGO.png"

const Section4 = ({textColor}) => {
    return ( 
        <section>
            <div className='section4Title'><h1 style={{color : textColor}}>THANK U</h1></div>
            <article className="sec4Article w1500">
                <div className='contactBox'>
                    <div className='contactWrap'>
                        <div className='contactName'><span className='name1'>C</span><span className='nameNone'>ho</span> <span className='name2'>S</span><span className='nameNone'>ung</span> <span className='name3'>M</span><span className='nameNone'>in</span></div>
                        <div>
                            <img className='contactLogo' src={BlackLogo} alt='blackLogo'></img>
                        </div>
                    </div>
                    <div className='hideContactWrap'>
                        <div className='hideContactLeft'>
                            <img className='contactWhiteLogo' src={BlackLogo} alt='whiteLogo' ></img>
                            <div className='hideContactLeftText'>
                                <p>조성민</p>  
                                <p>010-2250-8162</p>  
                                <p>skje8162
                                    <br/>@gmail.com</p>
                            </div>
                        </div>
                        <div className='hideContactCenter'></div>
                        <div className='hideContactRight'></div>
                    </div>
                </div>
            </article>
        </section>
     );
}
 
export default Section4;