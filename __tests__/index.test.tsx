import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/pages/index";
import { getDataFromApi } from "../utils/getDataFromApi";
import { usersList } from "../__mocks__/usersList";
import { albumsList } from "../__mocks__/albumsList";

jest.mock("../utils/getDataFromApi");
jest.mock("next/router", () => require("next-router-mock"));

describe("Home", () => {
  beforeEach(() => {
    const localStorageMock = (() => {
      const store = {
        users: JSON.stringify(usersList),
      };
      return {
        getItem(key: string) {
          return store[key as keyof typeof store] || null;
        },
      };
    })();

    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    });
  });

  afterEach(() => jest.clearAllMocks());

  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Albums & Photos App/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("should render list of albums", async () => {
    (getDataFromApi as jest.Mock).mockResolvedValue(albumsList);

    render(<Home />);

    await waitFor(() => expect(getDataFromApi).toHaveBeenCalledTimes(1), {
      timeout: 2000,
    });
  });
});
