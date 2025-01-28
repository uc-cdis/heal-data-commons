import React from 'react';
import Image from 'next/image';
import photoDivider1 from './../../Assets/Images/photo-divider-1.webp';
import photoDivider2 from './../../Assets/Images/photo-divider-2.webp';
import photoDivider3 from './../../Assets/Images/photo-divider-3.webp';
import photoDivider4 from './../../Assets/Images/photo-divider-4.webp';
import photoDivider5 from './../../Assets/Images/photo-divider-5.webp';

const PhotoDivider: React.FC = () => {
  return (
    <div data-testid="photo-divider" className="photo-divider py-4 mt-6">
      <div className="flex justify-between gap-4">
        <div className="w-1/3 md:w-1/4 lg:w-1/5">
          <Image
            src={photoDivider1}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/3 md:w-1/4 lg:w-1/5">
          <Image
            src={photoDivider2}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/3 md:w-1/4 lg:w-1/5">
          <Image
            src={photoDivider3}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden w-1/4 md:block lg:w-1/5">
          <Image
            src={photoDivider4}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden lg:block lg:w-1/5">
          <Image
            src={photoDivider5}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDivider;
