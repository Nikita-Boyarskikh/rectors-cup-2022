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

export const sortByFields = ({ fields = [], resultField = 'result '} = []) => {
  return (a, b) => {
    const aFinishedResults = fields.map((field) => {
      return a[field]
    }).filter(Boolean)
    const bFinishedResults = fields.map((field) => {
      return b[field]
    }).filter(Boolean)

    if (aFinishedResults.length === bFinishedResults.length) {
      return a.result.localeCompare(b.result)
    }

    return bFinishedResults.length - aFinishedResults.length
  }
}
