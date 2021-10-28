if (window && window.location) {
  // && window.location.pathname.endsWith('/') && window.location.pathname !== '/'
  let path = window.location.pathname
  console.log(path)
  // window.history.replaceState('', '', window.location.pathname.substr(0, window.location.pathname.length - 1) + window.location.hash)
}