import React, { FC, useState } from "react";
import { IntlProvider } from "react-intl";
import French from "../../translations/fr.json";
import English from "../../translations/en.json";

interface WrapperProps {
  children: JSX.Element;
}

interface LocaleContextInterface {
  locale: string;
  changeLanguage: (newLocale: string) => void;
}

var local_lang = localStorage.getItem("pf-lang");
let local = local_lang || navigator.language.split(/[-_]/)[0];
const exist_lang = ["fr", "en"];
if (!exist_lang.includes(local)) {
  local = "en";
}

localStorage.setItem("pf-lang", local);

export const Context = React.createContext<LocaleContextInterface>({ locale: "en", changeLanguage: () => null });

let data_lang: Record<string, string>;

if (local === "en") {
  data_lang = English;
}
if (local === "fr") {
  data_lang = French;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(data_lang);

  function changeLanguage(newLocale: string) {
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English);
    }
    if (newLocale === "fr") {
      setMessages(French);
    }
    localStorage.setItem("pf-lang", newLocale);
  }

  return (
    <React.StrictMode>
      <Context.Provider value={{ locale, changeLanguage }}>
        <IntlProvider locale={locale} messages={messages}>
          {children}
        </IntlProvider>
      </Context.Provider>
    </React.StrictMode>
  );
};

export default Wrapper;
