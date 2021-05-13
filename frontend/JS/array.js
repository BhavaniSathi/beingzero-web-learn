var arr=[];
var arr1=new arr();
for(var i=0;i<arr.length();i++)
{
    console.log(arr[i]);
}
for(var i=arr.length()-1;i>=0;i--)
{
    console.log(arr[i]);
}
for( var i in arr)
console.log(arr[i+arr.length()-1])