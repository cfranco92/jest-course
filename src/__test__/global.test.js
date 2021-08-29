const text = "Hello World";

test('It must to have a text ', () => {
    expect(text).toMatch(/World/);
});