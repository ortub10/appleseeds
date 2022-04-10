const popularLanguages = language =>{
    switch(language){
        case 'mandarin':
            console.log('MOST number of native speakers!');
        break;
        case 'spanish':
            console.log('2nd place in number of native speakers');
        break;
        case 'english':
            console.log('3nd place');
        break;
        case 'hindi':
            console.log('Number 4');
        break;
        case 'arabic':
            console.log('5nd most spoken language');
        break;
        default:
            console.log('Not in the top 5')
        
    }
}

popularLanguages('english');