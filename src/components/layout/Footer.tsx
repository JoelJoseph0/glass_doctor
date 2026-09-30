import Logo from '@/components/common/Logo'

const SOCIAL_LINKS = [
  {
    label: 'LI',
    href: '#',
  },
  {
    label: 'IG',
    href: '#',
  },
  {
    label: 'FB',
    href: '#',
  },
  {
    label: 'YT',
    href: '#',
  },
]

const FOOTER_NAV = [
  'Home',
  'About Us',
  'Products',
  'Services',
  'Contact',
]

const FOOTER_PRODUCTS = [
  'Glass Tempering & Bending',
  'Glass Partitions',
  'Smart Glasses',
  'Aluminum Windows & Doors',
  'Curtain Walls',
  'Glass Processing',
]

export default function Footer() {
  return (
    <footer className="bg-[#171717] pt-20 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">

        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-12
          pb-16
          mb-8
          border-b
          border-[#77736C]/15
        ">

          <div className="
            sm:col-span-2
            lg:col-span-1
          ">
            <div className="mb-6">
              <Logo />
            </div>

            <p className="
              text-[#77736C]
              text-sm
              leading-relaxed
              max-w-[240px]
            ">
              Precision glass and architectural solutions
              for residential, commercial, and architectural
              projects across the UAE.
            </p>

            <div className="
              flex
              gap-3
              mt-8
            ">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="
                    w-8
                    h-8
                    border
                    border-[#77736C]/25
                    flex
                    items-center
                    justify-center
                    text-[#77736C]
                    text-[9px]
                    tracking-wider
                    hover:border-[#B39A70]
                    hover:text-[#B39A70]
                    transition-all
                    duration-300
                  "
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="
              text-[#F8F7F4]
              text-[8px]
              tracking-[0.35em]
              uppercase
              mb-6
            ">
              Navigation
            </div>

            <ul className="space-y-3">
              {FOOTER_NAV.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item
                      .toLowerCase()
                      .replace(' ', '-')}`}
                    className="
                      text-[#77736C]
                      text-sm
                      hover:text-[#B39A70]
                      transition-colors
                      duration-300
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="
              text-[#F8F7F4]
              text-[8px]
              tracking-[0.35em]
              uppercase
              mb-6
            ">
              Products
            </div>

            <ul className="space-y-3">
              {FOOTER_PRODUCTS.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="
                      text-[#77736C]
                      text-sm
                      hover:text-[#B39A70]
                      transition-colors
                      duration-300
                    "
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="
              text-[#F8F7F4]
              text-[8px]
              tracking-[0.35em]
              uppercase
              mb-6
            ">
              Contact
            </div>

            <div className="space-y-5">
              <div>
                <div className="
                  text-[#77736C]
                  text-[8px]
                  tracking-[0.25em]
                  uppercase
                  mb-1
                ">
                  Phone / WhatsApp
                </div>

                <a
                  href="tel:+971502597995"
                  className="
                    text-[#F8F7F4]
                    text-sm
                    hover:text-[#B39A70]
                  "
                >
                  +971 50 259 7995
                </a>
              </div>

              <div>
                <div className="
                  text-[#77736C]
                  text-[8px]
                  tracking-[0.25em]
                  uppercase
                  mb-1
                ">
                  Email
                </div>

                <div className="space-y-1">
                  <a
                    href="mailto:sales@theglassdoctor.ae"
                    className="
                      block
                      text-[#F8F7F4]
                      text-sm
                      hover:text-[#B39A70]
                      transition-colors
                      duration-300
                    "
                  >
                    sales@theglassdoctor.ae
                  </a>
                  <a
                    href="mailto:accounts@theglassdoctor.ae"
                    className="
                      block
                      text-[#F8F7F4]
                      text-sm
                      hover:text-[#B39A70]
                      transition-colors
                      duration-300
                    "
                  >
                    accounts@theglassdoctor.ae
                  </a>
                </div>
              </div>

              <div>
                <div className="
                  text-[#77736C]
                  text-[8px]
                  tracking-[0.25em]
                  uppercase
                  mb-1
                ">
                  Location
                </div>

                <div className="
                  text-[#F8F7F4]
                  text-sm
                  leading-relaxed
                ">
                  Sharjah, United Arab Emirates
                  <br />
                  Serving all of UAE
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="
          flex
          flex-col
          sm:flex-row
          items-center
          justify-between
          gap-4
        ">
          <div className="
            text-[#77736C]
            text-[11px]
          ">
            © 2025 The Glass Doctor.
            All Rights Reserved.
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="
                text-[#77736C]
                text-[11px]
                hover:text-[#B39A70]
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                text-[#77736C]
                text-[11px]
                hover:text-[#B39A70]
              "
            >
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}