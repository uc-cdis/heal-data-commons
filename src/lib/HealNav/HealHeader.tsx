import React from 'react';
import Image from 'next/image';
import navigationJSON from '../../../config/heal/navigation.json';

const { navigation } = navigationJSON;

const generateLinkClassNames = (i: number) => {
  let classNames = 'flex hover:underline items-center mt-2 ';
  classNames +=
    i === navigation.items.length - 1
      ? 'border-l-1 ml-4 lg:ml-3 pl-2 mr-1 lg:mr-6 sm:mt-0'
      : 'mr-2 sm:mt-0';
  return classNames;
};

const HealHeader: React.FC = () => {
  return (
    <div>
      <a
        href="#main-content"
        data-testid="skip-to-main"
        className="absolute -left-full focus:static text-heal-blue"
      >
        Skip to main content
      </a>
      <header data-testid="heal-header">
        <div className="bg-carousel-gradient h-2"></div>
        <div className="container mx-auto px-1 md:px-1 lg:px-6 py-4 text-xs">
          <div className="lg:flex justify-between">
            <a
              href={navigation.logo.href}
              className="flex  hover:underline justify-center mb-5 md:mb-0 lg:justify-normal"
            >
              <Image
                src={navigation.logo.src}
                alt={navigation.logo.alt}
                width={navigation.logo.width}
                height={navigation.logo.height}
                className="w-[60px] border-r-1 pr-3"
              />
              <div className="text-heal-dark_gray font-semibold text-base pl-3 mt-1">
                {navigation.title}
              </div>
            </a>
            <div className="flex flex-wrap justify-center lg:justify-normal mt-4 lg:mt-1">
              {navigation.items.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className={generateLinkClassNames(i)}
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="mr-2 ml-1 mt-[-2px] h-[16px] lg:ml-4"
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HealHeader;
