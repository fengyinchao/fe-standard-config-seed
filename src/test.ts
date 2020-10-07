import * as L from 'lodash';
const fn: (...args: unknown[]) => unknown = () => {
  // eslint-disable-next-line no-console
  console.log('hi lodash', L.pick({ test: 1 }, 'test'));
};
fn(1, 2);
export { fn };
