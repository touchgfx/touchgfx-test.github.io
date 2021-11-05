if (window && window.location) {
  let version_regex = /^\/touchgfx-test\.github\.io\/([0-9]*.[0-9]*)/
  // && window.location.pathname.endsWith('/') && window.location.pathname !== '/'
  let path = window.location.pathname
  let match = path.match(version_regex)
  console.log(path)
  console.log(match)
  if (match == null) {
    path = path.replace("touchgfx-test.github.io", "touchgfx-test.github.io/4.18")
  }
  else {
  }

  if(!path.endsWith('/') && path !== '/') {
    path = path + "/"
  }
  console.log(path)
  console.log(window.location.hash)

  window.history.replaceState('', '', path + window.location.hash)
}