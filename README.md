jsStatisticsTools

A bunch of basic Javascript statistics tools, written for the purpose of Learning and Fun.


Usage
-----

// Mean
var mean = Statistics.calcMean([1,2,2,3]); // returns 2

// Median
var median = Statistics.calcMedian([1,1,2,5,6,6,9]);
// median is 5

// Calculate modes
var modes = Statistics.calcModes([1,1,1,1,2]);
// returns [1];
var modes = Statistics.calcModes([420,430,430,420,460,410,480]);
// returns [420, 430] - bimodal set

// histogram data
var histogramData = Statistics.calcHistogramData(20, [47,51,54.2,64,92.7,12.5,100,17.8,23,27,31,31.6,36]);
// return histogram data as follows:
//   {
//     numberOfBars: numberOfBars(int),
//     barWidth: barWidth(int),
//     start: startingNumber(int),
//     end: largestNumber(int),
//     data : [
//              {start: startAt,
//               end: endAt,
//               value: numberOfValuesInRange}*
//            ]
//   }

// relative frequency within a set
var rf = Statistics.calcRelativeFrequencyFromRaw([1,1,1,2]);
// returns { 1 :0.75, 2 : 0.25}

// Calculate quartiles
// Signature : Statistics.calcQuartile([quartiles int], [values array]);
var q3 = Statistics.calcQuartile(3, [3,4,4,5,6,8,8]);
// q3 == 8


// Calculate percentiles
// Signature : Statistics.calcPercentile([percentage int], [values array]);
var p90 = Statistics.calcPercentile(90, [4,2,6,7,9,5,1,4,2,6]);
// p90 is 7

// smallest number in set
Statistics.findSmallestNumber([12,14,57,99] // returns 12

// largest number in set
Statistics.findLargestNumber([12,14,57,99] // returns 99
