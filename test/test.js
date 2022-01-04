import { validateMac,
    validateMobile,
    validatePhone,
    validateIP,
    validateEmail,
    validateUrl } from "../src";

describe('unit test validate function', () => {
    test("it's a valid mac",() => {
        const mac = '18-C0-4D-39-CB-3E'
        expect(validateMac(mac)).toBe(true);
    })
    test("miss count",() => {
        const mac = 'C0-4D-39-CB-3E-d'
        expect(validateMac(mac)).toBe(false);
    })
    test("it's invalid mac",() => {
        const mac = 'C0sa-4D-39-CB-3E'
        expect(validateMac(mac)).toBe(false);
    })

    test("it's a valid ip", () => {
        const ip = '192.168.1.9'
        expect(validateIP(ip)).toBe(true)
    })

    test("it's a invalid ip", () => {
        const ip = '192.168.1'
        expect(validateIP(ip)).toBe(false)
    })
    test("it's a invalid ip", () => {
        const ip = '192.168.1.10000'
        expect(validateIP(ip)).toBe(false)
    })

    test("a valid http url", () => {
        const http = 'http://localhost:8080'
        expect(validateUrl(http)).toBe(true)
    })
    test("a invalid http url", () => {
        const http = 'htt://localhost:8080'
        expect(validateUrl(http)).toBe(false)
    })
    test("a valid https url", () => {
        const http = 'https://localhost:8080'
        expect(validateUrl(http)).toBe(true)
    })

    test('a valid mobile', () => {
        const mobile = '17368465779'
        expect(validateMobile(mobile)).toBe(true)
    })
    test('a invalid mobile', () => {
        const mobile = '1736846577'
        expect(validateMobile(mobile)).toBe(false)
    })
    test('start num is not correct', () => {
        const mobile = '1236846577'
        expect(validateMobile(mobile)).toBe(false)
    })

    test('correct phone', () => {
        const phone = '025-86569278'
        expect(validatePhone(phone)).toBe(true)

        const phone1 = '0255-86569278'
        expect(validatePhone(phone1)).toBe(true)
    })

    test('incorrect phone', () => {
        const phone = '02566-86569278'
        expect(validatePhone(phone)).toBe(false)

        const phone1 = '0255-865692780'
        expect(validatePhone(phone1)).toBe(false)
    })

    test('valid email', () => {
        const email = '373572461@qq.com'
        expect(validateEmail(email)).toBe(true)
    })
    test('invalid email', () => {
        const invalidEmail = '373572461qq.com'
        expect(validateEmail(invalidEmail)).toBe(false)

        const  invalidEmail2 = '@373572461@qq.com'
        expect(validateEmail(invalidEmail2)).toBe(false)
    })
})

