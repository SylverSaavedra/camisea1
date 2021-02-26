import React from 'react';
import { prop } from 'ramda';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useDetails from '../../api/useDetails.js';

import { Loading } from '../../components/Loading/index.jsx';

import Facebook from '../../shared/assets/facebook.png';
import Twitter from '../../shared/assets/twitter.png';

import './style.css';

export const DetailNotice = () => {
  let { pathname } = useLocation();
  const slug = pathname.substring(8);
  const { spotLightDetails, isLoading } = useDetails(slug);

  const listTitle = prop('title', prop('article', prop('data', spotLightDetails)));
  const listMain = prop('data', prop('article', prop('data', spotLightDetails)));
  const listMeta = prop('metadata_seo', prop('article', prop('data', spotLightDetails)));

  const seo_title = listMeta?.seo_title;
  const seo_description = listMeta?.seo_description;
  const arrayMultimedia = listMain?.multimedia[0];
  const arrayElement = listMain?.content_elements;

  if (isLoading) return <Loading />;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={'https://especiales.larepublica.pe/camisea/' + slug} />
        <meta name="description" content={seo_description} />
        <meta property="og:url" content={'https://especiales.larepublica.pe/camisea/' + slug} />
        <meta property="og:title" content={seo_title} />
        <meta property="og:image" content={arrayMultimedia.path} />
        <meta name="twitter:title" content={seo_title} />
        <meta name="twitter:description" content={seo_description} />
        <meta name="twitter:image" content={arrayMultimedia.path} />
        <title>{seo_title} | Especial Camisea</title>
      </Helmet>
      <div className="main-content">
        <div className="bar-green">
          <h1 className="title">{listTitle}</h1>
        </div>
        <img className="main-img" src={arrayMultimedia.path} alt={arrayMultimedia.data.alt} />;
        {arrayElement && (
          <div
            dangerouslySetInnerHTML={{
              __html: arrayElement.find((element) => {
                console.log(element);
                return element.type === 'paragraph';
              }).content,
            }}
          ></div>
        )}
        <div className="main-social_content">
          <a className="fb-img1" href="https://facebook.com/larepublicape" target="_blank">
            <img src={Facebook} width="20" height="18" />
          </a>
          <a className="tw-img2" href="https://twitter.com/larepublica_pe" target="_blank">
            <img src={Twitter} alt="twitter" width="16" height="18" />
          </a>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: arrayElement

              .filter((x, index) => index !== 0 && x.type === 'paragraph')
              .map((el) => el.content)
              .join(''),
          }}
        ></div>
      </div>
    </>
  );
};
