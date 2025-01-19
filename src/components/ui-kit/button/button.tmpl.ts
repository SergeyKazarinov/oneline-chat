const button = (function() {
  return `
  <button
    type="{{ buttonType }}"
    class="button button_type_{{variant}} button_text-color_{{color}} {{class}}"
    data-js="{{dataJS}}"
  >
    {{ name }}
  </button>
`;
})();

export default button;

// variant: primary | clear | circle
// color: primary | clear | error
