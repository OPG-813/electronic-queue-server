module.exports = {
  SALT_LEN: 32,
  KEY_LEN: 64,
  SCRYPT_PARAMS: {
    N: 32768,
    r: 8,
    p: 1,
    maxmem: 64 * 1024 * 1024
  }
};
