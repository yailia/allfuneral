export function toRusType (array: string[]) {
  return array.map(el => {
    switch(el) {
      case "agent":
        return "Агент";
      case "contractor":
        return "Подрядчик"
      default: return el;
    }
  })
}