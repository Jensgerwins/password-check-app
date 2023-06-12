/// <reference types="jest"/>

import { App, pwequal } from "./lib";



test("pwequal should return false ", () => {
    const result = pwequal("abc", "123");

    expect(result).toBe(true);
})