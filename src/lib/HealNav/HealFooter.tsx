import React from 'react';
import Image from 'next/image';
import footerJSON from '../../../config/heal/footer.json';

const { healFooter } = footerJSON;

const HealFooter: React.FC = () => {
  return (
    <footer
      data-testid="heal-footer"
      className="bg-heal-dark_background min-h-[212px] text-white "
    >
      <div className="container mx-auto px-6 py-12 flex justify-between">
        {/* Left Section */}
        <div className="flex flex-wrap max-w-[400px] text-sm">
          <div className="mb-3">
            {healFooter.leftSection.icons.map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-85">
                <Image
                  src={item.icon}
                  height={item.height}
                  width={item.width}
                  alt={item.alt}
                  className={`border-heal-blue_accent
                    ${item.className}`}
                />
              </a>
            ))}
          </div>
          <div>{healFooter.leftSection.description}</div>
          <div className="mt-3">
            {healFooter.leftSection.linkSet.map((item, i) => (
              <React.Fragment key={i}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1 md:inline md:mt-0 underline hover:opacity-85"
                >
                  {item.text}
                </a>
                {i < healFooter.leftSection.linkSet.length - 1 && (
                  <span className="hidden md:inline">&nbsp;|&nbsp;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div className="block md:flex justify-between max-w-[225px] ml-8 md:ml-0 md:mr-8">
          {healFooter.rightSection.columns.map((col, i) => (
            <div className="flex-wrap mr-14 mb-8 md:mb-0" key={i}>
              <div className="mb-3 font-bold uppercase">{col.title}</div>
              <ul className="text-sm">
                {col.linkSet.map((link, iterator) => (
                  <li key={iterator}>
                    <a className="hover:underline" href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default HealFooter;
