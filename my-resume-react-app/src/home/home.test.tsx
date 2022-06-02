import React from 'react';
import { render } from '@testing-library/react';

import { Home } from './home';

jest.mock('./header');
jest.mock('./career-timeline');
jest.mock('./introduction-card');
jest.mock('./certificates');
jest.mock('./portfolio');

describe("home", () => {
    it("renders", () => {
        const { container } = render(<Home />);

        expect(container).toMatchSnapshot();
    });
});