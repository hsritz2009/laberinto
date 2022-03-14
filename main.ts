function girar90a_izquierda () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    basic.pause(250)
}
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
        maqueen.motorStop(maqueen.Motors.All)
        girar90a_izquierda()
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    }
})
