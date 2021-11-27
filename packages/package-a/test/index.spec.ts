import { packageAindex } from "../src/index";

describe("index", () => {
  describe("packageAindex", () => {
    it("returns input", () => {
      const message = "moo";
      const result = packageAindex(message);

      expect(result).toMatch(message);
    });
  });
});
