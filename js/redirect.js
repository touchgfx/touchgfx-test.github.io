
if (window && window.location) {
  let version_regex = /^\/touchgfx-test\.github\.io\/([0-9]*.[0-9]*)/
  let newest_version = "4.18"
  let path = window.location.pathname
  let new_path = path
  let match = path.match(version_regex)
  console.log(path)
  if (match == null) {
    new_path = newest_version + new_path
    // new_path = path.replace("touchgfx-test.github.io", "touchgfx-test.github.io/4.18")
  }

  if(new_path.endsWith('/') && new_path !== '/') {
    new_path = new_path.substr(0, new_path.length - 1)
  }

  if (new_path !== path) {
    window.location.replace(new_path + window.location.hash)
  }
}