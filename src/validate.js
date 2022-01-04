/**
 * @Date 2022/01/04
 * @Author Varus
 * @Description: 验证MAC地址
 *
 */
export function validateMac(mac) {
    return /^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i.test(mac)
}

/**
 * @Date 2022/01/04
 * @Author Varus
 * @Description: 验证IP地址
 *
 */
export function validateIP(ip) {
    return /^((25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(25[0-5]|2[0-4]\d|1?\d?\d)$/.test(ip)
}


/**
 * @Date 2022/01/04
 * @Author Varus
 * @Description: 验证邮箱地址
 *
 */
export function validateEmail (emailAddress) {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(emailAddress)
}


/**
 * @Date 2022/01/04
 * @Author Varus
 * @Description: 验证电话号码
 *
 */
export function validatePhone (s) {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}


/**
 * @Date 2022/01/04
 * @Author Varus
 * @Description: 验证是否为手机号
 *
 */
export function validateMobile(mobileNum) {
    return /^1[3-9]\d{9}$/.test(mobileNum)
}


/**
 * @Date 2022/01/04
 * @Author Varus
 * @Description: 是否为URl 只验证 是否为http|https 开头
 *
 */
export function validateUrl (url) {
    return /^http[s]?:\/\/.*/.test(url)
}
