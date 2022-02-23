// Code your solution here
function findMatching(drivers, nameStr) {
  const matches = drivers.filter(driver => driver.toLowerCase().includes(nameStr.toLowerCase()))
  return matches
}


function fuzzyMatch(drivers, lttrStr) {
  const matches = drivers.filter(driver => driver.toLowerCase().startsWith(lttrStr.toLowerCase()))
  return matches
}


function matchName(drivers, nameStr) {
  const matches = drivers.filter(driver => driver.name.toLowerCase().includes(nameStr.toLowerCase()))
  return matches
}