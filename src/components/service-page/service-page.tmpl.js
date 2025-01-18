export const servicePage = (() => {
  return `
  <section
    class="page service-page"
  >
    <h1 class="service-page__title">{{ title }} </h1>
    <p class="service-page__text">{{ text }}</p>
    <a class= "service-page__link" href="{{ link }}"> {{textLink}}</a>
  </section>`;
})();
