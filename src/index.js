module.exports = function toReadable (number) {
  let num = [
    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    'hundred'
  ]
	
   let numb = number.toString().split('')
  
  if(number.toString().length == 1){
    return num[0][number]
  } 
  if(number.toString().length == 2){
    if(number<20){
    	return num[1][number-10]
    }
    else if(number%10==0){
    	return num[2][numb[0]]
    }
		else{
      return num[2][numb[0]]+ ' ' +num[0][numb[1]]
    } 
  } 
  if(number.toString().length == 3){
    if(number%100==0){
    let numb = number.toString().split('')
      return num[0][numb[0]] + ' ' + num[3]
    }
    else if(numb[1]>=2 && number%10 == 0){
      return num[0][numb[0]] + ' ' + num[3] + ' ' + num[2][numb[1]]
    }
    else if(numb[1]<2 && numb[1]>0){
      return num[0][numb[0]] + ' ' + num[3] + ' ' + num[1][numb[2]]
    }
    else if(numb[1]==0){
      return num[0][numb[0]] + ' ' + num[3] + ' ' + num[0][numb[2]]
    } else {
    	return num[0][numb[0]] + ' ' + num[3] + ' ' + num[2][numb[1]] + ' ' + num[0][numb[2]]
    }
  } 


}
