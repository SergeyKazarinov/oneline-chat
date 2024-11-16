export const button = (() => {
  return `
  <button
    type="{{ buttonType }}"
    class="button button_type_{{variant}} button_text-color_{{color}}"
  >
    {{ name }}
  </button>`;
})();

// variant: primary | clear | circle
// color: primary | error
