class Character extends Sprite {
    constructor({
      position,
      velocity,
      image,
      frames = { max: 1, hold: 10 },
      sprites,
      animate = false,
      rotation = 0,
      scale = 1,
      dialogue = ['']
    }) {
      super({
        position,
        velocity,
        image,
        frames,
        sprites,
        animate,
        rotation,
        scale
      })
  
      this.dialogue = dialogue
      this.dialogueIndex = 0
    }
  }