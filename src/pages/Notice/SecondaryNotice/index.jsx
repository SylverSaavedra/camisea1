import React from 'react';
import { filter, head, path, pipe, prop, propEq, propOr } from 'ramda';

import { ListNotesArticle, ListNotesHeadline, ListNotesImage, SpecialTitleBottom, ListNotesWrapper } from './style';

export const SecondaryNotice = ({ spotLightMain }) => {
  const listMain = prop('data', path('0', prop('data', prop('spotlight', prop('data', spotLightMain)))));

  return (
    <>
      <ListNotesWrapper>
        {listMain &&
          listMain.map((x, index) => {
            if (index > 4)
              return (
                <ListNotesArticle key={'listNotesArticle' + index}>
                  <a
                    href={prop('value', pipe(filter(propEq('name', 'url')), head)(propOr([], 'fields', x)))}
                    target="_blank"
                  >
                    <ListNotesImage
                      src={prop(
                        'url',
                        prop('value', pipe(filter(propEq('name', 'image')), head)(propOr([], 'fields', x)))
                      )}
                      alt={prop('value', pipe(filter(propEq('name', 'title')), head)(propOr([], 'fields', x)))}
                    />
                  </a>
                  <ListNotesHeadline>
                    <a
                      href={prop('value', pipe(filter(propEq('name', 'url')), head)(propOr([], 'fields', x)))}
                      target="_blank"
                    >
                      {prop('value', pipe(filter(propEq('name', 'title')), head)(propOr([], 'fields', x)))}
                    </a>
                  </ListNotesHeadline>
                </ListNotesArticle>
              );
          })}
      </ListNotesWrapper>
      {/*<SpecialTitleBottom>
        <a href="#">Ver más noticias</a>
      </SpecialTitleBottom>*/}
    </>
  );
};
