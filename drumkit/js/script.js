  function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    //ES6 - const, select audio/key class element using attribute selector
    //use backtics and ES6 template string to select element
    if(!audio) return; //ends function if audio not found
    audio.currentTime = 0;//resets sound after it is played so there is no lag
    audio.play();//plays audio when event occurs
    key.classList.add('playing');//adds class to change keys
  }
  function removeTransition (event){
    if(event.propertyName !== 'transform') return;
      //skip if event is not a transform
      this.classList.remove('playing')
      //this is equal to key since that is what the event is
      //called on; removes playing class when transform ends
  }
  const keys = document.querySelectorAll('.key');//select all keys
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  //for each key, add the event listener that listens for the end
  //of the transition and calls removeTransition function
  window.addEventListener('keydown', playSound);
  //where you're listening and for what, call function to
  //play sound on key down


