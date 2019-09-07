import querystring from "querystring";
import request from "../services/request";

export default config => {
  const credentials = config.credentials;
  config = Object.assign(config, {
    apiFeature: "/venues"
  });

  return {
    categories() {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/categories?" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    explore(params) {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/explore?" +
        querystring.stringify(params) +
        "&" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    recommendations(params) {
      const urlString =
        config.apiUrl +
        "/search/recommendations?" +
        querystring.stringify(params) +
        "&" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    trending(params) {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/trending?" +
        querystring.stringify(params) +
        "&" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    getVenues(params) {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/search?" +
        querystring.stringify(params) +
        "&" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    getVenue(params) {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/" +
        params.venue_id +
        "?" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    getVenuePhotos(params) {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/" +
        params.venue_id +
        "/photos?" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    getVenueTips(params) {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/" +
        params.venue_id +
        "/tips?" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    suggestCompletion(params) {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/suggestcompletion?" +
        querystring.stringify(params) +
        "&" +
        querystring.stringify(credentials);
      return request(urlString);
    }
  };
};