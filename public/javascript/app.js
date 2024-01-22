$(document).ready(function () {
  const imageLists = [];
  const newImageList = [];

  $.ajax({
    url: 'http://localhost:3000/api', //fetch images
    success: function (result) {
      imageLists.push(result);

      $.ajax({
        url: 'http://localhost:3000/api/images', //fetch images Ids
        success: function (result) {
          const imageIdList = result;

          for (let i = 0; i < imageIdList.length; i++) {
            imageLists.filter((imgObject) => {
              //retieving same images, after compaing/checking the same Id to keep the same image data flow
              if (imgObject[i].id == imageIdList[i]) {
                newImageList.push(imgObject[i]);
              }
            });
          }
          setTimeout(function () {
            loadData(newImageList); //loading images after page loads, 1s delay
          }, 1000);
        },
        error: function (error) {
          console.log(`Error in image Id ajax`);
        },
      });
    },
    error: function (error) {
      console.log(`Error in image ajax`);
    },
  });

  // looping over the json data and injecting
  function loadData(data) {
    for (var i = 0; i < data.length; i++) {
      let details = data[i].details;
      $('#container').append(`
      <div class="container">
        <img src=" ${details.imageSrc}" alt="">
        <div class="caption" style="width: 100%;">
          <p>${details.title} details</p>
        </div>
        <div id="overlays" class="overlay" style="background: ${details.overlayColor}50"></div>
      </div>`);
    }
  }

  // Togglin image overlay

  $('body')
    .on('mouseenter', '#overlays', function (event) {
      $(this).toggleClass('transparent');
    })
    .on('mouseleave', '#overlays', function (event) {
      $(this).toggleClass('transparent');
    });
});
