var textSummary = require("./summary");

test('should summarize lorem ipsum', () => {
    expect(textSummary("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")).toEqual("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore")
});
test("should summarize modern major general", ()=>{
    expect(textSummary("I am the very model of a modern Major-General, I've information vegetable, animal, and mineral, I know the kings of England, and I quote the fights historical From Marathon to Waterloo, in order categorical; I'm very well acquainted, too, with matters mathematical, I understand equations, both the simple and quadratical, About binomial theorem I'm teeming with a lot o' news, (bothered for a rhyme) With many cheerful facts about the square of the hypotenuse.")).toEqual("I am the very model of a modern Major-General, I've information vegetable, animal, and mineral");
});