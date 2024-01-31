Webcam.set({
    width: 350,
    heigth: 300,
    image_format: 'jpeg',
    jpeg_quality: 100
})

camera = document.getAnimations("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById('result').innerHTML = '<img id = "capture_image" src="' + data_uri + '"/>';
    })
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('', modelLoaded);

function modelLoaded() {
    console.log("Modelo cargado")
}