import image from "../../../../public/images/default.jpg";

export const avatar = (() => {
  return `
  <button class="avatar" data-js="avatar-btn">
    <picture>
      <source srcset="public/images/default.jpg" media="(max-width: 480px)" />
      <source srcset="public/images/default.jpg" media="(max-width: 769px)" />
      <source srcset="public/images/default.jpg" media="(max-width: 1200px)" />
      <source srcset="public/images/default.jpg" media="(max-width: 1441px)" />
      <img src="${image}" alt="Аватар" />
    </picture>
  </button>
  `;
})();
