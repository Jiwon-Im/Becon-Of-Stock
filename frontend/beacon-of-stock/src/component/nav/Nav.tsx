import { FC, useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
// import CountdownTimer from '../CountdownTimer';
import { useLoginStore } from '../../store/store';
import { ProfileBox } from './ProfileBox';
import axios_api from '../../assets/config/Axios';
import { getCookie } from '../../assets/config/Cookie';
import { useProfileStore } from '../../store/store';

const Nav: FC = () => {
  // const [initialTimeLeft, setInitialTimeLeft] = useState<number>(30 * 60);
  const logo = require('../../assets/img/bos-logo.png');
  const emptyImg = require('../../assets/img/empty-img.jpg');
  // 이 부분 주스탠드로 관리.
  const { isLogin } = useLoginStore();
  const { profile, setProfile } = useProfileStore();
  const ref = useRef<HTMLDivElement>(null);
  // =============모달 열리고 닫히고 하는 부분=====================
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const modalCloseHandler: EventListener = (event: Event) => {
      if (
        isOpen &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        // console.log('===')
      }
    };
    if (isOpen) {
      window.addEventListener('click', modalCloseHandler);
      // console.log('window 클릭 됨.')
    }
    return () => {
      window.removeEventListener('click', modalCloseHandler);
    };
  }, [isOpen]);
  // ===========================================================

  const token = getCookie('accessToken');

  const fatchData = useCallback(() => {
    axios_api
      .get('user', {
        headers: {
          authentication: token,
        },
      })
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          // console.log('yes');
          setProfile(res.data);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          // 401 에러를 처리하는 코드 작성
          console.log('인증 요청 중입니다.');
        } else {
          // 다른 에러를 처리하는 코드 작성
          console.error('에러가 발생했습니다:', error);
        }
      });
  }, [token, setProfile]);
  // ================================================================================
  // error 해결을 위해 dependency array에 함수, 매서드들을 추가했는데 문제 될 시 제거하기.
  // ================================================================================
  useEffect(() => {
    if (isLogin) {
      fatchData();
    }
  }, [isLogin, fatchData]);

  const navStyle =
    'lg:text-lg md:text-base text-sm font-KJCbold inline cursor-pointer p-1 hover:border-b-2 hover:border-[#6EB5FF]';
  return (
    <nav className='flex justify-between mx-10'>
      <div>
        <Link to='/'>
          <img src={logo} alt='logo' className='w-[60px] h-[60px]' />
        </Link>
      </div>
      <div className='flex sm:space-x-20 space-x-8'>
        {isLogin ? (
          <>
            {/* <CountdownTimer initialTimeLeft={initialTimeLeft} /> */}
            {/* <div className='m-auto'>
              <Link to='/'>
                <p className={navStyle}>튜토리얼</p>
              </Link>
            </div> */}
            <div className='m-auto'>
              <Link to='/'>
                <p className={navStyle}> 백테스트</p>
              </Link>
            </div>
            <div className='m-auto'>
              <Link to='/community/dibs'>
                <p className={navStyle}> 커뮤니티</p>
              </Link>
            </div>
            {/* 로그인 상태에서 프로필 이미지 들어오는 곳 */}
            <div
              className='m-auto'
              onClick={() => setIsOpen(!isOpen)}
              ref={ref}
            >
              <img
                src={profile.profileImg ? profile.profileImg : emptyImg}
                alt='emptyImg'
                className='w-[40px] h-[40px] rounded-full cursor-pointer'
              />
              {isOpen && <ProfileBox />}
            </div>
          </>
        ) : (
          <>
            <article className='m-auto'>
              <Link to='/login'>
                <p className={navStyle}> 회원가입</p>
              </Link>
            </article>
            <article className='m-auto'>
              <Link to='/login'>
                <p className={navStyle}> 로그인</p>
              </Link>
            </article>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
