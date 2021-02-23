const splitTestToChars = (textNode: HTMLElement): HTMLCollection => {
  const textContent = textNode.textContent
  if (textContent) {
    const textSplit = textContent.split('')
    const flag = document.createDocumentFragment()
    textSplit.forEach(letter => {
      const spanEl = document.createElement('span')
      spanEl.textContent = letter
      spanEl.setAttribute(
        'style',
        'display: inline-block; opacity: 1; position: relative;'
      )
      flag.appendChild(spanEl)
    })
    textNode.textContent = ''
    textNode.appendChild(flag)
  }

  return textNode.children
}

export { splitTestToChars }
