import { packageBindex } from "../src/index";

describe("index", () => {
  describe("packageBindex", () => {
    it("returns input", () => {
      const message = "moo";
      const result = packageBindex(message);

      expect(result).toMatch(message);
    });
  });
});
