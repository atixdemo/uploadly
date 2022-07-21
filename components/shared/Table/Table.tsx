import React from 'react';
import classNames from 'classnames';

import type { TableProps } from './Table.types';

import styles from './Table.module.scss';

function Table({ className, data }: TableProps) {
  console.log(data[0])
  return (
    <table className={classNames(styles.root, className)}>
      <thead>
        <tr>
          {Object.keys(data[0])
            .filter((key) => key !== 'id')
            .map((key) => (
              <th key={key}>{key}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}id={item.id}>
            {Object.entries(item)
              .filter(([key]) => key !== 'id')
              .map(([key, value]) => (
                <td key={key}>{value}</td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
