function girar90gradosderecha () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(250)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 20)
    basic.pause(250)
}
function girar90a_izquierda () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(250)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    basic.pause(250)
}
let ultimogiro = 0
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
            if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
            	
            }
        }
    } else {
    	
    }
})
