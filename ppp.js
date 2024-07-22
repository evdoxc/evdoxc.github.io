const fs = require('fs')

let a = fs.readdirSync('videos')

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(a)

let i = 0

b = i => {
    console.log(i, a[i])
    let name = a[i],
        ext = name.split('.')[1]

    fs.rename(`videos/${name}`, `videos/${i}.${ext}`, err => {if (!err) b(i + 1)})
}

b(0)