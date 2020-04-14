// LuukFTF bot v2
        
let onState = false
music.setVolume(255)  
          
input.buttonA.onEvent(ButtonEvent.Click, function () {                 
    onState = !onState                   
})       
                         
input.buttonB.onEvent(ButtonEvent.Click, function () {             
    pins.A2.servoWrite(180)                
    pause(20)                
    pins.A2.servoWrite(0)                       
})       

forever(function () {                        
    if (onState) {       
        light.setPixelColor(2, 0xFFFFFF)       
        pins.A1.servoWrite(180)       
        pause(450)       
        pins.A1.servoWrite(0)       
        pause(450)       
        light.clear()       
    }           
    pause(1)          
})       

// Lucas van der Vegt 2019
// EOF 
