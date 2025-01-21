import Image from 'next/image';
import logo from '../../../public/images/logo.png';

const HealHeader: React.FC = () => {
  return (
    <>
      <div className="bg-carousel-gradient h-2"></div>
      <div className="container mx-auto px-6 py-2">
        <div className="flex flex-wrap">
          <Image src={logo} alt="" className="w-10 border-r-1 pr-3" />
          <div className="text-heal-medium_gray font-semibold text-lg pl-3">
            HEAL Data Platform
          </div>
        </div>
      </div>
    </>
  );
};

export default HealHeader;
