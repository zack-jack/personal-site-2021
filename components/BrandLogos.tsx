import { ReactElement } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import LogoRedVentures from 'public/assets/images/_logo-red-ventures.svg';
import LogoMymove from 'public/assets/images/_logo-mymove.svg';
import LogoUsps from 'public/assets/images/_logo-usps.svg';
import LogoAllconnect from 'public/assets/images/_logo-allconnect.svg';
import LogoCnet from 'public/assets/images/_logo-cnet.svg';

interface BrandLogosProps {
  className?: string;
}

const BrandLogos = ({ className = '' }: BrandLogosProps): ReactElement => {
  return (
    <div className={classNames('brand-logos', { [`${className}`]: className })}>
      <Link href="https://www.redventures.com/">
        <a
          aria-label="Red Ventures"
          target="_blank"
          rel="noopener noreferrer"
          className="brand-logos__logo-link"
        >
          <LogoRedVentures
            width={272}
            height={36}
            className="brand-logos__logo"
          />
        </a>
      </Link>
      <Link href="https://www.mymove.com/">
        <a
          aria-label="MYMOVE"
          target="_blank"
          rel="noopener noreferrer"
          className="brand-logos__logo-link"
        >
          <LogoMymove width={172} height={40} className="brand-logos__logo" />
        </a>
      </Link>
      <Link href="https://www.usps.com/">
        <a
          aria-label="USPS"
          target="_blank"
          rel="noopener noreferrer"
          className="brand-logos__logo-link"
        >
          <LogoUsps className="brand-logos__logo" width={199} height={24} />
        </a>
      </Link>
      <Link href="https://www.allconnect.com/">
        <a
          aria-label="Allconnect"
          target="_blank"
          rel="noopener noreferrer"
          className="brand-logos__logo-link"
        >
          <LogoAllconnect
            width={205}
            height={40}
            className="brand-logos__logo"
          />
        </a>
      </Link>
      <Link href="https://www.cnet.com/">
        <a
          aria-label="CNET"
          target="_blank"
          rel="noopener noreferrer"
          className="brand-logos__logo-link"
        >
          <LogoCnet width={55} height={40} className="brand-logos__logo" />
        </a>
      </Link>
    </div>
  );
};

export default BrandLogos;
