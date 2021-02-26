import React from 'react';
import MediaQuery from 'react-responsive';
import { prop } from 'ramda';

import useSpotlightMenu from '../../api/useSpotlightMenu';

import Facebook from '../../shared/assets/facebook.png';
import Logo from '../../shared/assets/logo_camisea.png';
import Menu from '../../shared/assets/menu.png';
import Twitter from '../../shared/assets/twitter.png';

import './style.css';

export const Header = () => {
  const { spotLightMenu, isLoading } = useSpotlightMenu('5fff6cab1ee02c41bf16790e');
  const listMenu = prop('links', prop('menu', prop('data', spotLightMenu)));

  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <img src={Menu} alt="menu" width="26" height="30" />
      </label>
      <label className="logo">
        <img src={Logo} alt="logo camisea" />
      </label>
      <MediaQuery minWidth={767}>
        <div className="main__menu">
          <div className="main__menu-social">
            <a className="main__content color__facebook" href="https://twitter.com/larepublica_pe" target="_blank">
              <img src={Facebook} alt="facebook" className="fb-img" width="20" height="18" />
            </a>
            <a className="main__content color__twitter" href="https://facebook.com/larepublicape" target="_blank">
              <img src={Twitter} alt="twitter" className="twitter-img" width="16" height="18" />
            </a>
          </div>
          <ul>
            {listMenu &&
              listMenu.map((itemMenu, index) => {
                return (
                  <li key={'item' + index}>
                    <a href={prop('path', itemMenu)} target="_blank">
                      {prop('title', itemMenu)}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <ul>
          {listMenu &&
            listMenu.map((itemMenu, index) => {
              return (
                <li key={'item' + index}>
                  <a href={prop('path', itemMenu)} target="_blank">
                    {prop('title', itemMenu)}
                  </a>
                </li>
              );
            })}
        </ul>
      </MediaQuery>
    </nav>
  );
};
