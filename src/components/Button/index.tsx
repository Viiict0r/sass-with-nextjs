import { useState } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

export const Button: React.FC = ({ children }): JSX.Element => {
  const [isFocused, setFocused] = useState(false);

  return (
    <div className={cx(styles.button, isFocused && styles.focused)}>
      <button onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
        {children}
      </button>
    </div>
  );
};
