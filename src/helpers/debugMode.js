const renderDebugMode = view => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())

  if (params.hasOwnProperty("debug") && params.debug) {
    return view
  } else {
    return null
  }
}

export default renderDebugMode
