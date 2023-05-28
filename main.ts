let option = randint(0, 2)
basic.forever(function () {
    if (option == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (option == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
