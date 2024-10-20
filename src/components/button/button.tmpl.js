export const button = (() => {
  return `
  <button
    type="{{ type }}"
    class="button button_type_{{variant}}"
  >
    {{ name }}
  </button>`;
})();
