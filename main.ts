basic.forever(function () {
    while (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showLeds(`
            . # . # .
            . . # # #
            # # # # #
            . # # # .
            . # . # .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
