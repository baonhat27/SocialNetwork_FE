import incomingCallSound from '../sound/incomingsound.mp3'
const audio = new Audio(incomingCallSound)

function playIncomingSound() {
  audio.load();
  audio.play()
}

function stopIncomingSound() {
  audio.pause()
  audio.remove()
}

export { playIncomingSound, stopIncomingSound }