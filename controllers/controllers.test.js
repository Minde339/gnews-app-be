jest.mock("../models/searchedModel", () => jest.fn());
jest.mock("../models/clickedModel", () => jest.fn());

const Searched = require("../models/searchedModel");
const Clicked = require("../models/clickedModel");
const { createSearched } = require("./searchedController");
const { createClicked } = require("./clickedController");

const createResponse = () => ({
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
});

describe("createSearched", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("saves the search and returns the saved document", async () => {
    const savedSearch = { searchedValue: "technology" };
    const save = jest.fn().mockResolvedValue(savedSearch);
    Searched.mockImplementation(() => ({ save }));
    const response = createResponse();

    await createSearched({ body: { searchedValue: "technology" } }, response);

    expect(Searched).toHaveBeenCalledWith({ searchedValue: "technology" });
    expect(save).toHaveBeenCalledTimes(1);
    expect(response.status).toHaveBeenCalledWith(201);
    expect(response.json).toHaveBeenCalledWith({
      status: "success",
      data: { savedSearch },
    });
  });

  test("returns a failure response when saving fails", async () => {
    const save = jest.fn().mockRejectedValue(new Error("database unavailable"));
    Searched.mockImplementation(() => ({ save }));
    const response = createResponse();

    await createSearched({ body: { searchedValue: "technology" } }, response);

    expect(response.status).toHaveBeenCalledWith(404);
    expect(response.json).toHaveBeenCalledWith({
      status: "failed",
      message: "fail",
    });
  });
});

describe("createClicked", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("saves the clicked URL and returns the saved document", async () => {
    const savedUrl = { clickedUrl: "https://example.com/article" };
    const save = jest.fn().mockResolvedValue(savedUrl);
    Clicked.mockImplementation(() => ({ save }));
    const response = createResponse();

    await createClicked(
      { body: { clickedUrlData: "https://example.com/article" } },
      response
    );

    expect(Clicked).toHaveBeenCalledWith({
      clickedUrl: "https://example.com/article",
    });
    expect(save).toHaveBeenCalledTimes(1);
    expect(response.status).toHaveBeenCalledWith(201);
    expect(response.json).toHaveBeenCalledWith({
      status: "success",
      data: { savedUrl },
    });
  });

  test("returns a failure response when saving fails", async () => {
    const save = jest.fn().mockRejectedValue(new Error("database unavailable"));
    Clicked.mockImplementation(() => ({ save }));
    const response = createResponse();

    await createClicked(
      { body: { clickedUrlData: "https://example.com/article" } },
      response
    );

    expect(response.status).toHaveBeenCalledWith(404);
    expect(response.json).toHaveBeenCalledWith({
      status: "failed",
      message: "fail",
    });
  });
});