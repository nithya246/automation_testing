function validateLogin(username, password) {

    return username === "admin" &&
           password === "1234";
}

test("Login should pass with correct credentials", () => {

    expect(validateLogin("admin", "1234"))
        .toBe(true);

});

test("Login should fail with wrong credentials", () => {

    expect(validateLogin("admin", "wrong"))
        .toBe(false);

});