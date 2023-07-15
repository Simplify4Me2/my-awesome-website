import { render } from "@testing-library/react";

import { Home } from "./home";

jest.mock("../components/header");
jest.mock("./my-toolkit", () => ({
  MyToolkit: (props: object) => `Portfolio ${JSON.stringify(props)}`,
}));
jest.mock("./introduction-card");
jest.mock("./certificates");
jest.mock("./portfolio", () => ({
    Portfolio: (props: object) => `Portfolio ${JSON.stringify(props)}`,
}));
jest.mock("./footer");

describe("home", () => {
  it("renders", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
