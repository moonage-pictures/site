import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

import "bulma";

import Routes from "./Routes";

export const MoonagePicturesContext = createContext();

const MooneagePicturesContextProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState({ loading: true });
  const [newsData, setNewsData] = useState({ loading: true });
  const [showsData, setShowsData] = useState({ loading: true });

  useEffect(() => {
    const fetchCompanyData = async () => {
      const { data } = await axios({
        url: "https://cms.moonagepictures.com/wp-json/wp/v2/pages/2",
        method: "GET"
      });
      setCompanyData({
        body: data.content.rendered,
        title: data.title.rendered,
        loading: false,
        companyImage: data.acf.companyImage
      });
    };
    fetchCompanyData();
  }, []);

  useEffect(() => {
    const fetchNewsData = async () => {
      const [
        { data: pressReleases },
        {
          data: {
            title: { rendered: title }
          }
        }
      ] = await Promise.all([
        axios({
          url:
            "https://cms.moonagepictures.com/wp-json/wp/v2/posts?categories=5",
          method: "GET"
        }),
        await axios.get(
          "https://cms.moonagepictures.com/wp-json/wp/v2/pages/486"
        )
      ]);

      setNewsData({ pressReleases, title, loading: false });
    };
    fetchNewsData();
  }, []);

  useEffect(() => {
    const fetchShowsData = async () => {
      const [
        { data: shows },
        {
          data: {
            title: { rendered: title }
          }
        }
      ] = await Promise.all([
        axios({
          url:
            "https://cms.moonagepictures.com/wp-json/wp/v2/posts?categories=4",
          method: "GET"
        }),
        await axios.get(
          "https://cms.moonagepictures.com/wp-json/wp/v2/pages/162"
        )
      ]);

      setShowsData({ shows, title, loading: false });
    };

    fetchShowsData();
  });

  const context = { companyData, newsData, showsData };

  console.log("context is", context);

  return (
    <MoonagePicturesContext.Provider children={children} value={context} />
  );
};

export default () => {
  return (
    <MooneagePicturesContextProvider>
      <Routes />
    </MooneagePicturesContextProvider>
  );
};
