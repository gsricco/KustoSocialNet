import {SelectLanguage} from "./SelectedLanguage/SelectLanguage";
import Image from "next/image";
import bell from '@/public/img/icons/initialBell.svg'
import {useRouter} from "next/router";
import {LogoStyle, StyledHeader} from "@/common/components/Header/Header.styled";

const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <StyledHeader>
      <LogoStyle onClick={handleClick} >KustoSocialNet</LogoStyle>
      <Image width={24} height={24} src={bell} alt={'bell'} />
      <SelectLanguage />
    </StyledHeader>
  );
};
export default Header


