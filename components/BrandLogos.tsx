import React, { ReactElement } from 'react';
import classNames from 'classnames';
import LogoRedVentures from '../public/assets/images/_logo-red-ventures.svg';
import LogoMymove from '../public/assets/images/_logo-mymove.svg';
import LogoUsps from '../public/assets/images/_logo-usps.svg';
import LogoAllconnect from '../public/assets/images/_logo-allconnect.svg';
import LogoCnet from '../public/assets/images/_logo-cnet.svg';

interface BrandLogosProps {
  className?: string;
}

const BrandLogos = ({ className = '' }: BrandLogosProps): ReactElement => {
  return (
    <div className={classNames('brand-logos', { [`${className}`]: className })}>
      <div className="brand-logos__logo-container">
        <LogoRedVentures
          width={272}
          height={36}
          className="brand-logos__logo"
        />
      </div>
      <div className="brand-logos__logo-container mt-8 md:mt-12">
        <LogoMymove width={172} height={40} className="brand-logos__logo" />
      </div>
      <div className="brand-logos__logo-container mt-8 md:mt-12">
        <LogoUsps className="brand-logos__logo" width={199} height={24} />
      </div>
      <div className="brand-logos__logo-container mt-8 md:mt-12">
        <LogoAllconnect width={205} height={40} className="brand-logos__logo" />
      </div>
      <div className="brand-logos__logo-container mt-8 md:mt-12">
        <LogoCnet width={55} height={40} className="brand-logos__logo" />
      </div>
    </div>
  );
};

export default BrandLogos;
