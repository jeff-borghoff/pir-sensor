def on_forever():
    while pins.digital_read_pin(DigitalPin.P0) == 1:
        basic.show_icon(IconNames.HAPPY)
        basic.pause(100)
        basic.clear_screen()
basic.forever(on_forever)
