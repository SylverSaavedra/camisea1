import React from 'react';
import { filter, head, path, pipe, prop, propEq, propOr } from 'ramda';

import useSpotlight from '../../../api/useSpotlight';

import {
  ContentVideo,
  VideoNoticeContainerTitle,
  VideoNoticeLeft,
  VideoNoticeLeftBoxContent,
  VideoNoticeLeftBoxImage,
  VideoNoticeLeftImage,
  VideoNoticeRight,
  VideoNoticeRightContent,
  VideoNoticeRightContentBoxImage,
  VideoNoticeRightContentImage,
  VideoNoticeRightContentText,
  VideoNoticeOutstanding,
  VideoNoticeTitle,
} from './style';

export const VideoNotice = ({ spotLightVideos }) => {
  const listVideo = prop('data', path('0', prop('data', prop('spotlight', prop('data', spotLightVideos)))));

  return (
    <ContentVideo>
      <VideoNoticeContainerTitle>
        <VideoNoticeTitle>Videos</VideoNoticeTitle>
      </VideoNoticeContainerTitle>
      <VideoNoticeOutstanding>
        {listVideo &&
          listVideo.map((x, index) => {
            if (index === 0)
              return (
                <VideoNoticeLeft key={'videoNoticeLeft' + index}>
                  <VideoNoticeLeftBoxImage>
                    <a
                      href={prop('value', pipe(filter(propEq('name', 'url')), head)(propOr([], 'fields', x)))}
                      target="_blank"
                    >
                      <span>
                        <VideoNoticeLeftImage
                          src={prop(
                            'url',
                            prop('value', pipe(filter(propEq('name', 'image')), head)(propOr([], 'fields', x)))
                          )}
                          alt={prop('value', pipe(filter(propEq('name', 'title')), head)(propOr([], 'fields', x)))}
                        />
                      </span>
                    </a>
                  </VideoNoticeLeftBoxImage>
                  <VideoNoticeLeftBoxContent>
                    <h3>
                      <a
                        href={prop('value', pipe(filter(propEq('name', 'url')), head)(propOr([], 'fields', x)))}
                        target="_blank"
                      >
                        {prop('value', pipe(filter(propEq('name', 'title')), head)(propOr([], 'fields', x)))}
                      </a>
                    </h3>
                  </VideoNoticeLeftBoxContent>
                </VideoNoticeLeft>
              );
          })}
        <VideoNoticeRight>
          {listVideo &&
            listVideo.map((x, index) => {
              if (index > 1)
                return (
                  <VideoNoticeRightContent key={'videoNoticeRightContent' + index}>
                    <VideoNoticeRightContentBoxImage>
                      <a
                        href={prop('value', pipe(filter(propEq('name', 'url')), head)(propOr([], 'fields', x)))}
                        target="_blank"
                      >
                        <span>
                          <VideoNoticeRightContentImage
                            src={prop(
                              'url',
                              prop('value', pipe(filter(propEq('name', 'image')), head)(propOr([], 'fields', x)))
                            )}
                            alt={prop('value', pipe(filter(propEq('name', 'title')), head)(propOr([], 'fields', x)))}
                          />
                        </span>
                      </a>
                    </VideoNoticeRightContentBoxImage>
                    <VideoNoticeRightContentText>
                      <h3>{prop('value', pipe(filter(propEq('name', 'title')), head)(propOr([], 'fields', x)))}</h3>
                    </VideoNoticeRightContentText>
                  </VideoNoticeRightContent>
                );
            })}
        </VideoNoticeRight>
      </VideoNoticeOutstanding>
    </ContentVideo>
  );
};
