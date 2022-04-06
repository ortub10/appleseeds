const boom = (n) => {
    let output;
    for(let i=1; i<= n ;i++){
      output =i;
        if(i%7 === 0) {
            
            output= "BOOM";
            if(i.toString().includes('7')){
                output+="-BOOM";
            }
        }
        process.stdout.write(output+", ");
    }
}
boom(80);

