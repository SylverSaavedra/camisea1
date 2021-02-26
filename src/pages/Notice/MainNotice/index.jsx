import React from 'react';
import { Link } from 'react-router-dom';
import { filter, head, path, pipe, prop, propEq, propOr } from 'ramda';
import { Helmet } from 'react-helmet';

import {
  SpotlightMainDescription,
  SpotlightMainHeadlineList,
  SpotlightHeadlineListWrapper,
  SpotlightMainHeadlineMain,
  SpotlightMainLeft,
  SpotLightMainSideRight,
  SpotlightMainThumbnail,
  SpotlightMainWrapper,
} from './style';

export const MainNotice = ({ spotLightMain }) => {
  const listMain = prop('data', path('0', prop('data', prop('spotlight', prop('data', spotLightMain)))));
  const imgSeo = prop('value', path('4', prop('fields', path('0', listMain))));
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://especiales.larepublica.pe/camisea/" />
        <meta name="description" content="Especial Camisea" />
        <meta property="og:url" content="https://especiales.larepublica.pe/camisea/" />
        <meta property="og:title" content="Especial Camisea" />
        <meta property="og:image" content={imgSeo.url} />
        <meta name="twitter:title" content="Especial Camisea" />
        <meta name="twitter:description" content="Especial Camisea" />
        <meta name="twitter:image" content={imgSeo.url} />
        <title> Especial Camisea</title>
      </Helmet>
      <SpotlightMainWrapper>
        {listMain &&
          listMain.map((x, index) => {
            if (index === 0)
              return (
                <SpotlightMainLeft key={'spotlightMainLeft' + index}>
                  <Link
                    to={'camisea' + prop('value', pipe(filter(propEq('name', 'url')), head)(propOr([], 'fields', x)))}
                  >
                    <SpotlightMainThumbnail
                      src={prop(
                        'url',
                        prop('value', pipe(filter(propEq('name', 'image')), head)(propOr([], 'fields', x)))
                      )}
                      alt={prop('value', pipe(filter(propEq('name', 'title')), head)(propOr([], 'fields', x)))}
                    />
                    <SpotlightMainDescription>
                      <SpotlightMainHeadlineMain>
                        {prop('value', pipe(filter(propEq('name', 'title')), head)(propOr([], 'fields', x)))}
                      </SpotlightMainHeadlineMain>
                    </SpotlightMainDescription>
                  </Link>
                </SpotlightMainLeft>
              );
          })}
        <SpotLightMainSideRight>
          {listMain &&
            listMain.map((x, index) => {
              if (index === 1 || index === 2 || index === 3 || index === 4)
                return (
                  <SpotlightHeadlineListWrapper key={'spotlightHeadlineListWrapper' + index}>
                    <SpotlightMainHeadlineList>
                      <h3>
                        <Link
                          to={
                            'camisea' +
                            prop('value', pipe(filter(propEq('name', 'url')), head)(propOr([], 'fields', x)))
                          }
                        >
                          {prop('value', pipe(filter(propEq('name', 'title')), head)(propOr([], 'fields', x)))}
                        </Link>
                      </h3>
                    </SpotlightMainHeadlineList>
                  </SpotlightHeadlineListWrapper>
                );
            })}
        </SpotLightMainSideRight>
      </SpotlightMainWrapper>
    </>
  );
};
