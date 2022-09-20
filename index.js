const driversList = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function (driversList){
    return driversList.slice(0,2)
}

const returnLastTwoDrivers = function (driversList){
    return driversList.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (integerMultiplier) {
    return function (fare){
        return (integerMultiplier*fare)
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)



function selectDifferentDrivers(driversList, selectingDrivers){
    if (selectingDrivers === returnFirstTwoDrivers){return driversList.slice(0,2)}
    else if (selectingDrivers === returnLastTwoDrivers){return driversList.slice(2,4)}
}
