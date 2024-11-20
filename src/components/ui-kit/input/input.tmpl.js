export const input = (() => {
  return `
  <div class="form__input-wrapper">
    <input
      class="form__input"
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
  </div>`;
})();
