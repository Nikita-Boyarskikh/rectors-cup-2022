export const pluralize = (number, one, few, many) => {
  const modulo100 = number % 100
  const modulo10 = number % 10

  let pluralForm = many
  if (modulo100 < 10 || modulo100 > 20) {
    if (modulo10 === 1) {
      pluralForm = one
    }

    if (1 < modulo10 && modulo10 < 5) {
      pluralForm = few
    }
  }

  return `${number} ${pluralForm}`
}

export const roundTo = (x, target) => {
  return (target + x) % target
}
