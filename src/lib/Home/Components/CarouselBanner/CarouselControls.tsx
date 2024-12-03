type CarouselControlsProps = {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  slideData: {
    href: string;
    icon: React.ElementType<{ className: string }>;
    text: string;
  }[];
  advanceToNextSlide: () => void;
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
};

const CarouselControls = ({
  isPlaying,
  setIsPlaying,
  slideData,
  advanceToNextSlide,
  currentSlide,
  setCurrentSlide,
}: CarouselControlsProps) => {
  const togglePlayPause = () => {
    setIsPlaying(isPlaying ? false : true);
  };

  return (
    <div
      className="
            carousel-controls
            absolute bottom-4 left-1/2
            transform -translate-x-1/2
            flex items-center space-x-4
        "
    >
      {/* Play/Pause Button */}
      <button
        className={`
            ${!isPlaying && 'pb-[1px]'}
            hover:opacity-90
            h-[12px] w-[12px]
          border-white
            rounded-full
            flex
            items-center
            justify-center
          bg-white
            text-xs
          text-heal-carousel_button
        `}
        aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
        onClick={() => {
          togglePlayPause();
          if (!isPlaying) advanceToNextSlide();
        }}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>

      {/* Slide Indicators */}
      <div className="flex space-x-2">
        {slideData.map((_: object, i: number) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`
                w-3
                h-3
                rounded-full
                hover:opacity-90
                border border-white
                ${i === currentSlide ? 'bg-white' : 'bg-transparent'}
            `}
            onClick={() => {
              setCurrentSlide(i);
              setIsPlaying(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default CarouselControls;
