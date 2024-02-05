export const RES_DATA_URL =
  window.screen.width == 1536
    ? "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D18.5060007%26lng%3D73.7988504%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    : "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fmapi%2Frestaurants%2Flist%2Fv5%3Flat%3D18.5060007%26lng%3D73.7988504%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING";

export const PLAYSTORE_LOGO =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png";

export const APPSTORE_LOGO =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png";

export const FIRST_DATA_IMG_CDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const FETCH_MENU_URL = (resId) =>
  window.screen.width == 1536
    ? `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D18.5204303%26lng%3D73.8567437%26restaurantId%3D${resId}%26catalog_qa%3Dundefined%26submitAction%3DENTER`
    : `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fmapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D18.5204303%26lng%3D73.8567437%26restaurantId%3D${resId}%26isMenuUx4%3Dtrue%26submitAction%3DENTER`;

export const MENU_PAGE_ICONS =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/";

export const OFFERS_LOGO =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/";
