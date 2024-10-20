export const input = (() => {
  return `
  <div class="form__input-wrapper">
    <input
      class="form__input"
      id="{{ id }}"
      name="{{ name }}"
      placeholder="{{ placeholder }}"
      autocomplete="off"
    />
    <label class="form__label" for={{ id }}> {{ label }} </label>
  </div>`;
})();
