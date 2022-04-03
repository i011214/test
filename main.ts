basic.forever(function () {
    music.playMelody("E G - C D E F F ", 120)
    music.rest(music.beat(BeatFraction.Whole))
    music.playMelody("E G - C D C C - ", 120)
    music.rest(music.beat(BeatFraction.Whole))
})
