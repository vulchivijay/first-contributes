// Auto-generated index for locale 'te'
// Imports all JSON files in this folder and deep-merges them into one export.
import _0 from './about.json';
import _1 from './auto.json';
import _2 from './bannerNotifications.json';
import _3 from './bannerNotifications2.json';
import _4 from './bhagavadgita.json';
import _5 from './categories.json';
import _6 from './contactForm.json';
import _7 from './contactPage.json';
import _8 from './devistotras.json';
import _9 from './dharmaphilosophy.json';
import _10 from './donatePage.json';
import _11 from './folds.json';
import _12 from './footer.json';
import _13 from './ganeshstotras.json';
import _14 from './hanumanstotras.json';
import _15 from './hero.json';
import _16 from './heroSection.json';
import _17 from './homePage.json';
import _18 from './illustratedstories.json';
import _19 from './languageDropdown.json';
import _20 from './mahabharata.json';
import _21 from './meta.json';
import _22 from './nav.json';
import _23 from './privacy.json';
import _24 from './ramayana.json';
import _25 from './scrollToTop.json';
import _26 from './shivastotras.json';
import _27 from './siteTitle.json';
import _28 from './slugPage.json';
import _29 from './terms.json';
import _30 from './timelinePoints.json';
import _31 from './upanishads.json';
import _32 from './vedas.json';
import _33 from './vedasPage1.json';
import _34 from './vishnustotras.json';
import _35 from './cookieConsent.json';
import _36 from './cta.json';
import _37 from './quiz.json';
import _38 from './siteContent.json';
import _39 from './more.json';

function deepMerge(target: any, source: any) {
  if (source === undefined) return target;
  if (Array.isArray(target) && Array.isArray(source)) {
    const out = target.slice();
    for (let i = 0; i < source.length; i++) out[i] = deepMerge(out[i], source[i]);
    return out;
  }
  if (target && typeof target === 'object' && source && typeof source === 'object') {
    const out = { ...target };
    for (const k of Object.keys(source)) out[k] = deepMerge(target[k], source[k]);
    return out;
  }
  return source;
}

const base = {};
const merged = [_0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39].reduce((acc, cur) => deepMerge(acc, cur || {}), base);

export default merged;
