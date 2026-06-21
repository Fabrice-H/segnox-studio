import Link from 'next/link';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';
import { WHATSAPP_LINKS, WHATSAPP_NUMBER } from '@/lib/constants';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={className}
    >
      <path d='M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2z' />
    </svg>
  );
}

export function FinalCtaSection() {
  return (
    <section id='diagnostic' className='bg-cream'>
      <div className='max-w-[1120px] mx-auto px-6 py-24'>
        <RevealOnScroll className='relative overflow-hidden bg-dark rounded-[22px] p-[72px_48px] text-center'>
          {/* Glow effect */}
          <div className='absolute -top-20 left-1/2 -translate-x-1/2 w-[520px] h-[320px] bg-[radial-gradient(ellipse,rgba(214,178,94,0.18)_0%,transparent_70%)] blur-[30px] animate-glow pointer-events-none' />

          <h2 className='relative font-heading font-extrabold text-[clamp(28px,4.4vw,46px)] leading-[1.14] tracking-[-0.02em] text-white mx-auto mb-[18px] max-w-[720px] text-balance'>
            Prêt à arrêter de perdre des clients ?
          </h2>
          <p className='relative text-lg leading-[1.6] text-[rgba(243,236,224,0.66)] mx-auto mb-9 max-w-[540px]'>
            Diagnostic gratuit. Sans engagement. Réponse directe sur WhatsApp.
          </p>

          <div className='relative flex flex-wrap justify-center gap-3.5'>
            <Link
              href={WHATSAPP_LINKS.diagnostic}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2.5 bg-whatsapp text-whatsapp-dark no-underline font-heading font-bold text-base py-4 px-[30px] rounded-[11px] hover:brightness-[1.06] hover:-translate-y-px transition-all'
            >
              <WhatsAppIcon />
              Diagnostic sur WhatsApp
            </Link>
            <Link
              href={WHATSAPP_LINKS.apercu}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-transparent text-gold-lighter no-underline font-heading font-bold text-base py-4 px-[30px] rounded-[11px] border border-[rgba(214,178,94,0.45)] hover:bg-[rgba(214,178,94,0.1)] transition-colors'
            >
              Voir un aperçu gratuit
            </Link>
          </div>

          <p className='relative mt-6 text-[14.5px] text-[rgba(243,236,224,0.55)]'>
            WhatsApp : +225 07 69 38 92 79 · Réponse directe, c&apos;est moi qui
            réponds.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
