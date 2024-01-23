$(document).ready(function () {
  const imageLists = [];
  $.ajax({
    url: `http://localhost:3000/api/images`, //fetch images Ids
    success: function (result) {
      const imageIdList = result;
      for (let i = 0; i < imageIdList.length; i++) {
        const element = imageIdList[i];
        $.ajax({
          url: `http://localhost:3000/api/image/${element}`, //fetch images
          async: false,
          success: function (result) {
            const image = result;
            imageLists.push(image);
            console.log(`2nd AJAX call running`);
          },
          error: function (error) {
            console.log(`Error in image list ajax`);
          },
        });
      }
      loadData(imageLists);
    },
    error: function (error) {
      console.log(`Error in image Id ajax`);
    },
  });

  function loadData(imageLists) {
    imageLists.map((item) => {
      return $('#container').append(`
     <div class="container">
         <img src=" ${item.imageSrc}" alt="">
         <div class="caption" style="width: 100%;">
           <p>${item.title}</p>
         </div>
         <div id="overlays" class="overlay" style="background: ${item.overlayColor}50"></div>
    </div>`);
    });
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
