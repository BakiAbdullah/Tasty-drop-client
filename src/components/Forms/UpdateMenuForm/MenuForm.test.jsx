import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MenuForm from "./MenuForm";

// Mock the axios.post and axios.put functions
jest.mock("axios", () => ({
  post: jest.fn(),
  put: jest.fn(),
}));

// Mock the useAuth hook
jest.mock("../../../api/useAuth", () => ({
  useAuth: jest.fn(() => ({
    user: { email: "test@example.com" },
  })),
}));

describe("MenuForm Component", () => {
  it("renders without errors", () => {
    render(<MenuForm />);
    // Add your assertions here, e.g., check if certain elements are present.
  });

  it("submits the form with valid data", async () => {
    render(<MenuForm />);

    // Mock axios.post to return a successful response
    axios.post.mockResolvedValue({
      data: { success: true },
    });

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText("Menu item name"), {
      target: { value: "Test Item" },
    });
    // Add similar fireEvent calls for other form fields

    // Submit the form
    fireEvent.click(screen.getByText("Update Menu Item"));

    // Wait for the form submission to complete
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1); // Ensure axios.post was called
      expect(
        screen.getByText("Menu item updated successfully!")
      ).toBeInTheDocument();
    });
  });

  it("displays error message on form submission failure", async () => {
    render(<MenuForm />);

    // Mock axios.post to return an error response
    axios.post.mockRejectedValue(new Error("Failed to update menu item."));

    // Fill out the form fields

    // Submit the form
    fireEvent.click(screen.getByText("Update Menu Item"));

    // Wait for the form submission to complete
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1); // Ensure axios.post was called
      expect(
        screen.getByText("Failed to update menu item.")
      ).toBeInTheDocument();
    });
  });

  // Add more test cases for edge cases and validations
});
