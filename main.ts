let temp = 0
input.onGesture(Gesture.Shake, function () {
    temp = input.temperature()
    basic.showNumber(temp)
})
input.onButtonPressed(Button.AB, function () {
    led.plotBarGraph(
    0,
    0
    )
    music.playMelody("C5 C5 F C5 - - D G ", Math.round(262))
})
