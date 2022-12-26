// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    let blockDistance;
    if (pickupLocation > 42) {
        blockDistance = pickupLocation - 42;
    } else {
        blockDistance = 42 - pickupLocation;
    }
    return blockDistance;
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let distanceInFeet;
    if (start > destination) {
        distanceInFeet = (start - destination) * 264;
    } else {
        distanceInFeet = (destination - start) * 264;
    }
    return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
    let feetDistance = distanceTravelledInFeet(start, destination);
    let farePrice;
    if (feetDistance <= 400) {
        farePrice = 0;
    } else if (feetDistance <= 2000) {
        farePrice = (feetDistance - 400) * 0.02;
    } else if (feetDistance <= 2500) {
        farePrice = 25;
    }
    else {
        farePrice = "cannot travel that far";
    }
    return farePrice;
}