import Validator from "../js/Validator";

test.each([
    ['Angry_Hunter-309k', true],
    ['-Angry_Hunter-309k', false],
    ['_Angry_Hunter-309k', false],
    ['4Angry_Hunter-309k', false],
    ['Angry_Hunter-309k-', false],
    ['Angry_Hunter-309k_', false],
    ['Angry_Hunter-309k7', false],
    ['Angry_Hunter-3069k', false],
    ['Злой_Hunter-309k', false],
    ['@#,.;:*(){]&^%!?/', false]
])(('validation username'), (userName, expected) => {
    const userNameValidator = new Validator(userName);
    const result = userNameValidator.validateUsername();

    expect(result).toBe(expected)
});
