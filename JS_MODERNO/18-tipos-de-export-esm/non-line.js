function group() {
  console.log('Expor nomeado não-inline (agrupado)')
}

function exportDefault() {
  console.log('Export default não-inline')
}

export { group }

export default exportDefault