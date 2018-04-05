
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
console.log(text);

var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);

var textEdited = text.replace('Velociraptor', dinosaurUpperCased);
console.log(textEdited.length/2);

var textEditedShort = textEdited.substr(0, 72);
console.log(textEditedShort);

