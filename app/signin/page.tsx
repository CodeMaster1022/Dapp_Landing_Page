'use client';
import {Suspense, useCallback, useState} from 'react';
import {useRouter} from 'next/navigation';

import useAuthSession from '@/lib/auth/hooks/useAuthSession';
import Spinner from '@/lib/components/spinnner/Spinner';
import ConnectWalletModal from '@/lib/web3/components/ConnectWalletModal';
import Header from '@/lib/components/layout/Header';
import Footer from '@/lib/components/layout/Footer';
import Background from '@/app/Background';
import MaskMaker from '@/lib/components/MaskMaker';

import ProviderButton from './ProviderButton';
import ConnectWeb3Wallet from './ConnectWeb3Wallet';
import SigninErrorWrapper from './SigninErrorWrapper';

import type {FC} from 'react';
import type {SignInPageErrorParam} from './SigninErrorWrapper';

const SigninPage: FC<{searchParams: Record<string, string | undefined>}> = ({searchParams}) => {
  const {session} = useAuthSession('google');
  const router = useRouter();

  const [web3ModalOpen, setWeb3ModalOpen] = useState(false);

  const closeWeb3Modal = () => {
    setWeb3ModalOpen(false);
  };

  const onConnect = useCallback(() => {
    router.push('/signin');
  }, []);

  return (
    <div className='relative min-h-[100vh]'>
      <Header />
      <Background />
      <div className='min-h-[90vh] pt-32 pb-10 flex justify-center px-4'>
        <div className='z-10 flex flex-col bg-black/20 px-10 py-10 text-white rounded-xl'>
          <h1 className='text-center mb-4'>
            Log in to ProGFi
          </h1>
          <div className='flex flex-col items-center gap-2 w-md max-w-[90vw] mt-3'>
            <ConnectWeb3Wallet />
            <Button onClick={() => setWeb3ModalOpen(true)} variant='transparent' size='large'>
              Connect Wallet
            </Button>
            <div className='flex flex-col gap-4 divide-y-[1px]'>
              { !session ?
                <>
                  <div className='pb-5 surface'>
                    <div className='text-base text-center font-medium mb-3.5'>
                      Log in to ProGFi with Google oAuth
                    </div>
                    <Suspense fallback={<Spinner size='large' />}>
                      <SigninErrorWrapper error={searchParams.error as SignInPageErrorParam}>
                        <div className='flex flex-col items-center gap-4'>
                          <ProviderButton provider={{id: 'google', name: 'Google'}} size='medium'/>
                        </div>
                      </SigninErrorWrapper>
                    </Suspense>
                  </div>
                  <div>
                    <h1 className='text-center mt-2 mb-4'>
                      Sign up with Google
                    </h1>
                    <div className='pb-5 surface'>
                      <div className='text-base text-center font-medium'>
                        Sign up to ProGFi with Google
                        <div className='text-xs mt-1 mb-3.5'>Have no account yet?</div>
                      </div>
                      <Suspense fallback={<Spinner size='large' />}>
                        <SigninErrorWrapper error={searchParams.error as SignInPageErrorParam}>
                          <div className='flex flex-col items-center gap-4'>
                            <ProviderButton provider={{id: 'google', name: 'Google'}} size='medium'/>
                          </div>
                        </SigninErrorWrapper>
                      </Suspense>
                    </div>
                  </div>
                </> :
                <div className='pb-5 surface'>
                  <div className='text-base text-center font-medium mb-3.5'>
                    Disconnect Google account from ProGFi
                  </div>
                  <Suspense fallback={<Spinner size='large' />}>
                    <SigninErrorWrapper error={searchParams.error as SignInPageErrorParam}>
                      <ProviderButton provider={{id: 'google', name: 'Google'}} size='medium'/>
                    </SigninErrorWrapper>
                  </Suspense>
                </div> }
            </div>
          </div>
        </div>
        <MaskMaker className='fixed -top-[30%]' width={500} height={500} position='top-right' color='blue' />
        <MaskMaker className='fixed -top-[50%] -left-[10%]' width={400} height={400} color='green' />
      </div>
      <Footer />
      <ConnectWalletModal isOpen={web3ModalOpen} onClose={closeWeb3Modal}/>
    </div>
  );
};

export default SigninPage;