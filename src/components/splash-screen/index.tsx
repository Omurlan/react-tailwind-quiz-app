import { useEffect, useState } from 'react'

import { AppLogoBlack } from '../../utils/icons'
import LogoAnimation from '../ui/logo-animation'
import PageCenter from '../ui/page-center'

const SplashScreen = () => {
  const [logoSize, setLogoSize] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setLogoSize(3)
      } else {
        setLogoSize(4)
      }
    }

    // Set initial logo size
    handleResize()

    // Update logo size on window resize
    window.addEventListener('resize', handleResize)

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <PageCenter theme justifyCenter>
      <LogoAnimation logoSize={logoSize}>
        <AppLogoBlack />
        <h1 className="text-[10px] font-bold">FLEXY QUIZ</h1>
      </LogoAnimation>
    </PageCenter>
  )
}

export default SplashScreen
