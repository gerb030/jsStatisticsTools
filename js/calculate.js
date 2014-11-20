function findHistogramData(bars, rawData) {
  var sortedData = rawData.sort();
  var significantDigit = _findSignificantDigitLength(sortedData);
  var smallestNumber = _findSmallestNumber(sortedData);
  var startingNumber = _findHistogramStartingNumber(smallestNumber, significantDigit);
  var largestNumber = _findLargestNumber(sortedData);
  var histogramData = _generateHistogramData(smallestNumber, largestNumber, bars)
  return {bars:20, start:59.95, end:100};
}

function _generateHistogramData(largestNumber, smallestNumber, bars) {
  var interval = (largestNumber - smallestNumber) / 8;
  return Math.ceil(interval*10)/10;
}

function _findHistogramStartingNumber(smallestNumber, significantDigit) {
  var minDeduction = 1/Math.pow(10, significantDigit)*5;
  return smallestNumber - minDeduction;
}
/**
* return the number of digits under 1
* For a range of 50.5, 61.55 and 100, return 2
*/
function _findSignificantDigitLength(sortedData) {
  var digitFound = 0;
  for(var n=0;n<sortedData.length;n++) {
    var strNum = sortedData[n].toString();
    var subData = strNum.indexOf(".") > -1 ? strNum.substr(strNum.indexOf(".")+1) : '';
    if (subData.length > digitFound) {
      digitFound = subData.length;
    }
  }
  return digitFound
}
function _findSmallestNumber(sortedSet) {
  sortedSet.sort();
  return sortedSet.shift();
  // var smallest = null;
  // for(var n=0;n<set.length;n++) {
  //   if(set[n] < smallest || smallest == null) {
  //     smallest = set[n];
  //   }
  // }
  // return smallest;
}
function _findLargestNumber(sortedSet) {
  sortedSet.sort();
  return sortedSet.pop();
  // var largest = null;
  // for(var n=0;n<set.length;n++) {
  //   if(set[n] < smallest || smallest == null) {
  //     smallest = set[n];
  //   }
  // }
  // return smallest;
}

function calcRFFromTable(data, n) {
  var rfRange = {};
  for(var i in data) {
    rfRange[i] = data[i]/n;
  }
  return rfRange;
}

function calcRFFromRaw(rawData) {
  var n = rawData.length;
  var data = countFrequency(rawData);
  return calcRFFromTable(data, n);
}

/**
* Calculate modes (most common numbers)
*/
function calcModes(data) {
  var frequencyTable = countFrequency(data);
  var modes = [];
  var highestFrequency = 0;
  for(var n in frequencyTable) {
    if (frequencyTable[n] == highestFrequency) {
      modes.push(parseInt(n, 10));
    } else if (frequencyTable[n] > highestFrequency) {
      modes = [parseInt(n, 10)];
      highestFrequency = frequencyTable[n];
    }
  }
  return modes;
}

/**
* Calculate percentiles
*/
function calcPercentile(whichPercentile, data) {
  data.sort();
  var location = ((data.length/100)*whichPercentile)-1;
  if (Math.round(location) != location) {
    return (data[Math.floor(location)] + data[Math.ceil(location)]) / 2;
  } else {
    return data[location];
  }
}

/**
* Calculate quartiles
*/
function calcQuartile(whichQuartile, data) {
  if (whichQuartile < 1 || whichQuartile > 3) {
    throw new Error('Not a valid quartile');
  }
  //return calcPercentile(whichQuartile*25, data);
  data.sort();
  var location = ((data.length+1)/4)*whichQuartile-1;
  if (Math.round(location) != location) {
    return (data[Math.floor(location)] + data[Math.ceil(location)]) / 2;
  } else {
    return data[location];
  }
}

/**
* Calculate Median (middle number)
*/
function calcMedian(data) {
  return calcQuartile(2, data);
}



/**
* calcMean
* Calculates the mean of a set of values
*/
function calcMean(data) {
  var total = 0;
  var length = data.length;
  for(var i = 0;i<length;i++) {
    total = total + data[i];
  }
  return total/length;
}

/**
* countFrequency
* count the absolute frequency of all values in the set
*/
function countFrequency(data) {
    var frequencyTable = {};
    data.sort();
    var length = data.length;
    for(var i = 0;i<length;i++) {
      _defensiveInsert(frequencyTable, data[i], 0);
      frequencyTable[data[i]]++;
    }
    return frequencyTable;
}

/**
* _defensiveInsert
* insert a default value for a key if it doesn't exist
*/
function _defensiveInsert(frequencyTable, value, defaultValue) {
  if (frequencyTable[value] == undefined) {
    frequencyTable[value] = 0;
  }
  return frequencyTable;
}