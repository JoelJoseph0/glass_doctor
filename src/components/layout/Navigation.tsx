import { useEffect, useState } from 'react'
import Logo from '@/components/common/Logo'
import { usePathname } from '@/router'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Contact', href: '/contact/' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const pathname = usePathname().replace(/\/?$/, '/')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#171717]/20 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-[#B39A70] via-[#E8E4DC] to-[#B39A70] transition-all duration-300 shadow-lg shadow-[#B39A70]/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`
          fixed top-0 inset-x-0 z-50
          transition-all duration-500
          ${
            scrolled || open
              ? 'bg-[#171717]/90 backdrop-blur-xl shadow-2xl border-b border-[#B39A70]/10'
              : 'bg-transparent'
          }
        `}
      >
        {/* Subtle gradient border effect */}
        {scrolled && (
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B39A70]/30 to-transparent" />
        )}

        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <a href="/" className="relative group">
            <Logo />
            <div className="absolute inset-0 bg-[#B39A70]/0 group-hover:bg-[#B39A70]/5 rounded-lg transition-colors duration-300 -z-10 blur-xl" />
          </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <a
                key={link.label}
                href={link.href}
                className={`
                  text-[10px]
                  tracking-[0.22em]
                  uppercase
                  transition-all
                  duration-300
                  relative
                  py-2
                  group
                  ${isActive 
                    ? 'text-[#B39A70]' 
                    : 'text-[#F8F7F4] hover:text-[#B39A70]'
                  }
                `}
              >
                {link.label}
                
                {/* Animated underline */}
                <span 
                  className={`
                    absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#B39A70] to-[#E8E4DC]
                    transition-all duration-300
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}
                />
                
                {/* Glow effect on hover */}
                <span className="absolute inset-0 bg-[#B39A70]/0 group-hover:bg-[#B39A70]/10 blur-xl transition-all duration-300 -z-10" />
              </a>
            )
          })}
        </div>

        <a
          href="/contact/"
          className="
            hidden lg:inline-flex
            relative
            border-2 border-[#B39A70]
            text-[#B39A70]
            text-[10px]
            tracking-[0.22em]
            uppercase
            px-6 py-2.5
            overflow-hidden
            transition-all
            duration-300
            active:scale-95
            group
            hover:shadow-lg
            hover:shadow-[#B39A70]/30
            before:absolute
            before:inset-0
            before:bg-[#B39A70]
            before:translate-y-full
            before:transition-transform
            before:duration-300
            hover:before:translate-y-0
          "
        >
          <span className="relative z-10 group-hover:text-[#171717] transition-colors duration-300">
            Get a Quote
          </span>
        </a>

        {/* Mobile */}
        <button
          onClick={() => setOpen((value) => !value)}
          className="
            lg:hidden 
            p-2 
            flex flex-col 
            gap-[5px] 
            focus:outline-none 
            active:scale-95 
            transition-all
            duration-300
            relative
            group
          "
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#B39A70]/0 group-hover:bg-[#B39A70]/20 rounded-lg blur-xl transition-colors duration-300" />
          
          <span
            className={`
              block w-6 h-0.5 bg-[#F8F7F4] rounded-full
              transition-all duration-300
              origin-center
              ${open ? 'rotate-45 translate-y-[6px]' : ''}
            `}
          />

          <span
            className={`
              block w-6 h-0.5 bg-[#F8F7F4] rounded-full
              transition-all duration-300
              ${open ? 'opacity-0 scale-0' : ''}
            `}
          />

          <span
            className={`
              block w-6 h-0.5 bg-[#F8F7F4] rounded-full
              transition-all duration-300
              origin-center
              ${open ? '-rotate-45 -translate-y-[6px]' : ''}
            `}
          />
        </button>
      </div>

      {/* Mobile menu with enhanced animation */}
      <div
        className={`
          lg:hidden overflow-hidden
          transition-all duration-500
          ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
          backdrop-blur-xl
          bg-[#171717]/95
        `}
      >
        <div className="px-6 pb-8 flex flex-col gap-1 border-t border-[#B39A70]/20">
          {NAV_LINKS.map((link, index) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className={`
                  text-sm
                  tracking-[0.18em]
                  uppercase
                  py-3
                  px-4
                  border-b
                  border-[#77736C]/10
                  transition-all
                  duration-300
                  active:bg-[#B39A70]/10
                  active:scale-95
                  relative
                  overflow-hidden
                  group
                  ${isActive 
                    ? 'text-[#B39A70] border-[#B39A70]/30 bg-[#B39A70]/5' 
                    : 'text-[#F8F7F4] hover:text-[#B39A70] hover:bg-[#B39A70]/5'
                  }
                  ${open ? 'animate-in slide-in-from-left-4 fade-in' : ''}
                `}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationDuration: '300ms'
                }}
              >
                {/* Slide-in indicator */}
                <span className={`
                  absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#B39A70] to-[#E8E4DC]
                  transition-all duration-300
                  ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                `} />
                
                <span className="relative z-10">{link.label}</span>
                
                {/* Glow on hover */}
                <span className="absolute inset-0 bg-[#B39A70]/0 group-hover:bg-[#B39A70]/10 blur-xl transition-all duration-300" />
              </a>
            )
          })}

          <a
            href="/contact/"
            onClick={handleLinkClick}
            className={`
              mt-4
              border-2 border-[#B39A70]
              text-[#B39A70]
              text-[10px]
              tracking-[0.22em]
              uppercase
              py-3
              text-center
              transition-all
              duration-300
              active:scale-95
              relative
              overflow-hidden
              group
              hover:shadow-lg
              hover:shadow-[#B39A70]/30
              ${open ? 'animate-in slide-in-from-bottom-4 fade-in' : ''}
              before:absolute
              before:inset-0
              before:bg-[#B39A70]
              before:translate-y-full
              before:transition-transform
              before:duration-300
              hover:before:translate-y-0
            `}
            style={{
              animationDelay: `${NAV_LINKS.length * 50}ms`,
              animationDuration: '300ms'
            }}
          >
            <span className="relative z-10 group-hover:text-[#171717] transition-colors duration-300">
              Get a Quote
            </span>
          </a>
        </div>
      </div>
    </nav>
    </>
  )
}