import React, { ReactElement, ReactNode } from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import Link from 'next/link';

type ArrowEnum = 'right' | 'top-right' | 'down' | '';
type ColorEnum = 'primary' | 'secondary' | 'tertiary';

interface AppLinkProps {
  href: string;
  children: ReactNode;
  arrow?: ArrowEnum;
  className?: string;
  color?: ColorEnum;
  inline?: boolean;
}

const AppLink = ({
  href,
  children,
  arrow = '',
  className = '',
  color = 'primary',
  inline = false,
}: AppLinkProps): ReactElement => {
  return (
    <Link href={href}>
      <a
        className={classNames('c-link', {
          [`${className}`]: className,
          'c-link--inline': inline,
          'c-link--secondary': color === 'secondary',
          'c-link--tertiary': color === 'tertiary',
        })}
      >
        {children}
        {arrow && (
          <ArrowRightIcon
            className={classNames('w-4 h-4 ml-2', {
              '-rotate-45': arrow === 'top-right',
              'rotate-90': arrow === 'down',
            })}
          />
        )}
      </a>
    </Link>
  );
};

export default AppLink;
