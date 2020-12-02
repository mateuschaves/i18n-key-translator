const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

module.exports = new LanguageTranslatorV3({
  version: '2018-04-05',
  authenticator: new IamAuthenticator({
    apikey: process.env.TRANSLATOR_IAM_APIKEY,
  }),
  serviceUrl: process.env.TRANSLATOR_URL,
});
