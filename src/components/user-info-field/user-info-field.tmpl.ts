const userInfoField = (function() {
  return `
  <{{ as }} class="userInfoFiled">
    <span class="userInfoFiled__key">{{ key }}</span>
    <span class="userInfoFiled__value">{{ value }}</span>
  </{{ as }}>
  `;
})();

export default userInfoField;
