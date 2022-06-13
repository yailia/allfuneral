//@ts-nocheck
export function toRenderPhone (phone: number) {
  if(!phone) return ''
  var x = phone.toString().replace(/\D/g, '').match(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/);
  return `+${x[1]} (${x[2]}) ${x[3]} - ${x[4]} - ${x[5]}`

}