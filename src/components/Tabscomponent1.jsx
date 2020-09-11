import React, { useState, useEffect } from 'react';
import  UnsplashImage  from './UnsplashImage';
import { Loader } from './loader';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function Tabscomponent() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = (count = 10) => {

    axios
      .get(`https://api.unsplash.com/photos/random?client_id=Cj99QbgfgaGsJEdXkowX_qCr78z1qJX8q1Cm3qUnYzg&count=${count}`)
      .then(res => {
        setImage([...images, ...res.data]);
      })
  }


  return (
    <div>
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImages>
          {images.map(function (image) {
                  return (
                      <UnsplashImage url={image.urls.thumb} key={image.id} />
                  );
              })}
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default Tabscomponent;