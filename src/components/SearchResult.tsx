import React from "react";
import DividerLeft from "./DividerLeft";
import { WordData } from "../interfaces/Dictionary.type";

const SearchResult = ({ data }: { data: WordData[] }) => {
  const wordData = data[0];
  const handlePlay = () => {
    const phoneticWithAudio = wordData.phonetics.find((item) => item.audio);

    if (phoneticWithAudio) {
      const audio = new Audio(phoneticWithAudio.audio);
      audio.play();
    } else {
      console.log("No audio URL found");
    }
  };
  return (
    <div>
      <div className="mt-5 flex justify-between">
        <div className="word">
          <h2 className=" font-bold text-themeblack dark:text-white text-3xl">
            {wordData.word}
          </h2>
          <div className="pronunciation">
            <p className="text-purple text-md mt-2">
              {wordData && wordData.phonetics && wordData.phonetics[0]
                ? wordData.phonetics[0].text
                : ""}
            </p>
          </div>
        </div>
        <div className="sound-player">
          {wordData.phonetics.find((item) => item.audio) && (
            <button
              className="p-5 rounded-full bg-lightPurple hover:brightness-90 transition-all duration-200 active:brightness-75"
              onClick={handlePlay}
            >
              <p className="sr-only">Sound Player</p>
              <img src="/play-icon.svg" alt="sound-icon" />
            </button>
          )}
        </div>
      </div>

      {wordData.meanings.map((meaning, index) => (
        <React.Fragment key={index}>
          <DividerLeft name={meaning.partOfSpeech} />

          <h3 className="mt-5 text-lightGray font-light text-lg">Meaning</h3>
          <ul className="definitions list-disc marker:text-purple space-y-3 ml-6 my-5 text-gray-700 dark:text-white">
            {meaning.definitions.map((def, defIndex) => (
              <li key={defIndex}>{def.definition}</li>
            ))}
          </ul>
          {meaning.definitions[0]?.example && (
            <p className="example-text text-lightGray text-lg font-light">
              {meaning.definitions[0].example}
            </p>
          )}
        </React.Fragment>
      ))}

      {/* synonyms section */}
      <div className="synonyms-section flex mt-5 items-center">
        <h3 className=" text-lightGray font-light text-lg">Synonyms</h3>
        <h4 className="ml-6 font-bold text-lg text-purple">
          {wordData.meanings[0].synonyms.join(", ")}
        </h4>
      </div>

      <div className="flex-1 border-t border-gray-200 my-8 dark:border-gray-800" />
      <div className="source-section mb-8 ">
        <p className=" underline text-lightGray ">Source</p>
        <div className="source-link mt-1">
          {wordData.sourceUrls.map((url, urlIndex) => (
            <a
              key={urlIndex}
              href={url}
              className="underline flex gap-3 dark:text-white"
            >
              {url}
              <img src="/link.svg" alt="Link Icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
