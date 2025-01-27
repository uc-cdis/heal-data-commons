import Image from 'next/image';
<<<<<<< HEAD
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
    i === navLinks.length - 1 ? 'border-l-1 ml-5 pl-2 mr-2' : 'mr-3';
  return classNames;
};
=======
import logo from '../../../public/images/logo.png';
>>>>>>> 58ce38d (feat(homepageHeader): initial commit)

const HealHeader: React.FC = () => {
  return (
    <>
      <div className="bg-carousel-gradient h-2"></div>
<<<<<<< HEAD
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between">
          <a
            href="https://healdata.org"
            className="flex flex-wrap hover:underline"
          >
            <Image
              src={nihLogo}
              alt="NIH HEAL INITIATIVE"
              className="w-[60px] border-r-1 pr-3"
            />
            <div className="text-heal-dark_gray font-semibold text-lg pl-3">
              HEAL Data Platform
            </div>
          </a>

          <div className="flex flex-wrap">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} className={generateLinkClassNames(i)}>
                <link.icon
                  className={`${link.iconClassNames} inline-block mr-3 ml-1 mt-[-2px]`}
                />
                {link.text}
              </a>
            ))}
=======
      <div className="container mx-auto px-6 py-2">
        <div className="flex flex-wrap">
          <Image src={logo} alt="" className="w-10 border-r-1 pr-3" />
          <div className="text-heal-medium_gray font-semibold text-lg pl-3">
            HEAL Data Platform
>>>>>>> 58ce38d (feat(homepageHeader): initial commit)
          </div>
        </div>
      </div>
    </>
  );
};

export default HealHeader;
