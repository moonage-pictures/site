import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bulma";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Shows from "./components/pages/Shows";
import Curfew from "./components/pages/Curfew";
import Company from "./components/pages/Company";
import People from "./components/pages/People";
import Daydream from "./components/pages/Daydream";
import Contact from "./components/pages/Contact";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Intergalactic from "./components/pages/Intergalactic";
import PursuitOfLove from "./components/pages/PursuitOfLove";
import Obsession from "./components/pages/Obsession";
import Bodies from "./components/pages/Bodies";
import FamousFive from "./components/pages/FamousFive";
import TheGentlemen from "./components/pages/TheGentlemen";
import AGGGTM from "./components/pages/AGGGTM";
import MysteryProspectHotel from "./components/pages/MysteryProspectHotel";
import TheLeopard from "./components/pages/TheLeopard";

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/company" component={Company} />
          <Route path="/news" component={News} />
          <Route path="/shows/curfew" component={Curfew} />
          <Route path="/shows/intergalactic" component={Intergalactic} />
          <Route path="/shows/the-pursuit-of-love" component={PursuitOfLove} />
          <Route path="/shows/obsession" component={Obsession} />
          <Route path="/shows/bodies" component={Bodies} />
          <Route path="/shows/famous-five" component={FamousFive} />
          <Route path="/shows/the-gentlemen" component={TheGentlemen} />
          <Route path="/shows/agggtm" component={AGGGTM} />
          <Route
            path="/shows/mystery-prospect-hotel"
            component={MysteryProspectHotel}
          />
          <Route path="/shows/the-leopard" component={TheLeopard} />
          <Route path="/shows" component={Shows} />
          <Route path="/people" component={People} />
          <Route path="/daydream" component={Daydream} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default Routes;
