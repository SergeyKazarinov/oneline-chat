import Templator from '../../core/templator/Temlator';
import chatPage from './chat.tmlp';

const root = document.querySelector('#root');

if (!root) {
  throw new Error('root not found');
}

const context = {};

const tmpl = new Templator(chatPage);
const renderedTemplate = tmpl.compile(context);
root.innerHTML = renderedTemplate;
