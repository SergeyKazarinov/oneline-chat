export const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi; // ищет все значения между {{ }}
export const DOUBLE_FIGURE_REGEXP = /\{\{|\}\}/g // выражение для преобразования двойных фигурных в одинарные ({{ }} => { })

export const INCLUDE_REGEXP = /<include[^>]*>[\s\S]*?<\/include>/gi; // ищет теги include
export const INCLUDE_REPLACE_REGEXP = /<include[^>]*>|<\/include>/gi; // выражения для удаления тегов

export const TEMPLATE_ATTRIBUTE_REGEXP = /template="{%[\s\S]*?%}">/gi; // выражение для поиска аттрибута template
export const TEMPLATE_CONTENT_REGEXP = /template="{%[\s\S]*?%}"/gi // выражение поиска содержимого внутри template в теге <include>
export const TEMPLATE_REPLACE_ATTRIBUTE_REGEXP = /template="{%|%}">/gi; // выражение для удаления соответствий
