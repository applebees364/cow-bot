input.onButtonPressed(Button.A, function () {
    hummingbird.setPositionServo(FourPort.One, 0)
    hummingbird.setPositionServo(FourPort.Two, 0)
})
hummingbird.startHummingbird()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Sound, ThreePort.One) > 50) {
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        100
        )
    } else {
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        100,
        0
        )
    }
})
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Sound, ThreePort.One) > 50) {
        hummingbird.setPositionServo(FourPort.Two, 0)
        basic.pause(500)
        hummingbird.setPositionServo(FourPort.Two, 90)
        basic.pause(500)
        hummingbird.setPositionServo(FourPort.Two, 0)
        basic.pause(500)
        hummingbird.setPositionServo(FourPort.Two, 90)
        basic.pause(500)
        hummingbird.setPositionServo(FourPort.Two, 0)
    } else {
        hummingbird.setPositionServo(FourPort.Two, 0)
    }
})
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Sound, ThreePort.One) > 50) {
        hummingbird.setPositionServo(FourPort.One, 0)
        basic.pause(1000)
        hummingbird.setPositionServo(FourPort.One, 70)
        basic.pause(1000)
        hummingbird.setPositionServo(FourPort.One, 0)
    } else {
        hummingbird.setPositionServo(FourPort.One, 0)
    }
})
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Sound, ThreePort.One) > 50) {
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        100
        )
    } else {
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        100,
        0
        )
    }
})
