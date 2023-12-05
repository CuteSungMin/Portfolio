import '../css/section4.css'
import BlackLogo from "../img/solid_bold_LOGO.png"

const Section4 = () => {
    return ( 
        <section>
            <div className='section4Title'><h1>THANK U</h1></div>
            <article className="sec4Article w1500">
                <div className='contactBox'>
                    <div className='contactWrap'>
                        <div className='contactName'><span className='name1'>C</span><span className='nameNone'>ho</span> <span className='name2'>S</span><span className='nameNone'>ung</span> <span className='name3'>M</span><span className='nameNone'>in</span></div>
                        <div><img className='contactLogo' src={BlackLogo} alt='blackLogo'></img></div>
                    </div>
                </div>
            </article>
        </section>
     );
}
 
export default Section4;