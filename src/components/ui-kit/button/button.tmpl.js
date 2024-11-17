export const button = (() => {
  return `
  <button
    type="{{ buttonType }}"
    class="button button_type_{{variant}} button_text-color_{{color}} {{class}}"
    data-js="{{dataJS}}"
  >
    {{ name }}
  </button>`;
})();

// variant: primary | clear | circle
// color: primary | clear | error
