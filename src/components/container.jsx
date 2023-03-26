import { ReactComponent as AngleRight } from '../assets/icons/arrow-left.svg'
import Ico from './ico';
import TomanSign from './tomanSign';

const Container = ({
    title,
    supTitle,
    desc,
    rtl = true,
    primary = false,
    buttonText = 'خرید کنید',
    imgSrc = undefined,
    tomanSign = true,
    containerRef
}) => {
    return (
        <div ref={containerRef} className={`group md:h-96 flex justify-center items-center z-20 gap-x-20 mx-auto w-5/6 flex-col ${rtl ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className='md:w-1/2 w-full flex justify-start items-center'>
                {imgSrc !== undefined ? 
                    <img src={imgSrc} alt={supTitle} className='group-hover:scale-105 transition-transform duration-700' /> :
                    null
                }
            </div>
            <div className={`md:mt-0 mt-5 md:w-1/2 w-full flex flex-col justify-center ${primary ? 'animateChilds' : ''}`}>
                <h4 className={`!duration-300 w-20 mb-1 ${primary ? 'text-gold' : 'text-gray-400'}`}>{supTitle}</h4>
                <h2 className={`!duration-500 leading-tight ${primary ? 'text-[40px] md:text-[55px]' : 'text-3xl'}`}>{title}</h2>
                <p  className='!duration-700 mb-7 mt-5'>{desc}</p>

                <div className='!duration-1000'>
                    <button className={`btn ${primary ? 'primary-btn' : 'general-btn'}`}>
                        {buttonText}
                        {tomanSign ? <TomanSign /> : null}
                        <Ico className={`mr-1 filter  ${primary ? 'invert' : ''}`}>
                            <AngleRight />
                        </Ico>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Container;