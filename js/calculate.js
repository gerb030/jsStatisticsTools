var Statistics = (function () {
  var s = {};


  /**
  * _defensiveInsert
  * @visibility   private
  * insert a default value for a key if it doesn't exist
  */
  var _defensiveInsert = function(frequencyTable, value, defaultValue) {
    if (frequencyTable[value] == undefined) {
      frequencyTable[value] = 0;
    }
    return frequencyTable;
  };


  s.calcHistogramData = function(numberOfBars, rawData) {
    var sortedData = rawData.sort(function(a, b){return a-b});
    // find starting number digit
    var significantDigit = Statistics.findSignificantDigitLength(sortedData);
    var smallestNumber = Statistics.findSmallestNumber(sortedData);
    var startingNumber = Statistics.findHistogramStartingNumber(smallestNumber, significantDigit);
    // get largest number
    var largestNumber = Statistics.findLargestNumber(sortedData);
    var barWidth = Statistics.calcHistogramBarWidth(smallestNumber, largestNumber, numberOfBars);
    var histogramData = Statistics.generateHistogramData(sortedData, smallestNumber, largestNumber, numberOfBars, barWidth)
    return {
      numberOfBars: numberOfBars,
      barWidth: barWidth,
      start: startingNumber,
      end: largestNumber,
      data : histogramData
    };
  };


  s.calcRelativeFrequencyFromTable = function(data, n) {
    var rfRange = {};
    for(var i in data) {
      rfRange[i] = data[i]/n;
    }
    return rfRange;
  };

  s.calcRelativeFrequencyFromRaw = function(rawData) {
    var n = rawData.length;
    var data = Statistics.countFrequency(rawData);
    return Statistics.calcRelativeFrequencyFromTable(data, n);
  };

  s.generateHistogramData = function(sortedData, smallestNumber, largestNumber, numberOfBars, barWidth) {
    var bars = Statistics.getHistogramBars(smallestNumber, largestNumber, barWidth);
    var data = [];
    for (var b=0;b<bars.length;b++) {
      var lowThreshold = bars[b];
      var highThreshold = bars[b]+barWidth;
      var count = 0;
      for (var n in sortedData) {
        if (lowThreshold <= sortedData[n] && sortedData[n] <= highThreshold) {
          count++;
        }
      }
      data.push({start: lowThreshold, end: highThreshold, value: count});
    }
    return data;
  };

  s.getHistogramBars = function(smallestNumber, largestNumber, barWidth) {
    var bars = [];
    bars.push(smallestNumber);
    var stepper = smallestNumber;
    while (stepper <= largestNumber) {
      stepper += barWidth;
      bars.push(stepper);
    }
    return bars;
  };

  s.calcHistogramBarWidth = function(smallestNumber, largestNumber, bars) {
    var interval = (largestNumber - smallestNumber) / 8;
    return Math.ceil(interval*10)/10;
  };

  s.findHistogramStartingNumber = function(smallestNumber, significantDigit) {
    var minDeduction = 1/Math.pow(10, significantDigit)*5;
    return smallestNumber - minDeduction;
  };


  /**
  * return the number of digits under 1
  * For a range of 50.5, 61.55 and 100, return 2
  */
  s.findSignificantDigitLength = function(sortedData) {
    var digitFound = 0;
    for(var n=0;n<sortedData.length;n++) {
      var strNum = sortedData[n].toString();
      var subData = strNum.indexOf(".") > -1 ? strNum.substr(strNum.indexOf(".")+1) : '';
      if (subData.length > digitFound) {
        digitFound = subData.length;
      }
    }
    return digitFound;
  };

  s.findSmallestNumber = function(sortedSet) {
    sortedSet.sort(function(a, b){return a-b});
    return sortedSet.shift();
  };

  s.findLargestNumber =  function(sortedSet) {
    sortedSet.sort(function(a, b){return a-b});
    return sortedSet.pop();
  };

  /**
  * Calculate modes (most common numbers)
  */
  s.calcModes = function(data) {
    var frequencyTable = Statistics.countFrequency(data);
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
  };

  /**
  * Calculate percentiles
  */
  s.calcPercentile = function(whichPercentile, data) {
    data.sort();
    var location = ((data.length/100)*whichPercentile)-1;
    if (Math.round(location) != location) {
      return (data[Math.floor(location)] + data[Math.ceil(location)]) / 2;
    } else {
      return data[location];
    }
  };

  /**
  * Calculate quartiles
  */
  s.calcQuartile = function(whichQuartile, data) {
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
  };

  /**
  * countFrequency
  * count the absolute frequency of all values in the set
  */
  s.countFrequency = function(data) {
    var frequencyTable = {};
    data.sort();
    var length = data.length;
    for(var i = 0;i<length;i++) {
      _defensiveInsert(frequencyTable, data[i], 0);
      frequencyTable[data[i]]++;
    }
    return frequencyTable;
  };

  /**
  * calcMean
  * Calculates the mean of a set of values
  */
  s.calcMean = function(data) {
    var total = 0;
    var length = data.length;
    for(var i = 0;i<length;i++) {
      total = total + data[i];
    }
    return total/length;
  };

  /**
  * Calculate Median (middle number)
  */
  s.calcMedian = function(data) {
    return Statistics.calcQuartile(2, data);
  };

  return s;
}());
