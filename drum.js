/*Things we learned about:
    keyevents, playing audio, listening to the transition end event, dealing with animations.
    things I learnt personally:
        document.querySelector , .play(), this, .addEventListener, .add and .remove,
        removeTransition, document.querySelectorAll(), classList.add or classList.remove
*/


function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(e.keyCode);
    if (!audio) return; // stop the functionf from running altogether
    audio.currentTime = 0; //rewind it to the start
    audio.play();
    //console.log(audio);
    //console.log(key);
    key.classList.add("playing");

}

function removeTransition(e) {
    //console.log(e);
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    //console.log(e.propertyName); 
    this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);