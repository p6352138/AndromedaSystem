//Andromeda 2D Hologram System JavaScript Version 1.0 @ Copyright
//Black Horizon Studios


var floatUpSpeed : float = .01; 
var floatDownSpeed : float = .01; 
var shakeIntensity : float = .1;

var hologramPlane1 : GameObject;
var hologramPlane2 : GameObject;

public var doesRotate : boolean;
var rotateSpeed : float = 0;
private var floatup;

private var flickerSpeed : float;
var minFlicker : float = 0;
var maxFlicker : float = 1;

var offsetX : float; 
var offsetY : float; 
var xSpeed : float = 1; 
var ySpeed : float = 1; 

function Start(){
    floatup = false;  
	
	if (hologramPlane1 == null)
		Debug.LogError("You need to apply a plane model to the Hologram Plane 1 slot. The model must contain the Hologram Shader. Refer to the demo scene for an example if needed.");
		
		if (hologramPlane2 == null)
		Debug.LogError("You need to apply a plane model to the Hologram Plane 2 slot. The model must contain the Hologram Shader. Refer to the demo scene for an example if needed.");
}
function Update(){


    if(floatup)
        floatingup();
    else if(!floatup)
        floatingdown();
        
    flickerSpeed = Random.Range(minFlicker,maxFlicker);

	hologramPlane1.renderer.material.color.a = flickerSpeed;
	hologramPlane2.renderer.material.color.a = flickerSpeed;
	
	if (maxFlicker > 2)
	{
		Debug.LogError("Max flicker amount should not exceed 2");
	}	
	
	if (minFlicker < -1)
	{
		Debug.LogError("Min flicker amount should not go below -1");
	}
        
}
function floatingup(){
    transform.position.y += shakeIntensity * Time.deltaTime;
    yield WaitForSeconds(floatUpSpeed);
    floatup = false;
}
function floatingdown(){
    transform.position.y -= shakeIntensity * Time.deltaTime;;
    yield WaitForSeconds(floatDownSpeed);
    floatup = true;
}