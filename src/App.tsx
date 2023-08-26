import React from "react";
import MenuComponent from "./components/Menu";
import Toggle from "./components/Toggle";
import SearchInput from "./components/SearchInput";
import DividerLeft from "./components/DividerLeft";
function App() {
  return (
    <div className="absolute w-full h-full bg-cream dark:bg-black">
      <div className="mx-auto max-w-3xl md:my-20 px-5 ">
        <div className="flex justify-between">
          <div className="logo">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Dictionary App</span>
              <img
                className="h-8 w-auto"
                src="/book-icon.svg"
                alt="Book Logo"
              />
            </a>
          </div>
          <div className="options flex items-center ">
            <MenuComponent />
            <div className="divider-vertical w-[1px] h-1/2 bg-offWhite"></div>
            <Toggle />
            <img src="/half-moon.svg" className=" px-3" alt="moon-icon" />
          </div>
        </div>
        <SearchInput />
        <div className="mt-5 flex justify-between">
          <div className="word">
            <h2 className=" font-bold text-themeblack dark:text-white text-3xl">
              keyboard
            </h2>
            <div className="pronunciation">
              <p className="text-purple text-md mt-2">/ˈkiːbɔːd/</p>
            </div>
          </div>
          <div className="sound-player">
            <button className="p-5 rounded-full bg-lightPurple hover:brightness-90 transition-all duration-200 active:brightness-75">
              <p className="sr-only">Sound Player</p>
              <img src="/play-icon.svg" alt="sound-icon" />
            </button>
          </div>
        </div>
        {/* Divider with the title on the left */}
        <DividerLeft name="noun" />

        {/* Meaning Section */}
        <h3 className="mt-5 text-lightGray font-light text-lg">Meaning</h3>
        <ul className="definitions list-disc marker:text-purple space-y-3 ml-6 my-5 text-gray-700 dark:text-white">
          <li>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </li>
          <li>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ul>
        {/* synonyms section */}
        <div className="synonyms-section flex mt-5 items-center">
          <h3 className=" text-lightGray font-light text-lg">Synonyms</h3>
          <h4 className="ml-6 font-bold text-lg text-purple">
            electronic keyboard
          </h4>
        </div>

        <DividerLeft name="verb" />
        <h3 className="mt-5 text-lightGray font-light text-lg">Meaning</h3>
        <ul className="definitions list-disc marker:text-purple space-y-3 ml-6 my-5 text-gray-700 dark:text-white">
          <li>To type on a computer keyboard.</li>
        </ul>
        <p className="example-text text-lightGray text-lg font-light">
          "I can type many words on the Keyboard"
        </p>
        <div className="flex-1 border-t border-gray-200 my-8 dark:border-gray-800" />
        <div className="source-section mb-8 ">
          <p className=" underline text-lightGray ">Source</p>
          <div className="source-link mt-1">
            <a
              href="https://en.wiktionary.org/wiki/keyboard"
              className="underline flex gap-3 dark:text-white"
            >
              https://en.wiktionary.org/wiki/keyboard
              <img src="/link.svg" alt="Link Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
