import { render } from '@testing-library/react';

import { Button } from './ui-button';

describe('Button', () => {
  it('should render successfully', () => {
    const { getByText } = render(<Button>Howdy!</Button>);

    expect(getByText('Howdy!')).toBeTruthy();
  });
});
