import { cn } from '@/lib/utils';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { BorderBeam } from '@/components/ui/border-beam';

const HeroSection = ({
    title = 'default title',
    subtitle = 'default subtitle',
}) => {
  return (
    <section className="border-border-primary relative mb-12 overflow-hidden rounded-xl border-[1px] border-solid p-16">
      <AnimatedGridPattern
        numSquares={10}
        maxOpacity={0.2}
        duration={3}
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] z-0 h-[200%] skew-y-12',
        )}
      />

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center gap-2">
        <div className="rounded-full border border-gray-300 bg-gray-50">
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 text-center text-[10px] transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 md:text-[13px]">
            <span>{subtitle}</span>
          </AnimatedShinyText>
        </div>
        <h1 className="m-auto mb-4 mt-6 text-center text-[30px] font-bold leading-tight lg:text-[64px]">
          {title}
        </h1>
      </div>

      <BorderBeam duration={8} size={100} />
    </section>
  );
};

export default HeroSection;
