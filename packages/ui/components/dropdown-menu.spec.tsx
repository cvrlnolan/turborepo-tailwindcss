import { render } from '@testing-library/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

describe('DropdownMenu', () => {
  it('should render successfully', async () => {
    const { getByText } = render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <span>Open</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem>One</DropdownMenuItem>
          <DropdownMenuItem>Two</DropdownMenuItem>
          <DropdownMenuItem>Three</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(getByText('Open')).toBeTruthy();
  });
});
