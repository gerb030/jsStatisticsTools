// describe("calculate histogram daa", function() {
//   it("small set of histogram data", function() {
//     var rf = histo([1,1,1,2]);
//     expect(rf[1]).toEqual(0.75);
//     expect(rf[2]).toEqual(0.25);
//   })
// })
// describe("find starting digit for histogram", function() {
//   it("small set of histogram data", function() {
//     var histogramData = findHistogramData(20, [17.8,60,92.7,12.5,100]);
//     expect(histogramData).toEqual({bars:8, start:59.95, end:100});
//   })
// })
describe("find starting number for histogram", function() {
  it("return 1.5", function() {
    var largestNumber = 71.55;
    var startingNumber = 59.95;
    var bars = 8;
    var histogramEndNumber = _generateHistogramData(largestNumber, startingNumber, bars);
    expect(histogramEndNumber).toEqual(1.5);
  })
it("return 1.5", function() {
  var largestNumber = 119.70;
  var startingNumber = 59.95;
  var bars = 12;
  var histogramEndNumber = _generateHistogramData(largestNumber, startingNumber, bars);
  expect(histogramEndNumber).toEqual(7.5);
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
