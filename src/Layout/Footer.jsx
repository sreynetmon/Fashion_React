
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import Logo from '../assets/image/logo.jpg'

export default function Component() {
  return (
    <Footer container>
      <div className="container">
        <div className="w-full justify-around flex sm:flex-col md:flex-row items-center">
            <img src={Logo} alt="" className="mx-auto h-20 w-auto ml-13" />
          <FooterLinkGroup className="flex flex-wrap items-center">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Fashion" year={2022} className="item-center" />
      </div>
    </Footer>
  );
}
