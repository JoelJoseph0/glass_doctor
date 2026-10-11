interface FaqListProps {
  title: string
  faqs: { question: string; answer: string }[]
}

export default function FaqList({ title, faqs }: FaqListProps) {
  return (
    <div>
      <h2 className="font-display text-[#171717] text-2xl md:text-3xl mb-8">{title}</h2>
      <div className="divide-y divide-[#77736C]/20 border-y border-[#77736C]/20">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex items-center justify-between gap-6 cursor-pointer list-none text-[#171717] text-base md:text-lg font-medium [&::-webkit-details-marker]:hidden">
              <h3>{faq.question}</h3>
              <span className="shrink-0 w-8 h-8 border border-[#B39A70] text-[#B39A70] flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="text-[#77736C] leading-relaxed mt-4 pr-12">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
