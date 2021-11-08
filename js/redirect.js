if (window && window.location) {
  let version_regex = /^\/touchgfx-test\.github\.io\/([0-9]*.[0-9]*)/
  let path = window.location.pathname
  let new_path = path
  let match = path.match(version_regex)
  if (match == null) {
    new_path = path.replace("touchgfx-test.github.io", "touchgfx-test.github.io/4.18")
  }

  if(new_path.endsWith('/') && new_path !== '/') {
    new_path = new_path.substr(0, new_path.length - 1)
  }

  if (new_path !== path) {
    window.location.replace(new_path + window.location.hash)
  }
}