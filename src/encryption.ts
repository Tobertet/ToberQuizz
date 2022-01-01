import JSEncrypt from "jsencrypt";

const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCkddRvnK3ue8FYTK9waOR4Y845
1lqBIejLFKnLNYwHvMVDWUCHgVlmXanzSVuOhAnb8yE2eA84yO7Afue5KyzB2PPk
avOCvLxPuXBL7Ew4zsIIkT2ZS2wVEt+z9eZi7EqZQTmG5z8UmlM43sEvZJhhwVy5
J/dn9oMYBpnB7hJnFQIDAQAB
-----END PUBLIC KEY-----`;

const PRIVATE_KEY = `It's not going to be that easy, dude.`;

export const Encryption: JSEncrypt = new JSEncrypt();
Encryption.setPublicKey(PUBLIC_KEY);
