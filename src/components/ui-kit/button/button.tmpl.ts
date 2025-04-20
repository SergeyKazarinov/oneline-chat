const button = (function () {
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

// buttonType: button | submit | reset
// variant: primary | clear | circle | link
// color: primary | secondary | clear | error
// class: string
// dataJS: string
// name: string
