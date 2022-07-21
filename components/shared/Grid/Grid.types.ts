import type { ReactNode } from 'react';

type Item = {
  id: string;
  [P: string]: string | ReactNode;
};

export type GridProps = {
  className?: string;
  data: Item[];
};
