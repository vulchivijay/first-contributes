// Auto-generated index for locale 'en'
// Imports all JSON files in this folder and deep-merges them into one export.
import _0 from './about.json';
import _1 from './adisankara_story.json';
import _2 from './advaita_philosophy.json';
import _3 from './banner_notifications.json';
import _4 from './banner_notifications2.json';
import _5 from './bhagavadgita_scriptures.json';
import _6 from './bhishma_story.json';
import _7 from './bramha_story.json';
import _8 from './categories.json';
import _9 from './comics_kidszone.json';
import _10 from './contact.json';
import _11 from './contactForm.json';
import _12 from './cookieConsent.json';
import _13 from './cookiepolicy.json';
import _14 from './cta.json';
import _15 from './dailypoojas_practices.json';
import _16 from './dailyprayers_stotras.json';
import _17 from './devistotras.json';
import _18 from './dharma_philosophy.json';
import _19 from './donate.json';
import _20 from './easymantras_kidszone.json';
import _21 from './festival_practices.json';
import _22 from './footer.json';
import _23 from './ganesh_stotras.json';
import _24 from './hanuman_stotras.json';
import _25 from './home.json';
import _26 from './horoscope.json';
import _27 from './illustrated_stories.json';
import _28 from './karma_philosophy.json';
import _29 from './karna_story.json';
import _30 from './kidszone.json';
import _31 from './krishna_story.json';
import _32 from './lakshmi_story.json';
import _33 from './languageDropdown.json';
import _34 from './mahabharata_scriptures.json';
import _35 from './mayaAvidya_philosophy.json';
import _36 from './meta.json';
import _37 from './moksha_philosophy.json';
import _38 from './mythological_quizzes.json';
import _39 from './nav.json';
import _40 from './parashurama_story.json';
import _41 from './parvathi_story.json';
import _42 from './philosophy.json';
import _43 from './policies.json';
import _44 from './practices.json';
import _45 from './privacy.json';
import _46 from './privacy_policy.json';
import _47 from './puranas_scriptures.json';
import _48 from './puranic_story.json';
import _49 from './purushartha_philosophy.json';
import _50 from './questions.json';
import _51 from './quiz.json';
import _52 from './ramanamaharshi_story.json';
import _53 from './ramayana_scriptures.json';
import _54 from './rituals_practices.json';
import _55 from './samsara_philosophy.json';
import _56 from './sanatanadharmam.json';
import _57 from './sankshepa_ramayana.json';
import _58 from './saraswathi_story.json';
import _59 from './scriptures.json';
import _60 from './scrollToTop.json';
import _61 from './shiva_story.json';
import _62 from './shiva_stotras.json';
import _63 from './siteTitle.json';
import _64 from './slugPage.json';
import _65 from './stories.json';
import _66 from './stotrasmantras.json';
import _67 from './terms.json';
import _68 from './timeline.json';
import _69 from './upanishads_scriptures.json';
import _70 from './vasista_story.json';
import _71 from './vastu_practices.json';
import _72 from './vedasPage1.json';
import _73 from './vedas_scriptures.json';
import _74 from './vishnu_story.json';
import _75 from './vishnu_stotras.json';
import _76 from './vishwamitra_story.json';
import _77 from './yoga_philosophy.json';

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
const merged = [_0,_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_20,_21,_22,_23,_24,_25,_26,_27,_28,_29,_30,_31,_32,_33,_34,_35,_36,_37,_38,_39,_40,_41,_42,_43,_44,_45,_46,_47,_48,_49,_50,_51,_52,_53,_54,_55,_56,_57,_58,_59,_60,_61,_62,_63,_64,_65,_66,_67,_68,_69,_70,_71,_72,_73,_74,_75,_76,_77].reduce((acc, cur) => deepMerge(acc, cur || {}), base);

export default merged;
