import React, { ReactElement } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

interface BrandLogosProps {
  className?: string;
}

const BrandLogos = ({ className = '' }: BrandLogosProps): ReactElement => {
  return (
    <div className={classNames('brand-logos', { [`${className}`]: className })}>
      <div className="brand-logos__logo-container">
        <Image
          src="/assets/images/_logo-red-ventures.svg"
          alt="Red Ventures"
          title="Red Ventures"
          width={215}
          height={28}
          className="brand-logos__logo"
        />
      </div>
      <div className="brand-logos__logo-container mt-8 md:mt-12">
        <Image
          src="/assets/images/_logo-mymove.svg"
          alt="MYMOVE"
          title="MYMOVE"
          width={172}
          height={40}
          className="brand-logos__logo"
        />
      </div>
      <div className="brand-logos__logo-container mt-8 md:mt-12">
        <Image
          src="/assets/images/_logo-usps.svg"
          alt="USPS"
          title="USPS"
          width={199}
          height={24}
          className="brand-logos__logo"
        />
      </div>
      <div className="brand-logos__logo-container mt-8 md:mt-12">
        <Image
          src="/assets/images/_logo-allconnect.svg"
          alt="Allconnect"
          title="Allconnect"
          width={205}
          height={40}
          className="brand-logos__logo"
        />
      </div>
      <div className="brand-logos__logo-container mt-8 md:mt-12">
        <Image
          src="/assets/images/_logo-cnet.svg"
          alt="CNET"
          title="CNET"
          width={55}
          height={40}
          className="brand-logos__logo"
        />
      </div>
    </div>
  );
};

export default BrandLogos;
