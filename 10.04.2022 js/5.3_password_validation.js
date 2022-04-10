const passwordValidationIfElse = argument =>{
    if(argument.length > 7){
        return 'Strong';
    }
    else{
        return 'Weak'
    }
}

const passwordValidationternary = argument =>{
    return argument.length > 7? 'Strong': 'Weak';
}
const passwordValidationLogical = argument =>{
    argument.length>7 &&  console.log( "Strong");
    argument.length<7 &&  console.log("Weak");
}

const passwordValidationAdvanced = argument =>{
    return argument.length>7? /[A-Z]/.test(argument)?'Very Strong':'Strong':'Weak';
}

console.log('if else:',passwordValidationIfElse('12345678'));
console.log('if else:',passwordValidationIfElse('1238'));
console.log('ternary:',passwordValidationternary('12345678'));
console.log('ternary:',passwordValidationternary('1278'));
process.stdout.write('Logical: ');
passwordValidationLogical('123456we');
process.stdout.write('Logical: ');
passwordValidationLogical('123456');
console.log('advanced:',passwordValidationAdvanced('1234567d8'));
console.log('advanced:',passwordValidationAdvanced('1234567D8'));
console.log('advanced:',passwordValidationAdvanced('123458'));