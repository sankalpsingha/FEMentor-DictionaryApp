import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const fonts = ["sans", "serif", "mono"];
type MenuComponentProps = {
  fontChange: (font: string) => void; // indicates fontChange is a Function that takes a string argument and returns nothing.
};

const MenuComponent: React.FC<MenuComponentProps> = ({ fontChange }) => {
  const [fontClass, setFontClass] = useState(() => {
    // Get initial font class from local storage, default to 'sans'
    return localStorage.getItem("fontClass") ?? "sans";
  });

  useEffect(() => {
    // Persist font class in local storage whenever it changes
    localStorage.setItem("fontClass", fontClass);
    fontChange(fontClass);
  }, [fontClass, fontChange]);

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-black dark:text-white px-3 py-2 text-sm font-semibold text-gray-900 ">
            {fontClass[0].toUpperCase() + fontClass.slice(1)}
            <ChevronDownIcon
              className="w-5 h-5 -mr-1 text-gray-400 dark:text-purple"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {fonts.map((font) => (
                <Menu.Item key={font}>
                  {({ active }) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setFontClass(font);
                        fontChange(font);
                      }}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm",
                        `font-${font}`,
                        fontClass === font ? "text-purple" : null // Highlight the current font
                      )}
                    >
                      {font[0].toUpperCase() + font.slice(1)}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MenuComponent;
