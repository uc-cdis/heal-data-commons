import Image from 'next/image';

const IconAnalyses = ({ className }: { className?: string }) => (
  <Image
    src="/icons/HealIcons/Icon-Analyses.svg"
    alt=""
    width={16}
    height={16}
    unoptimized
    className={className}
  />
);

export default IconAnalyses;
