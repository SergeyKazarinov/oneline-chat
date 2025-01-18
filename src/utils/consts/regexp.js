export const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi; // ищет все значения между {{ }}
export const DOUBLE_FIGURE_REGEXP = /\{\{|\}\}/g; // выражение для преобразования двойных фигурных в одинарные ({{ }} => { })

export const INCLUDE_REGEXP = /<include[^>]*>[\s\S]*?<\/include>/gi; // ищет теги include
export const INCLUDE_REPLACE_REGEXP = /<include[^>]*>|<\/include>/gi; // выражения для удаления тегов

export const SRC_ATTRIBUTE_REGEXP = /src="{%[\s\S]*?%}">/gi; // выражение для поиска аттрибута template
export const SRC_CONTENT_REGEXP = /src="{%[\s\S]*?%}"/gi; // выражение поиска содержимого внутри template в теге <include>
export const SRC_REPLACE_ATTRIBUTE_REGEXP = /src="{%|%}">/gi; // выражение для удаления соответствий
