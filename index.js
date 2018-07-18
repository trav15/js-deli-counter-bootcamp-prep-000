var katzDeli

function takeANumber(katzDeliLine, newPerson) {
  var placeInLine
  katzDeliLine.push(newPerson)
  placeInLine = katzDeliLine.length
  return `Welcome, ${newPerson}. You are number ${placeInLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine<=1){
    var firstInLine = katzDeliLine[0]
    katzDeliLine.shift()
    return firstInLine
  } else {
    return 'There is nobody waiting to be served!'
  }
}