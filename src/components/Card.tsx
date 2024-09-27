import * as React from 'react';
import { css, cx } from '@emotion/css';
import type { ReactNode } from 'react';

export interface CardProps {
  /**
   * The node label
   * */
  className?: string;
  children?: ReactNode;
}

function TreeCard({ children, className }: CardProps) {
  return (
    <div
      className={cx(
        className,
        css`
          padding: 5px;
          background-color: white;
          border-radius: 8px;
          display: inline-block;
          border: 1px solid #c8ced3;
        `
      )}
    >
      {children}
    </div>
  );
}

export default TreeCard;
