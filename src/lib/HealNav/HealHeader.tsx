import Image from 'next/image';
import nihLogo from '../../../public/images/nih-logo.png';
import discoveryIcon from '../../../public/icons/HealIcons/Icon-Discovery.svg';
import workspacesIcon from '../../../public/icons/HealIcons/Icon-Workspaces.svg';
import analysesIconNav from '../../../public/icons/HealIcons/Icon-Analyses-Nav.svg';
import profileIcon from '../../../public/icons/HealIcons/Icon-Profile.svg';
import helpIcon from '../../../public/icons/HealIcons/Icon-Help.svg';

const navLinks = [
  {
    text: 'Discovery',
    icon: discoveryIcon,
    iconClassNames: 'fill-current',
    href: 'https://healdata.org',
  },
  {
    text: 'Workspaces',
    icon: workspacesIcon,
    iconClassNames: 'fill-current',
    href: 'https://healdata.org',
  },
  {
    text: 'Example Analyses',
    icon: analysesIconNav,
    iconClassNames: 'fill-current',
    href: 'https://healdata.org',
  },
  {
    text: 'Profile',
    icon: profileIcon,
    iconClassNames: 'fill-current',
    href: 'https://healdata.org',
  },
  {
    text: 'Help',
    icon: helpIcon,
    iconClassNames: '',
    href: 'https://healdata.org',
  },
];

const generateLinkClassNames = (i: number) => {
  let classNames = 'hover:underline ';
  classNames +=
    i === navLinks.length - 1
      ? 'border-l-1 ml-4 lg:ml-3 pl-2 mr-1 lg:mr-6  mt-3 sm:mt-0'
      : 'mr-2 mt-3 sm:mt-0';
  return classNames;
};

const HealHeader: React.FC = () => {
  return (
    <header data-testid="heal-header">
      <div className="bg-carousel-gradient h-2"></div>
      <div className="container mx-auto px-1 md:px-1 lg:px-6 py-4 text-xs">
        <div className="sm:flex justify-between">
          <a
            href="https://healdata.org"
            className="flex  hover:underline justify-center mb-5 md:mb-0 sm:justify-normal"
          >
            <Image
              src={nihLogo}
              alt="NIH HEAL INITIATIVE"
              className="w-[60px] border-r-1 pr-3"
            />
            <div className="text-heal-dark_gray font-semibold text-base pl-3 mt-1">
              HEAL Data Platform
            </div>
          </a>

          <div className="flex flex-wrap justify-center sm:justify-normal mt-1 md:mt-1.5 lg:mt-1">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} className={generateLinkClassNames(i)}>
                <link.icon
                  className={`${link.iconClassNames} inline-block mr-2 ml-1 mt-[-2px] h-[16px] lg:ml-4`}
                />
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HealHeader;
