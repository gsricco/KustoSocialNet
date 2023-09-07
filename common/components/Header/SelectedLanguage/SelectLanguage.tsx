import {useRouter} from "next/router";
import {useTranslation} from 'next-i18next'
import {StyledSelectLanguage} from "@/common/components/Header/Header.styled";
import {ChangeEvent} from "react";

export const SelectLanguage = () => {
  const router = useRouter()
  const { pathname, asPath, query } = router

  const {i18n} = useTranslation()


  const handleLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push({ pathname, query }, asPath, { locale: e.target.value }) 
  }

  return (
    <StyledSelectLanguage value={i18n.language == "ru" ? "ru" : "en"} onChange={handleLangChange}>
      <option value="en">&#127468;&#127463; English</option>
      <option value="ru">&#127479;&#127482; Русский</option>
    </StyledSelectLanguage>
  );
};

