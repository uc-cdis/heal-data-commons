import Image from 'next/image';
import gen3Logo from '../../../public/images/gen3.png';
import ctdsLogo from '../../../public/images/ctds-logo.png';
import footerNihLogo from '../../../public/images/footer-nih-logo.png';

const HealFooter: React.FC = () => {
  return (
    <footer
      data-testid="heal-footer"
      className="bg-heal-dark_background min-h-[212px] text-white "
    >
      <div className="container mx-auto px-6 py-12 flex justify-between">
        <div className="flex flex-wrap max-w-[400px] text-sm">
          <div className="mb-3">
            <a
              href="https://ctds.uchicago.edu/gen3"
              className="hover:opacity-85"
            >
              <Image
                src={gen3Logo}
                alt="GEN3"
                className="w-[20%] sm:w-[58px] border-r-1 border-heal-blue_accent pr-2 sm:pr-3 inline"
              />
            </a>
            <a href="https://ctds.uchicago.edu/" className="hover:opacity-85">
              <Image
                src={ctdsLogo}
                alt="Center for Translational Data Science at the University of Chicago"
                className="w-[40%] sm:w-[105px] border-r-1 border-heal-blue_accent px-2 sm:px-3 inline"
              />
            </a>
            <a href="https://heal.nih.gov/" className="hover:opacity-85">
              <Image
                src={footerNihLogo}
                alt="NIH HEAL INITIATIVE"
                className="w-[20%] sm:w-[45px] pl-2 sm:pl-3 inline"
              />
            </a>
          </div>
          <div>
            The HEAL Data Platform is funded by the NIH HEAL Initiative. NIH
            HEAL Initiative and Helping to End Addiction Long-term are service
            marks of the U.S. Department of Health and Human Services.
          </div>
          <div className="mt-3">
            <a
              href="https://heal.nih.gov/"
              className="underline hover:opacity-85"
            >
              NIH HEAL Initiative
            </a>
            <span className="hidden md:inline">&nbsp;|&nbsp;</span>
            <a
              href="https://hhs.responsibledisclosure.com/hc/en-us"
              className="underline hover:opacity-85 block sm:inline mt-3 sm:mt-0"
            >
              HHS Responsible Disclosure Form
            </a>
          </div>
        </div>

        <div className="block md:flex justify-between max-w-[225px] ml-8 md:ml-0 md:mr-8">
          <div className="flex-wrap mr-14 mb-8 md:mb-0">
            <div className="mb-3 font-bold">PLATFORM</div>
            <ul className="text-sm">
              <li>
                <a className="hover:underline" href="https://healdata.org/">
                  About HEAL
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/documentation/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-wrap">
            <div className="mb-3 font-bold">HELP</div>
            <ul className="text-sm">
              <li>
                <a className="hover:underline" href="/documentation">
                  Documentation
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/documentation/faqs">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HealFooter;
