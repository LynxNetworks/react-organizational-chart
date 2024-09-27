import * as React from 'react';
import { css, cx } from '@emotion/css';
import type { ReactNode, ReactElement } from 'react';

export interface TreeNodeProps {
  /**
   * The node label
   * */
  label: ReactNode;
  placeholder?: boolean;
  className?: string;
  children?: ReactElement | ReactElement[];
}

const verticalLine = css`
  content: '';
  position: absolute;
  top: 0;
  height: var(--tree-line-height);
  box-sizing: border-box;
`;

const childrenContainer = css`
  display: flex;
  padding-inline-start: 0;
  margin: 0;
  padding-top: var(--tree-line-height);
  position: relative;

  ::before {
    ${verticalLine};
    left: 50%;
    width: 0;
    border-left: var(--tree-line-width) solid var(--tree-line-color);
  }
`;

const childrenContainerHolder = css`
  display: flex;
  padding-inline-start: 0;
  margin: 0;
  padding-top: var(--tree-line-height);
  position: relative;

  ::before {
    ${verticalLine};
    left: 50%;
    width: 0;
    border-left: var(--tree-line-width) solid var(--tree-line-color-placeholder);
  }
`;

const node = css`
  flex: auto;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: var(--tree-line-height) var(--tree-node-padding) 0
    var(--tree-node-padding);
`;

const nodeLines = css`
  ::before,
  ::after {
    ${verticalLine};
    right: 50%;
    width: 50%;
    border-top: var(--tree-line-width) solid var(--tree-line-color);
  }
  ::after {
    left: 50%;
    border-left: var(--tree-line-width) solid var(--tree-line-color);
  }

  :only-of-type {
    padding: 0;
    ::after,
    :before {
      display: none;
    }
  }

  :first-of-type {
    ::before {
      border: 0 none;
    }
    ::after {
      border-radius: var(--tree-line-border-radius) 0 0 0;
    }
  }

  :last-of-type {
    ::before {
      border-right: var(--tree-line-width) solid var(--tree-line-color);
      border-radius: 0 var(--tree-line-border-radius) 0 0;
    }
    ::after {
      border: 0 none;
    }
  }
`;

const nodeLinesHolder = css`
  ::before,
  ::after {
    ${verticalLine};
    right: 50%;
    width: 50%;
    border-top: var(--tree-line-width) solid var(--tree-line-color-placeholder);
  }
  ::after {
    left: 50%;
    border-left: var(--tree-line-width) solid var(--tree-line-color-placeholder);
  }

  :only-of-type {
    padding: 0;
    ::after,
    :before {
      display: none;
    }
  }

  :first-of-type {
    ::before {
      border: 0 none;
    }
    ::after {
      border-radius: var(--tree-line-border-radius) 0 0 0;
    }
  }

  :last-of-type {
    ::before {
      border-right: var(--tree-line-width) solid
        var(--tree-line-color-placeholder);
      border-radius: 0 var(--tree-line-border-radius) 0 0;
    }
    ::after {
      border: 0 none;
    }
  }
`;

interface TreeNodeData extends Object {}

function TreeNode({ children, label, placeholder, className }: TreeNodeProps) {
  var AllHolders = true;
  if (React.Children.count(children) > 0) {
    React.Children.forEach(children, (child) => {
      if (child != null) if (!child.props.placeholder) AllHolders = false;
    });
  }

  return (
    <li
      className={
        placeholder
          ? cx(node, nodeLinesHolder, className)
          : cx(node, nodeLines, className)
      }
    >
      {label}
      {React.Children.count(children) > 0 && (
        <ul
          className={AllHolders ? childrenContainerHolder : childrenContainer}
        >
          {children}
        </ul>
      )}
    </li>
  );
}

export default TreeNode;
