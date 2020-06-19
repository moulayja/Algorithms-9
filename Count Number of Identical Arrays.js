function countIdenticalArrays(arr1, arr2, arr3, arr4) {
	var originalArr = [arr1,arr2,arr3,arr4].map(x => x.toString())
	var compArr = [...new Set(originalArr)]
	var difference = originalArr.length - compArr.length
	
	return difference === 0 ? 0 : difference + 1
}