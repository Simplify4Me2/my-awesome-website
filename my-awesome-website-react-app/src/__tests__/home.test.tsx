import { render } from "@testing-library/react";

import { Home } from "../home/home";

jest.mock("../components/header");
jest.mock("../home/my-toolkit", () => ({
  MyToolkit: (props: object) => `Portfolio ${JSON.stringify(props)}`,
}));
jest.mock("../home/introduction-card");
jest.mock("../home/certificates");
jest.mock("../home/portfolio", () => ({
    Portfolio: (props: object) => `Portfolio ${JSON.stringify(props)}`,
}));
jest.mock("../home/footer");

describe("home", () => {
  it("renders", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
