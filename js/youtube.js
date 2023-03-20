  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  function onYouTubeIframeAPIReady() {
     new YT.Player('.player', {
      videoId: 'EJF919p_hb0',  // 영상 재생할 유튜브 ID
      playerVars:{
        autoplay:true,  // 자동재생 유무
        loop:true,      // 반복재생 유무
        playList:['zorYgb5ayw8','dhOd9cyXe7I','ee973zMi0Cs'] // 반복재생할 유튜브 주소 모아보기 
      },
       events:{
            onReady:function(event){
                event.target.mute() // 음소거
            }
       }
    });
  }