import { render } from "@testing-library/react";

import Footer from "./Footer";
import { describe } from "yargs";
import { it } from "node:test";
import { expect } from "vitest";

describe("Footer component", () => {
  it("renders correctly", () => {
    const { getByText, getByAltText } = render(<Footer />);

    // Check for the presence of specific text or elements in the Footer component
    const logoText = getByText("TastyDrop");
    const copyrightText = getByText(
      "Copyright © 2023. Tasty Drop. All rights reserved."
    );

    // You can also check for the presence of images using alt text
    const logoImage = getByAltText("logo");
    const riderGearImage = getByAltText("riderGear");
    const teamImage = getByAltText("team");

    // Assert that the elements are present in the rendered Footer
    expect(logoText).toBeInTheDocument();
    expect(copyrightText).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
    expect(riderGearImage).toBeInTheDocument();
    expect(teamImage).toBeInTheDocument();
  });
});
