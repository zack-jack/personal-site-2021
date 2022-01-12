import { ReactElement } from 'react';
import classNames from 'classnames';

interface EmojiProps {
  label: string;
  symbol: string;
  className?: string;
}

const Emoji = ({ label, symbol, className = '' }: EmojiProps): ReactElement => (
  <span
    className={classNames('c-emoji', { [`${className}`]: className })}
    role="img"
    aria-label={label}
  >
    {symbol}
  </span>
);

export default Emoji;
