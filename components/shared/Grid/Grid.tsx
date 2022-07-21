import React from 'react';
import classNames from 'classnames';

import type { GridProps } from './Grid.types';
import styles from './Grid.module.scss';

function Grid({ className, data }: GridProps) {
  return (
    <ul className={classNames(styles.root, className)}>
      {data.map((item) => (
        <li
          key={item.id}
          className={styles.item}
          id={item.id}
        >
          {Object.entries(item)
            .filter(([key]) => key !== 'id')
            .map(([key, value]) => (
              <div key={key} className={styles.value}>{value}</div>
            ))}
        </li>
      ))}
    </ul>
  );
}

export default Grid;
