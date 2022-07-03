// Get all the images
image_array = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img4.jpg',
  'img5.jpg',
  'img6.jpg',
  'img7.jpg',
  'img8.jpg',
  'img9.jpg',
  'img10.jpg',
  'img11.jpg',
  'img12.jpg',
]

var selected_image = 'img';

function get_random_image(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.getElementById('image_shower').src = `./images/${selected_image}`
}

function doStuff(){

  if (selected_image == 'img1.jpg'){
    number = '1';
  }
  else if (selected_image == 'img2.jpg'){
    number = '2';
  }
  else if (selected_image == 'img3.jpg'){
    number = '3';
  }
  else if (selected_image == 'img4.jpg'){
    number = '4';
  }
  else if (selected_image == 'img5.jpg'){
    number = '5';
  }
  else if (selected_image == 'img6.jpg'){
    number = '6';
  }
  else if (selected_image == 'img7.jpg'){
    number = '7';
  }
  else if (selected_image == 'img8.jpg'){
    number = '8';
  }
  else if (selected_image == 'img9.jpg'){
    number = '9';
  }
  else if (selected_image == 'img10.jpg'){
    number = '10';
  }
  else if (selected_image == 'img11.jpg'){
    number = '11';
  }
  else if (selected_image == 'img12.jpg'){
    number = '12';
  }

  result = 'res'+ number +'.png';

  // Display the image
  document.getElementById('image_2').src = `./result/` + result;
}

