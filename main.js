Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90  
  });
  
  camera=document.getElementById("camera");
  
  Webcam.attach('#camera');
  function takesnapshot() 
  {
  Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML='<img id = "image" src = "'+data_uri+'" />';   
  }); 
  }
  
  console.log('ml5 version :', ml5.version);
  classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/B9KzI_Kf3/model.json', modelloaded);
   function modelloaded()
   {
  console.log('model is loaded');
   }
  function check()
  {
  img=document.getElementById('image');
  classifier.classify(img,gotresult);
  }
  function gotresult(error,result)
  {
  if (error)
  {
  console.log(error);
  }
  else
  {
  console.log(result);
  document.getElementById("result_object_name").innerHTML=result[0].label;
  document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);  
  }
  }