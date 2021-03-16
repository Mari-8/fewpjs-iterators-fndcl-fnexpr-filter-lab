// Code your solution here

function findMatching(drivers, string) {
    let matchingDrivers = drivers.filter(function(driver) {
        return driver.toLowerCase().indexOf(string.toLowerCase()) !== -1 
    })
    return matchingDrivers 
}

function fuzzyMatch(drivers, string) {
    let matchingDrivers = drivers.filter(function(driver) {
        return driver.startsWith(`${string}`) 
    })
    return matchingDrivers
}

function matchName(drivers, string) {
    let matchedDriver = drivers.filter(function(driver) {
        return driver.name == string
    })
    return matchedDriver
}