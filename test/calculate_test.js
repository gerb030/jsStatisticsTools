// describe("calculate histogram daa", function() {
//   it("small set of histogram data", function() {
//     var rf = histo([1,1,1,2]);
//     expect(rf[1]).toEqual(0.75);
//     expect(rf[2]).toEqual(0.25);
//   })
// })
// describe("generate histogram data", function() {
//   it("generate correct data", function() {
//     var sortedData = [40, 40, 60, 60, 80, 80, 100, 100];
//     var largestNumber = 100;
//     var startingNumber = 39.5;
//     var bars = 5;
//     // var barWidth = _generateHistogramData(sortedData, startingNumber, largestNumber, bars);
//     // expect(barWidth).toEqual(10);
//   })
// })
describe("histogram data", function() {
  it("small set of histogram data", function() {
    var histogramData = calcHistogramData(20, [47,51,54.2,64,92.7,12.5,100,17.8,23,27,31,31.6,36]);
    expect(histogramData.numberOfBars).toEqual(20);
    expect(histogramData.barWidth).toEqual(11);
    expect(histogramData.start).toEqual(12.0);
    expect(histogramData.end).toEqual(100);
    expect(histogramData.data[0]).toEqual({start: 12.5, end: 23.5, value: 2});
    expect(histogramData.data[1]).toEqual({start: 23.5, end: 34.5, value: 3});
    expect(histogramData.data[2]).toEqual({start: 34.5, end: 45.5, value: 1});
    expect(histogramData.data[3]).toEqual({start: 45.5, end: 56.5, value: 3});
    expect(histogramData.data[4]).toEqual({start: 56.5, end: 67.5, value: 1});
    expect(histogramData.data[5]).toEqual({start: 67.5, end: 78.5, value: 0});
    expect(histogramData.data[6]).toEqual({start: 78.5, end: 89.5, value: 0});
    expect(histogramData.data[7]).toEqual({start: 89.5, end: 100.5, value: 1});
    expect(histogramData.data[8]).toEqual({start: 100.5, end: 111.5, value: 0});    
  })
})
describe("histogram get ordered data", function() {
  it("return bardata", function() {
    var sortedData = [40, 45, 57, 63, 69, 86, 93, 100, 101, 103 ];
    var start = 39.95;
    var end   = 93.2;
    var numberOfBars = 6;
    var barWidth = 20;
    var barData = _generateHistogramData(sortedData, start, end, numberOfBars, barWidth);
    expect(barData).toEqual([
      { start : 39.95, end : 59.95, value : 3 },
      { start : 59.95, end : 79.95, value : 2 },
      { start : 79.95, end : 99.95, value : 2 },
      { start : 99.95, end : 119.95, value : 3 }
      ]);

  })
})
describe("histogram get bars", function() {
  it("return bardata", function() {
    var start = 39.5;
    var end   = 86;
    var bars = 10;
    var barData = _getHistogramBars(start, end, bars);
    expect(barData).toEqual([ 39.5, 49.5, 59.5, 69.5, 79.5, 89.5 ]);
  })
})
describe("find absolute bar width", function() {
  it("return 10", function() {
    var largestNumber = 100;
    var startingNumber = 20;
    var bars = 8;
    var barWidth = _calcHistogramBarWidth(startingNumber, largestNumber, bars);
    expect(barWidth).toEqual(10);
  })
  it("return 10", function() {
    var largestNumber = 127.5;
    var startingNumber = 13;
    var bars = 10;
    var barWidth = _calcHistogramBarWidth(startingNumber, largestNumber, bars);
    expect(barWidth).toEqual(14.4);
  })
})
describe("get histogram range", function() {
it("small set", function() {
  var largestNumber = _findLargestNumber([12,14,57,99]);
  expect(largestNumber).toEqual(99);
})
})
describe("get histogram range", function() {
  it("small set", function() {
    var largestNumber = _findLargestNumber([12,14,57,99]);
    expect(largestNumber).toEqual(99);
  })
})
describe("find largest number in sorted list", function() {
  it("small set", function() {
    var largestNumber = _findLargestNumber([12,14,57,99]);
    expect(largestNumber).toEqual(99);
  })
})
describe("find starting number for histogram", function() {
  it("no digits", function() {
    var histogramStartingNumber = _findHistogramStartingNumber(12, 1);
    expect(histogramStartingNumber).toEqual(11.5);
  })
  it("one digit", function() {
    var histogramStartingNumber = _findHistogramStartingNumber(12.5, 2);
    expect(histogramStartingNumber).toEqual(12.45);
  })
  it("two digits", function() {
    var histogramStartingNumber = _findHistogramStartingNumber(12.5, 3);
    expect(histogramStartingNumber).toEqual(12.495);
  })
})
describe("find significant digit for histogram", function() {
  it("real numbers", function() {
    var significantDigitLength = _findSignificantDigitLength([17.8,59,92.7,12.5,100]);
    expect(significantDigitLength).toEqual(1);
  })
  it("natural numbers", function() {
    var significantDigitLength = _findSignificantDigitLength([17,59,92,12,100]);
    expect(significantDigitLength).toEqual(0);
  })
})
describe("find smallest number in set", function() {
  it("find smallest number inset", function() {
    var smallest = _findSmallestNumber([62.8,59.5,92.8]);
    expect(smallest).toEqual(59.5);
  })
  it("find smallest number in set", function() {
    var smallest = _findSmallestNumber([47,51,54.2,64,92.7,12.5,100,17.8,23,27,31,31.6,36]);
    expect(smallest).toEqual(12.5);
  })
})
describe("calculate relative frequency from frequency table", function() {
  it("relative RF, small set", function() {
    var rf = calcRFFromTable({1:9,2:1}, 10);
    expect(rf[1]).toEqual(0.9);
    expect(rf[2]).toEqual(0.1);
  })
})
describe("calculate relative frequency from raw", function() {
  it("relative RF, small set", function() {
    var rf = calcRFFromRaw([1,1,1,2]);
    expect(rf[1]).toEqual(0.75);
    expect(rf[2]).toEqual(0.25);
  })
it("relative RF, small set", function() {
  var rf = calcRFFromRaw([1,1,1,1,1,1,1,1,1,2]);
  expect(rf[1]).toEqual(0.9);
  expect(rf[2]).toEqual(0.1);
})
})
describe("calculate the percentile", function() {
  it("percentile 90, should return 7", function() {
    var p90 = calcPercentile(90, [4,2,6,7,9,5,1,4,2,6]);
    expect(p90).toEqual(7);
  })
  it("percentile 25, should return 2", function() {
    var p90 = calcPercentile(25, [4,2,6,7,9,5,1,4,2,6]);
    expect(p90).toEqual(2);
  })
  it("percentile 75, should return something", function() {
    var p90 = calcPercentile(75, [4,2,6,7,9,5,1,4,2,6]);
    expect(p90).toEqual(6);
  })
  it("percentile 33, should return something", function() {
    var p90 = calcPercentile(33, [4,2,6,7,9,5,1,4,2,6]);
    expect(p90).toEqual(3);
  })
})
describe("calculate the quartile", function() {
  it("quartile 1, should return 4", function() {
    var q1 = calcQuartile(1, [3,4,4,5,6,8,8]);
    expect(q1).toEqual(4);
  })
  it("quartile 2, should return 5", function() {
    var q2 = calcQuartile(2, [3,4,4,5,6,8,8]);
    expect(q2).toEqual(5);
  })
  it("quartile 3, should return 8", function() {
    var q3 = calcQuartile(3, [3,4,4,5,6,8,8]);
    expect(q3).toEqual(8);
  })
  it("quartile 4, should throw error", function() {
    expect(function(){calcQuartile(4,[3,4,4,5,6,8,8])}).toThrow();
  })
})
describe("calculate the mode", function() {
  it("modal, should return 4", function() {
    var myMode = calcModes([1,4,5,4,5,6,7,3,3,4,1,2,4,1,4,7,4,7,1,2,3,4,7]);
    expect(myMode).toEqual([4]);
  })
  it("bimodal, should return 420 and 430", function() {
    var myMode = calcModes([420,430,430,420,460,410,480]);
    expect(myMode).toEqual([420, 430]);
  })
})
describe("median", function() {
  it("1,2,3,4 returns 2.5", function() {
    var myMedian = calcMedian([1,2,3,4]);
    expect(myMedian).toBe(2.5);
  })
  it("odd amount of values returns 5", function() {
    var myMedian = calcMedian([1,1,2,5,6,6,9]);
    expect(myMedian).toBe(5);
  })
  it("odd amount of values returns 4", function() {
    var myMedian = calcMedian([1,1,2,6,6,9]);
    expect(myMedian).toBe(4);
  })
})
describe("mean", function() {
  it("1,2,2,3 returns 2", function() {
    var myMean = calcMean([1,2,2,3]);
    expect(myMean).toBe(2);
  })
  it("7 return 7", function() {
    var myMean = calcMean([7]);
    expect(myMean).toBe(7);
  })
  it("23434,5235,6463,3463456,432,543534,5436,5456,545545", function() {
    var myMean = calcMean([23,27,29,29,12,17,21,22,28]);
    expect(myMean).toBe(23.11111111111111);
  })
})
/*
* Frequency Table
*/
describe("frequencyTable of data", function() {
  it("count frequency of values", function() {
    var data = [1,2,3,4,1,2,3,4,1,2,3,4];
    var frequencyTable = countFrequency(data);
    expect(frequencyTable).toEqual({1:3, 2:3, 3:3, 4:3});
  })
  it("count frequency of values", function() {
     var data = [1,2,4,6,4,5,6,4,2,3,4,3,4,3,2,5,2,5,5,3,4,3];
     var frequencyTable = countFrequency(data);
     expect(frequencyTable).toEqual({1:1, 2:4, 3:5, 4:6, 5:4, 6:2});
  })
})
/
describe("defensive insert, helper function", function() {
  it("defensive insert", function() {
    var table = {};
    var output = _defensiveInsert(table, 2, 0);
    expect(output).toEqual({ 2 : 0 });
  })
  it("defensive insert with existing value", function() {
    var table = { 2 : 19 };
    var output = _defensiveInsert(table, 2, 0);
    expect(output).toEqual({ 2 : 19 });
  })
})
