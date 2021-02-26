import React from 'react';
import { isNil, path } from 'ramda';

import { WrapperSection, WrapperSectionSuplement, WrapperSectionVideos } from './style';
import { VideoNotice } from './VideoNotice';
import { SecondaryNotice } from './SecondaryNotice';
import { SuplementNotice } from './SuplementNotice';
import { MainNotice } from './MainNotice';

export const Notice = ({ spotLightMain, spotLightSuplement, spotLightVideos }) => {
  return (
    <>
      <WrapperSection>
        <MainNotice spotLightMain={spotLightMain} />
        <SecondaryNotice spotLightMain={spotLightMain} />
      </WrapperSection>
      <WrapperSectionSuplement>
        <SuplementNotice spotLightSuplement={spotLightSuplement} />
      </WrapperSectionSuplement>
      {!isNil(path(['data', 'spotlight'], spotLightVideos)) && (
        <WrapperSectionVideos>
          <VideoNotice spotLightVideos={spotLightVideos} />
        </WrapperSectionVideos>
      )}
    </>
  );
};
