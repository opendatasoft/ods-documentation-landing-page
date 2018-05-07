import content from './traductions/app';

function getCurrentURL() {
    return window.location.protocol + '//' + window.location.host + window.location.pathname;
}

/**
 * @example
 *          setMetas({
 *              title: 'Lorem ipsum',
 *              description: 'Dolor sit amet',
 *              image: 'lorem.png',
 *              lang: 'en'
 *          });
 **/
export function setMetas(metas) {
    let title;

    if ( metas.title === undefined || metas.title.length === 0 ) {
        title = '';
    } else {
        title = metas.title + ' | ';
    }

    document.head.getElementsByTagName('title')[0].textContent = title + content.basePageTitle[metas.lang];
    document.head.querySelector('[name="description"]').setAttribute('content', metas.description);

    /* Open Graph */
    document.head.querySelector('[property="og:url"]').setAttribute('content', getCurrentURL());
    document.head.querySelector('[property="og:title"]').setAttribute('content', metas.title);
    document.head.querySelector('[property="og:description"]').setAttribute('content', metas.description);
    document.head.querySelector('[property="og:image"]').setAttribute('content', metas.image);

}

// export function navigatorLang() {
//     const language = (navigator.languages && navigator.languages[0]) || // Chrome / Firefox
//         navigator.language ||   // All browsers
//         navigator.userLanguage; // IE <= 10
//     if (['en', 'fr', 'es', 'de', 'nl'].indexOf(language) >= 0) return language;
//     else return 'en';
// }