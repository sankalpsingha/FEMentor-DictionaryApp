type Phonetic = {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: License;
};

type Definition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

type License = {
  name: string;
  url: string;
};

export type WordData = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
};
