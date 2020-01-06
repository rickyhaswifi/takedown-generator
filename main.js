document.getElementById('takedownForm').addEventListener('submit', function(event){
  event.preventDefault();
  });
  
  document.getElementById('nameInput').addEventListener('input', function(e){
    let labelname = e.target.value;
    document.getElementById('nameOutput').innerHTML = labelname;
  });
  document.getElementById('clientSongInput').addEventListener('input', function(e){
    let clientsong = e.target.value;
    document.getElementById('clientSongOutput').innerHTML = clientsong;
    document.getElementById('clientSongOutputSubject').innerHTML = clientsong;
  });
  
  
  document.getElementById('songInput').addEventListener('input', function(e){
    let songinfr = e.target.value;
    document.getElementById('songOutput').innerHTML = songinfr;
  });
  
  document.getElementById('artistInput').addEventListener('input', function(e){
    let artistinfr = e.target.value;
    document.getElementById('artistOutput').innerHTML = artistinfr;
    document.getElementById('artistOutputText').innerHTML = artistinfr;
  });
  
  document.getElementById('ytInput').addEventListener('input', function(e){
    let ytartist = e.target.value;
    document.getElementById('ytOutput').innerHTML = ytartist;
    document.getElementById('ytHREF').innerHTML = ytartist;
  });
  
  
  songs = [];
  
  const resetForm = () => {
    document.getElementById('takedownForm').reset();
    document.getElementById('nameOutput').innerHTML = '';
    document.getElementById('clientSongOutput').innerHTML = '';
    document.getElementById('songOutput').innerHTML = '';
    document.getElementById('artistOutput').innerHTML = '';
    document.getElementById('ytOutput').innerHTML = '';
    document.getElementById('clientSongOutputSubject').innerHTML = '';
    document.getElementById('artistOutputText').innerHTML = '';
  }
  
  const copyPasta = () => {
  let copyText = document.getElementById('copyCont');
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }