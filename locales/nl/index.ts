// Auto-generated index for locale 'nl'
// Imports all JSON files in this folder and deep-merges them into one export.
import _0 from './about.json';
import _1 from './auto.json';
import _2 from './bannerNotifications.json';
import _3 from './bannerNotifications2.json';
import _4 from './bhagavadgita.json';
import _5 from './categories.json';
import _6 from './comics.json';
import _7 from './contactForm.json';
import _8 from './contactPage.json';
import _9 from './cookieConsent.json';
import _10 from './cookiepolicy.json';
import _11 from './cta.json';
import _12 from './devistotras.json';
import _13 from './dharmaphilosophy.json';
import _14 from './donatePage.json';
import _15 from './folds.json';
import _16 from './footer.json';
import _17 from './ganeshstotras.json';
import _18 from './gayathristotram-home.json';
import _19 from './hanumanstotras.json';
import _20 from './hero.json';
import _21 from './heroSection.json';
import _22 from './homePage.json';
import _23 from './horoscope.json';
import _24 from './illustratedstories.json';
import _25 from './ilustratedstories.json';
import _26 from './krishnabg-home.json';
import _27 from './krishnastotram-home.json';
import _28 from './languageDropdown.json';
import _29 from './mahabharata.json';
import _30 from './meta.json';
import _31 from './more.json';
import _32 from './mythologicalquizzes.json';
import _33 from './nav.json';
import _34 from './ourfourcoreyugas-home.json';
import _35 from './privacy.json';
import _36 from './privacypolicy.json';
import _37 from './questions.json';
import _38 from './quiz.json';
import _39 from './ramayana.json';
import _40 from './scrollToTop.json';
import _41 from './shivastotram-home.json';
import _42 from './shivastotras.json';
import _43 from './siteContent.json';
import _44 from './siteTitle.json';
import _45 from './slugPage.json';
import _46 from './terms.json';
import _47 from './timelinePoints.json';
import _48 from './upanishads.json';
import _49 from './vedas.json';
import _50 from './vedasPage1.json';
import _51 from './vishnustotras.json';

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
const merged = [   _0,     _1,     _2,     _3,     _4,     _5,     _6,     _7,     _8,     _9,     _10,     _11,     _12,     _13,     _14,     _15,     _16,     _17,     _18,     _19,     _20,     _21,     _22,     _23,     _24,     _25,     _26,     _27,     _28,     _29,     _30,     _31,     _32,     _33,     _34,     _35,     _36,     _37,     _38,     _39,     _40,     _41,     _42,     _43,     _44,     _45,     _46,     _47,     _48,     _49,     _50,     _51 ].reduce((acc, cur) => deepMerge(acc, cur || {}), base);

export default merged;
