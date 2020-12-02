require('dotenv').config();
const fs = require('fs');
const origin_file = require('./files/pt_br.json');
const translator = require('./service/translator');

const origin_language = 'pt-br';
const target_language = 'en';
const target_path_file = './en_us.json';

async function Main() {
  let strings_translated = {};
  const strings = origin_file.translation;
  await Promise.all(Object.keys(strings).map(async key => {

    const { result: { translations } } = await translator.translate({
      source: origin_language,
      target: target_language,
      text: strings[key],
    });
    const [{ translation }] = translations;
    strings_translated = { ...strings_translated, [key]: translation };
  }));
  fs.writeFileSync(target_path_file, JSON.stringify(strings_translated));
};

Main();