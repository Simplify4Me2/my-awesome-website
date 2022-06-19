import { render } from '@testing-library/react';

import { Home } from './home';

jest.mock('./header');
jest.mock('./career-timeline');
jest.mock('./introduction-card');
jest.mock('./certificates');
jest.mock('./portfolio', () => ({
    Portfolio: (props: object) => `Portfolio ${JSON.stringify(props)}`
}));

describe("home", () => {
    it("renders", () => {
        const { container } = render(<Home />);

        expect(container).toMatchSnapshot();
    });
});