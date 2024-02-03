export const RES_DATA_URL =
  window.screen.width == 1536
    ? "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5060007&lng=73.7988504&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    : "https://www.swiggy.com/mapi/restaurants/list/v5?lat=18.5060007&lng=73.7988504&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
// "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING";

export const PLAYSTORE_LOGO =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png";

export const APPSTORE_LOGO =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png";

export const FIRST_DATA_IMG_CDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const FETCH_MENU_URL = (resId) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5073514&lng=73.8076543&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
// `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${resId}`;

export const MENU_PAGE_ICONS =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/";

export const OFFERS_LOGO =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/";
