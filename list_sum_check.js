/*Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.*/

(function main() {
    let k = 17;
    let list = [10, 15, 3, 7, 8, 9, 9, 5];
    let i = 0;
    let j = 0;

    for(i=0;i<=list.length;i++){
        for(j=0;j<=list.length;j++){
         if(list[i]+list[j]===k){
            console.log(list[i] + ' and ' + list[j] + ' add up to '+ k);
         }
        }
    }
}());
