
/**
 * AES解密
 * @param k 密钥 
 * @param iv 偏移量
 * @param data 数据
 * @returns 待加密数据 
 */
export function AESdecrypt(k:string,iv:string,data:string): string{};

/**
 * AES加密
 * @param k 密钥 
 * @param iv 偏移量
 * @param data 待解密的数据
 */
export function AESencrypt(k:string,iv:string,data:string) : string{};