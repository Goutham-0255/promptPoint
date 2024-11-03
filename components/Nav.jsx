'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState,useEffect } from 'react';
import { signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
  const {data: session} = useSession();

  const [providers, setProviders] = useState(null);
  
  const  [toggleDropdown, settoggleDropdown] = useState(false)

  useEffect(() => async () => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    setUpProviders()
  }, [session])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/"  className='flex gap-2 flex-center'>
        
          <Image
            src='/assets/images/atom-2.jpg'
            alt='Promtopia Logo'
            width={60}
            height={60}
            className='logo_image object-contain'
          />
       
        <p className='logo_text'>PromptPoint</p>
      </Link>

      {/* Desktop Navigation */} 

      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Craft post
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href="/profile">
              <Image 
                src={session?.user.image}
                width={35}
                height={35}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ): (
          <>
            {providers &&
              Object.values(providers).map((providers) =>
              (
                <button
                  type='button'
                  key={providers.name}
                  onClick={() => signIn(providers.id)}
                  className='black_btn'
                >
                  Sign In
                </button>
              ))}
          </>
        )}
        
        </div>


      {/* Mobile Navigation */}
      

      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => settoggleDropdown((prev) => 
                !prev)}
              />

                {toggleDropdown && (
                  <div className='dropdown'>
                    <Link
                      href="/profile"
                      className='dropdown_link'
                      onClick={() => settoggleDropdown
                        (false)
                      }
                    >
                      My Profile
                    </Link>

                    <Link
                      href="/create-prompt"
                      className='dropdown_link'
                      onClick={() => settoggleDropdown
                        (false)
                      }
                    >
                      Create Prompt
                    </Link>

                    <button
                      type='button'
                      onClick={() => {
                        settoggleDropdown(false);
                        signOut();
                      }}
                      className='mt-5 w-full black_btn'
                    >
                      Sign Out

                    </button>
                  </div>
                  
                )}
          </div>
        ):(
          <>
            {providers &&
              Object.values(providers).map((providers) =>
              (
                <button
                  type='button'
                  key={providers.name}
                  onClick={() => signIn(providers.id)}
                  className='black_btn'
                >
                  Sign In
                </button>
              ))}
          </>
        )}

      </div>
    </nav>
  )
}

export default Nav