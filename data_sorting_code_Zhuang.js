const input = [];

const output1 = input.filter(function (item){
    if(item.hasOwnProperty('sounds') &&  item.hasOwnProperty('pos' ) && item.hasOwnProperty('senses')){
               const regex = new RegExp('[a-z ]');
               if(regex.test(item.word)==true){
                  return item;
              }
    }
});

const output = output1.map(element => {
        return {
            pos: element.pos,
            word: element.word,
            sound: element.sounds[0].ipa,
            meaning: element.senses.map(e => e.raw_glosses[0])
        }
    });
    console.log(JSON.stringify(output));