import React from 'react';
import MediaQuery from 'react-responsive';

import {
  BolderText,
  FbContent,
  FooterContent,
  IconLr,
  SpecialFooter,
  SpecialFooterSideLeft,
  SpecialFooterSideRight,
  SpecialFooterWrapperList,
  SpecialFooterWrapperLogos,
  SpecialLinks,
  SpecialLogoMain,
  SpecialParagraph,
  SpecialSocialNetworks,
  TextDescriptive,
  TwitterContent,
} from './style';

import Facebook from '../../shared/assets/facebook.png';
import LogosFooter from '../../shared/assets/sprite_logos_Footer.png';
import Twitter from '../../shared/assets/twitter.png';

export const Footer = () => {
  return (
    <FooterContent>
      <SpecialFooter>
        <SpecialFooterSideLeft>
          <SpecialLogoMain
            src="https://cdn.larepublica.pe/images/content/default/newHome/larepublica-01.svg"
            alt="LaRepública"
            width="213"
            height="34"
          />
          <SpecialParagraph>
            <BolderText>Grupo La República </BolderText>
            <TextDescriptive>Todos los Derechos Reservados © 2021</TextDescriptive>
          </SpecialParagraph>
          <SpecialParagraph>
            <TextDescriptive>
              <BolderText>Director: </BolderText>Gustavo Mohme Seminario
            </TextDescriptive>
            <TextDescriptive>
              <BolderText>Editor Responsable: </BolderText>Rider Bendezú
            </TextDescriptive>
          </SpecialParagraph>
          <SpecialSocialNetworks>
            <FbContent href="https://facebook.com/larepublicape" target="_blank">
              <img src={Facebook} alt="facebook" width="20" height="18" />
            </FbContent>
            <TwitterContent href="https://twitter.com/larepublica_pe" target="_blank">
              <img src={Twitter} alt="twitter" width="16" height="18" />
            </TwitterContent>
          </SpecialSocialNetworks>
          <SpecialLinks>
            <a href="https://larepublica.pe/terminos-de-uso/" target="_blank">
              Términos y condiciones
            </a>
            <a href="https://larepublica.pe/elecciones/" target="_blank">
              Política de privacidad
            </a>
            <a href="https://larepublica.pe/mapa-sitio/" target="_blank">
              Mapa de sitio
            </a>
            <a href="https://larepublica.pe/contactenos/" target="_blank">
              Contáctenos
            </a>
          </SpecialLinks>
        </SpecialFooterSideLeft>
        <MediaQuery minWidth={1100}>
          <SpecialFooterSideRight>
            <b>Visita nuestros otros Medios Digitales</b>
            <SpecialFooterWrapperLogos>
              <IconLr />
              <a href="https://rtv.pe/" target="_blank"></a>
              <a href="https://libero.pe/" target="_blank"></a>
              <a href="https://elpopular.pe/" target="_blank"></a>
              <a href="https://wapa.pe/" target="_blank"></a>
              <a href="https://aweita.larepublica.pe/" target="_blank"></a>
              <a href="https://buenazo.pe/" target="_blank"></a>
              <a href="https://cuponidad.pe/" target="_blank"></a>
              <a href="https://perubazar.pe/" target="_blank"></a>
              <a href="https://larepublica.pe/" target="_blank"></a>
            </SpecialFooterWrapperLogos>
            <SpecialFooterWrapperList>
              <a href="https://larepublica.pe/karaoke/" target="_blank">
                Club Karaoke
              </a>
              <a href="https://larepublica.pe/video-ground/" target="_blank">
                Video Ground
              </a>
              <a href="https://videos.larepublica.pe/" target="_blank">
                La República Videos
              </a>
              <a href="https://larepublica.pe/domingo/" target="_blank">
                Domingo
              </a>
              <a href="https://larepublica.pe/elecciones/" target="_blank">
                Gaceta Judicial
              </a>
              <a href="https://podcast.larepublica.pe/" target="_blank">
                LR Podcast
              </a>
              <a href="https://larepublica.pe/verificador/" target="_blank">
                Verificador
              </a>
              <a href="https://larepublica.pe/metro-cuadrado/" target="_blank">
                Metro Cuadrado
              </a>
              <a href="https://larepublica.pe/apunte-educativo/" target="_blank">
                Apunte Educativo
              </a>
              <a href="https://fundacionmohme.org/" target="_blank">
                Fundación Mohme
              </a>
            </SpecialFooterWrapperList>
          </SpecialFooterSideRight>
        </MediaQuery>
      </SpecialFooter>
    </FooterContent>
  );
};
