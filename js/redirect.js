if (window && window.location) {
  let version_regex = /^\/touchgfx-test\.github\.io\/([0-9]*.[0-9]*)/
  let path = window.location.pathname
  let match = path.match(version_regex)
  if (match == null) {
    path = path.replace("touchgfx-test.github.io", "touchgfx-test.github.io/4.18")
  }

  if(path.endsWith('/') && path !== '/') {
    path = path.substr(0, path.length - 1)
  }
  window.location.replace(path + window.location.hash)
}