export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#171717] px-6">
      <div className="text-center">
        <div className="text-[#B39A70] text-[9px] tracking-[0.42em] uppercase mb-6">Error 404</div>
        <h1 className="font-display text-[#F8F7F4] text-4xl md:text-6xl mb-6">Page not found</h1>
        <p className="text-[#77736C] mb-10">The page you are looking for doesn't exist or has moved.</p>
        <a
          href="/"
          className="inline-flex bg-[#B39A70] text-[#171717] text-[10px] tracking-[0.25em] uppercase px-8 py-4 font-semibold hover:bg-[#F8F7F4] transition-colors duration-300"
        >
          Back to Home
        </a>
      </div>
    </section>
  )
}
