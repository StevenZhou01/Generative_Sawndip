const input = [];

const output1 = input.filter(function (item){
    if(item.hasOwnProperty('character') &&  item.hasOwnProperty('strokes' ) ){
                  return item;
    }
});

const output = output1.map(element => {
        return {
            character: element.character,
            strokes: element.strokes,
        }
    });
    console.log(JSON.stringify(output));const output1 = input.filter(function (item){
        if(item.hasOwnProperty('character') &&  item.hasOwnProperty('strokes' ) ){
                      return item;
        }
    });
    
    const output = output1.map(element => {
            return {
                character: element.character,
                strokes: element.strokes,
            }
        });
        console.log(JSON.stringify(output));