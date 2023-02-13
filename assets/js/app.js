document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {
    opacity: 0.9,
   
  });

});



// will have to remove before deploying app
let rawgKey = '576858f4b6fa477990afac4add5f794f';

function halo1() {

    var oneUrl = `https://api.rawg.io/api/games/halo-combat-evolved?key=${rawgKey}`;
  
    fetch(oneUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {      
    let oneName = $('.title-1');
      oneName.append(data.name);
    let oneDescription = $('.game-description-1');
      oneDescription.append(data.description);
    let oneMeta = $('.meta-1')
      oneMeta.append(data.metacritic);
    let oneRelease = $('.release-1')
        oneRelease.append(data.released);
      });
}


function halo2() {

    var twoUrl = `https://api.rawg.io/api/games/halo-2?key=${rawgKey}`;
  
    fetch(twoUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

      let twoName = $('.title-2');
        twoName.append(data.name);
      let twoDescription = $('.game-description-2');
        twoDescription.append(data.description);
      let twoMeta = $('.meta-2')
        twoMeta.append(data.metacritic);
      let twoRelease = $('.release-2')
        twoRelease.append(data.released);
});  
}     
    
  function halo3() {

        var threeUrl = `https://api.rawg.io/api/games/halo-3?key=${rawgKey}`;
      
        fetch(threeUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {

    let threeName = $('.title-3');
      threeName.append(data.name);
    let threeDescription = $('.game-description-3');
      threeDescription.append(data.description);
    let threeMeta = $('.meta-3')
      threeMeta.append(data.metacritic);
    let threeRelease = $('.release-3')
      threeRelease.append(data.released);
    });
    }   

function halo3Odst() {

      var odstUrl = `https://api.rawg.io/api/games/halo-3-odst?key=${rawgKey}`;
    
      fetch(odstUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {

  let odstName = $('.title-odst');
    odstName.append(data.name);
  let odstDescription = $('.game-description-odst');
    odstDescription.append(data.description);
  let odstMeta = $('.meta-odst')
    odstMeta.append(data.metacritic);
  let odstRelease = $('.release-odst')
    odstRelease.append(data.released);
  });
  }   

function haloReach() {

    var reachUrl = `https://api.rawg.io/api/games/halo-reach?key=${rawgKey}`;
  
    fetch(reachUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

let reachName = $('.title-reach');
  reachName.append(data.name);

let reachDescription = $('.game-description-reach');
  // adding different summary bc rawg desc is not an accurate desc
  reachDescription.append(`Halo: Reach takes place in the year 2552, during the Covenant invasion of the Human colony world Reach, which serves as the main military center of the UNSC.
  The game follows Noble Team, a six-man special operations unit of one SPARTAN-II and five SPARTAN-III commandos. The player assumes the role of the team's latest member,
   SPARTAN-B312 or "Noble Six" and will be defending Reach from its ultimate downfall at the hands of the Covenant forces.`);

let reachMeta = $('.meta-reach')
  reachMeta.append(data.metacritic);
let reachRelease = $('.release-reach')
  reachRelease.append(data.released);

});
}   

  function halo4() {

        var fourUrl = `https://api.rawg.io/api/games/halo-4?key=${rawgKey}`;
      
        fetch(fourUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {

    let fourName = $('.title-4');
      fourName.append(data.name);
    let fourDescription = $('.game-description-4');
      fourDescription.append(data.description);
    let fourMeta = $('.meta-4')
      fourMeta.append(data.metacritic);
    let fourRelease = $('.release-4')
      fourRelease.append(data.released);
    });
    }     

  function halo5() {

        var fiveUrl = `https://api.rawg.io/api/games/halo-5-guardians?key=${rawgKey}`;
      
        fetch(fiveUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
   
    let fiveName = $('.title-5');
      fiveName.append(data.name);
    let fiveDescription = $('.game-description-5');
      fiveDescription.append(data.description);
    let fiveMeta = $('.meta-5')
      fiveMeta.append(data.metacritic);
    let fiveRelease = $('.release-5')
      fiveRelease.append(data.released);
    });
    }     

  function haloInfinite() {

        var sixUrl = `https://api.rawg.io/api/games/halo-infinite?key=${rawgKey}`;
      
        fetch(sixUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
    
  let sixName = $('.title-6');
    sixName.append(data.name);
  let sixDescription = $('.game-description-6');
    sixDescription.append(data.description);
  let sixMeta = $('.meta-6')
    sixMeta.append(data.metacritic);
  let sixRelease = $('.release-6')
    sixRelease.append(data.released);
     });
      }

    halo1();
    halo2();
    halo3();
    halo3Odst();
    haloReach();
    halo4();
    halo5();
    haloInfinite();

// function to play theme song (EASTER EGG)
function PlaySound(soundobj) {
    var thissound=document.getElementById('mySound');
    thissound.play();
    thissound.volume = 0.5;
// thissound.addEventListener('mouseover', PlaySound());
}

function StopSound(soundobj) {
    var thissound=document.getElementById('mySound');
    thissound.pause();
    thissound.currentTime = 0;
};

var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player1;
      function onYouTubeIframeAPIReady() {
        player1 = new YT.Player('player1', {
          height: '390',
          width: '640',
          videoId: 'uW_GT2OP3X0',   
        });
        
        player2 = new YT.Player('player2', {
            height: '390',
            width: '640',
            videoId: 'FrOvnXjlcBA'
          });

        player3 = new YT.Player('player3', {
            height: '390',
            width: '640',
            videoId: 'MapTlW80f6Y'
          });

        playerODST = new YT.Player('playerODST', {
            height: '390',
            width: '640',
            videoId: 'u0VjwHY81lo'
          });
        
        playerReach = new YT.Player('playerReach', {
            height: '390',
            width: '640',
            videoId: 'Bs2TPo7z0sM'
          });

        player4 = new YT.Player('player4', {
            height: '390',
            width: '640',
            videoId: 'GO376G4tbGM'
          });

        player5 = new YT.Player('player5', {
            height: '390',
            width: '640',
            videoId: 'Rh_NXwqFvHc'
          });

        player6 = new YT.Player('player6', {
            height: '390',
            width: '640',
            videoId: 'PyMlV5_HRWk'
          });
      }


      // halo reach : https://www.youtube.com/watch?v=Bs2TPo7z0sM