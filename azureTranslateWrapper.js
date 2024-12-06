
const TextTranslationClient = require("@azure-rest/ai-translation-text").default,
  { isUnexpected } = require("@azure-rest/ai-translation-text");

require("dotenv").config();

const endpoint = process.env["ENDPOINT"];
const apiKey = process.env["TEXT_TRANSLATOR_API_KEY"];
const region = process.env["TEXT_TRANSLATOR_REGION"];

async function translate(text, language) {
  console.log("== Simple translate sample ==");

  const translateCedential = {
    key: apiKey,
    region,
  };
  const translationClient = TextTranslationClient(endpoint, translateCedential);

  const inputText = [{ text: text }];
  const translateResponse = await translationClient.path("/translate").post({
    body: inputText,
    queryParameters: {
        //'api-version': "3.0",
      to: language,
      from: "en",
    },
  });

  if (isUnexpected(translateResponse)) {
    throw translateResponse.body.error;
  }

  const translations = translateResponse.body;
  for (const translation of translations) {
    console.log(
      `Text was translated to: '${translation?.translations[0]?.to}' and the result is: '${translation?.translations[0]?.text}'.`,
    );
  }

  return new Promise((resolve) => resolve(translations));
}

module.exports = { translate };

