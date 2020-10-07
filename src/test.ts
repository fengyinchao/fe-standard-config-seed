import React from 'react';
const fn: (...args: unknown[]) => unknown = () => {
  // eslint-disable-next-line no-console
  console.log('hi', React);
};
fn(1, 2);
export { fn };
