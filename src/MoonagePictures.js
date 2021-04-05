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
          url:
            "https://cms.moonagepictures.com/wp-json/wp/v2/posts?categories=5",
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
          url:
            "https://cms.moonagepictures.com/wp-json/wp/v2/posts?categories=9",
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
      setIntergalacticData({ show, loading: false });
    };

    fetchIntergalacticData();
  }, []);

  useEffect(() => {
    const fetchPursuitOfLoveData = async () => {
      const { data: show } = await axios.get(
        "https://cms.moonagepictures.com/wp-json/wp/v2/posts/1614"
      );
      setPursuitOfLoveData({ show, loading: false });
    };

    fetchPursuitOfLoveData();
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
    peopleData,
    daydreamData,
    contactData,
  };

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
