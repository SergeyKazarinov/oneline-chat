const input = (function () {
  return `
  <div class="form__input-wrapper">
    <input
      class="form__input form__input_type_{{ variant }} {{ class }}"
      type="{{ inputType }}"
      minLength="{{ minLength }}"
      maxLength="{{ maxLength }}"
      id="{{ id }}"
      name="{{ name }}"
      placeholder="{{ placeholder }}"
      autocomplete="off"
      required="{{ required }}"
      data-js="{{ dataJS }}"
    />
    <label class="form__label" for="{{ id }}"> {{ label }} </label>
  </div>
  `;
})();

export default input;

// variant: primary | search
// inputType: text | password | email | number | tel | search | url | date | time | datetime-local | month | week | color | range | file | image | button | submit | reset | hidden | number | tel | search | url | date | time | datetime-local | month | week | color | range | file | image | button | submit | reset | hidden
// minLength: number
// maxLength: number
// id: string
// name: string
// placeholder: string
// autocomplete: off | on
// required: true | false
// dataJS: string
// class: string
