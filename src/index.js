const simpleStatistics = require('simple-statistics')

//console.log(simpleStatistics)

var ages = [29, 16, 17, 13]
console.log('The ages are :' , ages)
console.log(simpleStatistics.max(ages))
console.log('min is :')
console.log(simpleStatistics.min(ages))
console.log('average is :')
console.log(simpleStatistics.average(ages))
console.log('mode is :')
console.log(simpleStatistics.mode(ages))
console.log('median is :')
console.log(simpleStatistics.median(ages))
console.log('sum is :')
console.log(simpleStatistics.sum(ages))
console.log('mean is:')
console.log(simpleStatistics.mean(ages))
console.log('extent is :')
console.log(simpleStatistics.extent(ages))
// max ([29, 16, 17, 13])
// min ([29, 16, 17, 13])
// mode ([29, 16, 17, 13])