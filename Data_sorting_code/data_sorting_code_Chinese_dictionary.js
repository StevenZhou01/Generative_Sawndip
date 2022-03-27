const input = [];
const output1 = input.filter(function (item) {
    if (item.hasOwnProperty('character') && item.hasOwnProperty('definition') && item.hasOwnProperty('pinyin') && item.hasOwnProperty('decomposition') && item.hasOwnProperty('radical')) {
        return item;
    }
});

const output = output1.map(element => {
    return {
        character: element.character,
        definition: element.definition,
        pinyin: element.pinyin,
        decomposition: element.decomposition,
        radical: element.radical
    }
});
console.log(JSON.stringify(output));
