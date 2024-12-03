import ArrowIconSVG from '../../Assets/Icons/Icon-Arrow.svg';
import styles from './CarouselAnimations.module.css';

type SlideProps = {
  currentSlide: number;
  numberOfSlides: number;
  iterator: number;
  href: string;
  Icon: React.ElementType<{ className: string }>;
  text: string;
};

const Slide: React.FC<SlideProps> = ({
  currentSlide,
  numberOfSlides,
  iterator,
  href,
  Icon,
  text,
}: SlideProps) => {
  // Function to determine the class name based on the current slide index
  // used for sliding animations
  const getSlideClassName = (i: number) => {
    if (currentSlide === i) {
      return styles['current-slide'];
    } else if ((currentSlide === (i + 1) % numberOfSlides)){
      return styles['previous-slide'];
    } else {
      return styles['hidden-slide'];
    }
  };

  return (
    <div className={`absolute  ${getSlideClassName(iterator)}`}>
      <a
        href={href}
        className="text-white flex group text-center mx-1 px-1 hover:underline"
      >
        <span className="
          min-w-[32px] w-[32px]
          min-h-[32px] h-[32px]
          border-1
         border-white rounded-full
         flex items-center
         justify-center
         text-white">
          <Icon className="fill-current" />
        </span>
        <span className="pl-3 pr-1  mt-1">{text}</span>
        <span className="mr-2">
          <ArrowIconSVG className="inline-block fill-current mt-2 " />
        </span>
      </a>
    </div>
  );
};

export default Slide;
