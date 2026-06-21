import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { PROBLEMS, TARGET_AUDIENCES } from "@/lib/constants";

function ProblemCard({
  text,
  delay = 0,
  isDark = false,
}: {
  text: string;
  delay?: number;
  isDark?: boolean;
}) {
  if (isDark) {
    return (
      <RevealOnScroll
        delay={delay}
        className="bg-dark border border-dark rounded-[14px] p-6 flex items-center"
      >
        <p className="text-[15.5px] leading-[1.5] text-[#F3ECE0]">{text}</p>
      </RevealOnScroll>
    );
  }

  return (
    <RevealOnScroll
      delay={delay}
      className="bg-white border border-border rounded-[14px] shadow-[0_2px_8px_rgba(45,38,20,0.04)] p-6 flex gap-[13px] items-start"
    >
      <span className="flex-none text-gold-light font-heading font-extrabold text-xl leading-[1.1]">
        &ldquo;
      </span>
      <p className="text-[15.5px] leading-[1.5] text-text-primary">{text}</p>
    </RevealOnScroll>
  );
}

export function ProblemSection() {
  return (
    <section id="probleme" className="max-w-[1120px] mx-auto px-6 py-[72px]">
      {/* Header */}
      <RevealOnScroll className="text-center max-w-[680px] mx-auto mb-10">
        <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-[-0.02em] text-text-primary text-balance">
          Vous vous reconnaissez ?
        </h2>
      </RevealOnScroll>

      {/* Problem cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROBLEMS.map((problem, index) => (
          <ProblemCard
            key={index}
            text={problem.text}
            delay={index * 60}
          />
        ))}
      </div>
    </section>
  );
}

export function TargetAudienceSection() {
  return (
    <section id="pourqui" className="max-w-[1120px] mx-auto px-6 pb-[88px]">
      <RevealOnScroll className="bg-white border border-border rounded-[18px] shadow-[0_2px_8px_rgba(45,38,20,0.04)] p-10 text-center">
        <div className="font-heading font-bold text-[13px] tracking-[0.16em] uppercase text-gold mb-3.5">
          C&apos;est pour qui ?
        </div>
        <h2 className="font-heading font-extrabold text-[clamp(23px,3.4vw,32px)] leading-[1.15] tracking-[-0.02em] text-text-primary mb-3.5 text-balance">
          Pour tout métier qui a des clients à convaincre.
        </h2>
        <p className="mx-auto mb-[26px] max-w-[640px] text-[16.5px] leading-[1.6] text-text-muted text-pretty">
          Pas besoin de « vendre des produits » pour que ça vous serve. Vous
          avez juste besoin d&apos;arrêter de perdre des clients, du temps et de la
          crédibilité. Si on vous cherche ou si on vous écrit, c&apos;est pour vous.
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {TARGET_AUDIENCES.map((audience) => (
            <span
              key={audience}
              className="text-sm font-semibold text-text-secondary bg-cream border border-border rounded-full py-[9px] px-4"
            >
              {audience}
            </span>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
