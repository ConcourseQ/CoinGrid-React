export function SanitizeString(input) {
  input = typeof input === 'string' && input !== 'null' ? input : ''
  return unescape(unescape(input))
}

export function Slugify(input) {
  if(input==null){return ''}
  return input.replace(' ', '_')
}
 
