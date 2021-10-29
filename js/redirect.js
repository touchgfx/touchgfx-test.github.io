if (window && window.location) {
  let version_regex = /^touchgfx-test\.github\.io\/([0-9]*.[0-9]*)/
  // && window.location.pathname.endsWith('/') && window.location.pathname !== '/'
  let path = window.location.pathname
  let match = path.match(version_regex)
  console.log(match)
  if (match == null) {
    let new_path = path.replace("touchgfx-test.github.io", "touchgfx-test.github.io/4.19")
    console.log(new_path)
  }
  // window.history.replaceState('', '', window.location.pathname.substr(0, window.location.pathname.length - 1) + window.location.hash)
}