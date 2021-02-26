import React from 'react';
import MediaQuery from 'react-responsive';
import Carousel from 'react-elastic-carousel';
import { filter, head, path, pipe, prop, propEq, propOr } from 'ramda';

import useSpotlight from '../../../api/useSpotlight';

import { ContentCarousel, ContentSuplement, SuplementNoticeContainerTitle, SuplementNoticeTitle } from './style';
import './style.jsx';

export const SuplementNotice = ({ spotLightSuplement }) => {
  const listSuplements = prop('data', path('0', prop('data', prop('spotlight', prop('data', spotLightSuplement)))));

  return (
    <ContentSuplement>
      <SuplementNoticeContainerTitle>
        <SuplementNoticeTitle>Suplementos</SuplementNoticeTitle>
      </SuplementNoticeContainerTitle>
      <MediaQuery maxWidth={1023}>
        <ContentCarousel>
          <Carousel>
            {listSuplements &&
              listSuplements.map((slide, index) => (
                <div key={index}>
                  <a
                    href={prop('value', pipe(filter(propEq('name', 'url')), head)(propOr([], 'fields', slide)))}
                    target="_blank"
                  >
                    <img
                      src={prop(
                        'url',
                        prop('value', pipe(filter(propEq('name', 'image')), head)(propOr([], 'fields', slide)))
                      )}
                      alt={'slider' + index}
                    />
                    <span>
                      {prop('value', pipe(filter(propEq('name', 'title')), head)(propOr([], 'fields', slide)))}
                    </span>
                  </a>
                </div>
              ))}
          </Carousel>
        </ContentCarousel>
      </MediaQuery>
      <MediaQuery minWidth={1023}>
        <ContentCarousel>
          <Carousel itemsToShow={3} pagination={false}>
            {listSuplements &&
              listSuplements.map((x, index) => (
                <div key={index} className={listSuplements.length === 1 ? 'unique-slider' : ''}>
                  <div>
                    <a
                      href={prop('value', pipe(filter(propEq('name', 'url')), head)(propOr([], 'fields', x)))}
                      target="_blank"
                    >
                      <img
                        src={prop(
                          'url',
                          prop('value', pipe(filter(propEq('name', 'image')), head)(propOr([], 'fields', x)))
                        )}
                        alt={'slider' + index}
                      />
                      <span>{prop('value', pipe(filter(propEq('name', 'title')), head)(propOr([], 'fields', x)))}</span>
                    </a>
                  </div>
                </div>
              ))}
          </Carousel>
        </ContentCarousel>
      </MediaQuery>
    </ContentSuplement>
  );
};
