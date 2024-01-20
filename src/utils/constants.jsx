export const RES_DATA_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5060007&lng=73.7988504&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const PLAYSTORE_LOGO =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png";

export const APPSTORE_LOGO =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png";

export const FIRST_DATA_IMG_CDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const FETCH_MENU_URL = (resId) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9008937&lng=80.9332155&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
