var katzDeli

function takeANumber(katzDeliLine, newPerson) {
  var placeInLine
  katzDeliLine.push(newPerson)
  placeInLine = katzDeliLine.length
  return `Welcome, ${newPerson}. You are number ${placeInLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0){
    var firstInLine = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstInLine}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine) {
  var currentLineString = "The line is currently: "
  if (katzDeliLine.length > 0) {
    for (var i = 0; i<katzDeliLine.length; i++) {
      currentLineString.concat(`${i}. ${katzDeliLine[katzDeliLine.length-1]}`)
    }
    return currentLineString
  } else {
    return 'The line is currently empty.'
  }
}