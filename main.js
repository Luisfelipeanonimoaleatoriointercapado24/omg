function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    //coloque o link do seu modelo no campo correpondente abaixo:
  (link = "https://teachablemachine.withgoogle.com/models/vyFiF5T5z/");
    classifier = ml5.imageClassifier('seuMODELO/model.json',modelLoaded);
  }
  
  function modelLoaded() {
      console.log('Model Loaded!');
  }
  
  function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
  }
  
  function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_object_name").innerHTML = results[0].label;
      document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
  }