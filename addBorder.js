//Given a rectangular matrix of characters, add a border of asterisks(*) to it.
function addBorder(picture) {
    picture = picture.map(function(picture){
        return '*' + picture + '*';
    });
    picture.unshift("*".repeat(picture[0].length));
    picture.push("*".repeat(picture[picture.length - 1].length));
    return picture;
}
