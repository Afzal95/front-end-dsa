// Example 1:
// Input:
// n = 5,m = 5.
// arr1[] = {1,2,3,4,5}  
// arr2[] = {2,3,4,4,5}
// Output:
//  {1,2,3,4,5}

// Explanation: 
// Common Elements in arr1 and arr2  are:  2,3,4,5
// Distnict Elements in arr1 are : 1
// Distnict Elemennts in arr2 are : No distinct elements.
// Union of arr1 and arr2 is {1,2,3,4,5} 

// Example 2:
// Input:
// n = 10,m = 7.
// arr1[] = {1,2,3,4,5,6,7,8,9,10}
// arr2[] = {2,3,4,4,5,11,12}
// Output: {1,2,3,4,5,6,7,8,9,10,11,12}
// Explanation: 
// Common Elements in arr1 and arr2  are:  2,3,4,5
// Distnict Elements in arr1 are : 1,6,7,8,9,10
// Distnict Elemennts in arr2 are : 11,12
// Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12} 
 //1- using Map()
function union(arr1,arr2){
    let freq = new Map(); // stores in key value pair in ascending order by default
    let unionArr = [];
    for(let num of arr1){
        freq.set(num,(freq.get(num)|| 0)+1)
    }
    for(let num of arr2){
        freq.set(num,(freq.get(num)|| 0)+1)
    }
    for(let [num,i] of freq){
        unionArr.push(num)
    }
    return unionArr
}
// let arr1 = [1,2,3];
// let arr2 = [4,7]
//union(arr1,arr2) // TC- O(m+n)log(m+n); SC- O(N+M)

// Optimal way- considering array is sorted, ascending order
function unionOpt(arr1,arr2){
    let i=0;
    let j=0;
    let union = [];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            if(union.length===0 || union[union.length-1]!==arr1[i]){
                union.push(arr1[i])
            }
            i++;
        }else{
            if(union.length===0 || union[union.length-1]!==arr2[j]){
                union.push(arr2[j])
            }
            j++;
        }
    }
    while(i<arr1.length){
        if(union[union.length-1]!==arr1[i]){
            union.push(arr1[i])
        }
        i++;
    }
    while(j<arr2.length){
        if(union[union.length-1]!==arr2[j]){
            union.push(arr2[j])
        }
        j++;
    }
    console.log(union,i,j);
}
let arr1 = [1,2,3,4,5,6,7,8,9,10];
let arr2 = [2,3,4,4,5,11,12]
unionOpt(arr1,arr2) // TC- O(m+n), SC- O(m+n);