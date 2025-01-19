// tests/hello.test.ts
import { sayHello } from "../src/hello";

test("sayHello returns 'Hello, World!'", () => {
  expect(sayHello()).toBe("Hello, World!");
});