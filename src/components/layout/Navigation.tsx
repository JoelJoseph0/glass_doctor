import { useEffect, useState } from 'react'
import Logo from '@/components/common/Logo'
import { useActiveSection } from '@/hooks/useActiveSection'

const NAV_LINKS = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About Us',
    href: '#about',
  },
  {
    label: 'Products',
    href: '#products',
  },
  {
    label: 'Applications',
    href: '#applications',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll,
      )
    }
  }, [])

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <nav
      className={`
        fixed top-0 inset-x-0 z-50
        transition-all duration-500
        ${
          scrolled || open
            ? 'bg-[#171717]/95 backdrop-blur-md shadow-xl'
            : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#home">
          <Logo />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1)
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
                  ${isActive 
                    ? 'text-[#B39A70]' 
                    : 'text-[#F8F7F4] hover:text-[#B39A70]'
                  }
                `}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-[#B39A70] animate-in fade-in slide-in-from-bottom-1 duration-300" />
                )}
              </a>
            )
          })}
        </div>

        <a
          href="#contact"
          className="
            hidden lg:inline-flex
            border border-[#B39A70]
            text-[#B39A70]
            text-[10px]
            tracking-[0.22em]
            uppercase
            px-6 py-2.5
            hover:bg-[#B39A70]
            hover:text-[#171717]
            transition-all
            duration-300
            hover:shadow-lg
            hover:shadow-[#B39A70]/20
            active:scale-95
          "
        >
          Get a Quote
        </a>

        {/* Mobile */}
        <button
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden p-1.5 flex flex-col gap-[5px] focus:outline-none active:scale-95 transition-transform"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span
            className={`
              block w-6 h-px bg-[#F8F7F4]
              transition-all duration-300
              origin-center
              ${
                open
                  ? 'rotate-45 translate-y-[6px]'
                  : ''
              }
            `}
          />

          <span
            className={`
              block w-6 h-px bg-[#F8F7F4]
              transition-opacity duration-300
              ${open ? 'opacity-0' : ''}
            `}
          />

          <span
            className={`
              block w-6 h-px bg-[#F8F7F4]
              transition-all duration-300
              origin-center
              ${
                open
                  ? '-rotate-45 -translate-y-[6px]'
                  : ''
              }
            `}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          lg:hidden overflow-hidden
          transition-all duration-500
          ${open ? 'max-h-[600px]' : 'max-h-0'}
          backdrop-blur-md
        `}
      >
        <div className="px-6 pb-8 flex flex-col gap-1 border-t border-[#77736C]/15">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1)
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
                  border-b
                  border-[#77736C]/10
                  transition-all
                  duration-300
                  active:bg-[#77736C]/5
                  ${isActive 
                    ? 'text-[#B39A70] border-[#B39A70]/30' 
                    : 'text-[#F8F7F4]'
                  }
                `}
              >
                {link.label}
              </a>
            )
          })}

          <a
            href="#contact"
            onClick={handleLinkClick}
            className="
              mt-4
              border border-[#B39A70]
              text-[#B39A70]
              text-[10px]
              tracking-[0.22em]
              uppercase
              py-3
              text-center
              transition-all
              duration-300
              active:bg-[#B39A70]/20
              active:scale-95
            "
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}