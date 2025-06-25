export const GA_MEASUREMENT_ID = 'G-ZFE0B2Z3QY';

export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
