import { Button } from '../Button';

import styles from './styles.module.scss';

export const Todo: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div>
        <strong>Todo title</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
      <Button>Excluir</Button>
    </div>
  );
};
