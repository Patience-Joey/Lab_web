(function () {
  'use strict';

  try {
    if (localStorage.getItem('spin-language') !== 'en') return;

    document.documentElement.lang = 'en';
    document.documentElement.classList.add('spin-i18n-pending');
    window.spinI18nFallbackTimer = window.setTimeout(function () {
      document.documentElement.classList.remove('spin-i18n-pending');
    }, 2000);
  } catch (error) {
    // Storage can be unavailable in privacy mode; Chinese remains the safe default.
  }
}());
