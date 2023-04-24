import { Link } from "react-router-dom";
import Ico from "../ico";
import SocialMedia from "../socialMedia";
import { ReactComponent as IcoArrowLeft } from '../../assets/icons/arrow-left.svg'
import { useDispatch } from "react-redux";
import { setStatus } from '../../store/reducers/_sidebarStatus'

const MainSidebar = () => {
    const dispatch = useDispatch();
    const links = [
        {
            link: '/',
            text: 'خانه'
        },
        {
            link: 'shop',
            text: 'محصولات'
        },
        {
            link: 'blog',
            text: 'وبلاگ'
        },
        {
            link: 'about-us',
            text: 'درباره ما'
        },
        {
            link: 'contact-us',
            text: 'ارتباط با ما'
        },
        // {
        //     link: '#',
        //     text: 'ورود'
        // },
        // {
        //     link: '#',
        //     text: 'ثبت نام'
        // },
    ]

    return (
        <>
            <div className='w-full flex flex-col gap-y-2'>
                {
                    links.map(({ link, text }, index) =>
                        <Link
                            onClick={() => dispatch(setStatus())}
                            to={link}
                            key={index}
                            className='!w-full !px-3 btn !text-base hover:!text-current secondray-btn'
                        >
                            {text}
                            <Ico className='mr-auto !w-5 !h-5'>
                                <IcoArrowLeft />
                            </Ico>
                        </Link>
                    )
                }
            </div>

            <div className='flex flex-col px-3'>
                <span>اطلاعات</span>
                <p className='mt-4 text-gray-400'>
                    ایران، استان سمنان، شهرستان شاهرود<br />
                    خیابان آزادگان، کوچه آزادگان دوم<br />
                    erfangharib5@gmail.com<br />
                    ۰۹۳۹ ۰۰۰ ۳۴۰۶
                </p>
            </div>

            <SocialMedia className='px-3' />
        </>
    );
}
export default MainSidebar;