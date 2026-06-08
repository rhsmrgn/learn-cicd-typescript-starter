import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

const fakeHeader: IncomingHttpHeaders = { authorization: undefined };
const stillNullHeader: IncomingHttpHeaders = { authorization: "too short" };
const realHeader: IncomingHttpHeaders = {
  authorization: "hey i think i'm long enough",
};

describe("getAPIKey", () => {
  test("check if function returns null on undefined", () => {
    expect(getAPIKey(fakeHeader)).toBeNull();
  });

  test("check API length", () => {
    expect(getAPIKey(stillNullHeader)).toBeNull();
  });

  test("api is long enough", () => {
    expect(getAPIKey(realHeader)).toBeNull();
  });
});
