#pragma strict
public var speed : float = 0.05f;

private var startPos : float;
private var WIDTH : float;					// Width of each panel (uniform)
private var leftBound : float = -15f;		//  Hardcoded values taken from positions of objects in inspector
private var teleportPoint : float = -2.114308;



function Start () {
	startPos = transform.position.x;

	WIDTH = GetComponent.<Renderer>().bounds.size.x;
}

function Update () {

	//if(gm.currentState == gm.GameState.Active){}
	// Constantly move the background left
	transform.position.x -= speed;

	// if the position gets to the left most bound
	// move it to the spawn position
	if(transform.position.x <= leftBound){
		transform.position.x += WIDTH * 3;
	}


}
