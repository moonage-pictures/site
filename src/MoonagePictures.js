import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

import "bulma";

import Routes from "./Routes";

export const MoonagePicturesContext = createContext();

const MooneagePicturesContextProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState({ loading: true });
  const [newsData, setNewsData] = useState({ loading: true });
  const [showsData, setShowsData] = useState({ loading: true });
  const [curfewData, setCurfewData] = useState({ loading: true });
  const [intergalacticData, setIntergalacticData] = useState({ loading: true });
  const [pursuitOfLoveData, setPursuitOfLoveData] = useState({ loading: true });
  const [peopleData, setPeopleData] = useState({ loading: true });
  const [daydreamData, setDaydreamData] = useState({ loading: true });
  const [obsessionData, setObsessionData] = useState({ loading: true });
  const [bodiesData, setBodiesData] = useState({ loading: true });
  const [famousFiveData, setFamousFiveData] = useState({ loading: true });
  const [theGentlemenData, setTheGentlemenData] = useState({ loading: true });
  const [contactData, setContactData] = useState({ loading: true });

  useEffect(() => {
    const fetchCompanyData = async () => {
      const { data } = await axios({
        url: "https://cms.moonagepictures.com/wp-json/wp/v2/pages/2",
        method: "GET",
      });
      setCompanyData({
        body: data.content.rendered,
        title: data.title.rendered,
        loading: false,
        companyImage: data.acf.companyImage,
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
            title: { rendered: title },
          },
        },
      ] = await Promise.all([
        axios({
          url: "https://cms.moonagepictures.com/wp-json/wp/v2/posts?categories=5&per_page=100",
          method: "GET",
        }),
        await axios.get(
          "https://cms.moonagepictures.com/wp-json/wp/v2/pages/486"
        ),
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
            title: { rendered: title },
          },
        },
      ] = await Promise.all([
        axios({
          url: process.env.REACT_APP_SHOWS_GALLERY_URL,
          method: "GET",
        }),
        await axios.get(
          "https://cms.moonagepictures.com/wp-json/wp/v2/pages/162"
        ),
      ]);

      setShowsData({ shows, title, loading: false });
    };

    fetchShowsData();
  }, []);

  useEffect(() => {
    const fetchCurfewData = async () => {
      const { data: show } = await axios({
        url: "https://cms.moonagepictures.com/wp-json/wp/v2/posts/488",
        method: "GET",
      });
      setCurfewData({ show, wideImages: show.acf.wideImages, loading: false });
    };
    fetchCurfewData();
  }, []);

  useEffect(() => {
    const fetchIntergalacticData = async () => {
      const { data: show } = await axios.get(
        "https://cms.moonagepictures.com/wp-json/wp/v2/posts/1600"
      );
      setIntergalacticData({
        show,
        wideImages: show.acf.wideImages,
        loading: false,
      });
    };

    fetchIntergalacticData();
  }, []);

  useEffect(() => {
    const fetchPursuitOfLoveData = async () => {
      const { data: show } = await axios.get(
        "https://cms.moonagepictures.com/wp-json/wp/v2/posts/1614"
      );
      setPursuitOfLoveData({
        show,
        wideImages: show.acf.wideImages,
        loading: false,
      });
    };

    fetchPursuitOfLoveData();
  }, []);

  useEffect(() => {
    const fetchObsessionData = async () => {
      const { data: show } = await axios.get(
        "https://cms.moonagepictures.com/wp-json/wp/v2/posts/1963"
      );
      setObsessionData({
        show,
        wideImages: show.acf.wideImages,
        loading: false,
      });
    };

    fetchObsessionData();
  }, []);

  useEffect(() => {
    const fetchBodiesData = async () => {
      const { data: show } = await axios.get(
        "https://cms.moonagepictures.com/wp-json/wp/v2/posts/2106"
      );

      setBodiesData({
        show,
        wideImages: show.acf.wideImages,
        loading: false,
      });
    };

    fetchBodiesData();
  }, []);

  useEffect(() => {
    const fetchFamousFiveData = async () => {
      const { data: show } = await axios.get(
        "https://cms.moonagepictures.com/wp-json/wp/v2/posts/2155"
      );

      setFamousFiveData({
        show,
        wideImages: show.acf.wideImages,
        loading: false,
      });
    };

    fetchFamousFiveData();
  }, []);

  useEffect(() => {
    const theGentlemenData = async () => {
      const { data: show } = await axios.get(
        "https://cms.moonagepictures.com/wp-json/wp/v2/posts/2219"
      );

      setTheGentlemenData({
        show,
        wideImages: show.acf.wideImages,
        loading: false,
      });
    };

    theGentlemenData();
  }, []);

  useEffect(() => {
    const fetchPeopleData = async () => {
      const { data } = await axios({
        url: "https://cms.moonagepictures.com/wp-json/wp/v2/pages/497",
        method: "GET",
      });
      setPeopleData({
        title: data.title.rendered,
        body: data.content.rendered,
        loading: false,
      });
    };
    fetchPeopleData();
  }, []);

  useEffect(() => {
    const fetchDaydreamData = async () => {
      const { data } = await axios({
        url: "https://cms.moonagepictures.com/wp-json/wp/v2/pages/160",
        method: "GET",
      });
      setDaydreamData({
        title: data.title.rendered,
        body: data.content.rendered,
        loading: false,
      });
    };
    fetchDaydreamData();
  }, []);

  useEffect(() => {
    const fetchContactData = async () => {
      const { data } = await axios.get(
        "https://cms.moonagepictures.com/wp-json/wp/v2/pages/19"
      );
      setContactData({
        title: data.title.rendered,
        contactInfo: { ...data.acf },
        body: data.content.rendered,
        loading: false,
      });
    };
    fetchContactData();
  }, []);

  const context = {
    companyData,
    newsData,
    showsData,
    curfewData,
    intergalacticData,
    pursuitOfLoveData,
    obsessionData,
    bodiesData,
    famousFiveData,
    peopleData,
    daydreamData,
    contactData,
    theGentlemenData,
  };

  return (
    <MoonagePicturesContext.Provider children={children} value={context} />
  );
};

const MoonagePictures = () => {
  return (
    <MooneagePicturesContextProvider>
      <Routes />
    </MooneagePicturesContextProvider>
  );
};

export default MoonagePictures;
