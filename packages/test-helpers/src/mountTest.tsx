// https://github.com/ant-design/ant-design/blob/216f25c457/tests/shared/mountTest.tsx

import React from 'react';
import { render } from './utils';

// eslint-disable-next-line jest/no-export
export function mountTest(Component: React.ComponentType) {
  describe('mount and unmount', () => {
    it('component could be updated and unmount without errors', () => {
      const { unmount, rerender } = render(<Component />);

      expect(() => {
        rerender(<Component />);
        unmount();
      }).not.toThrow();
    });
  });
}
