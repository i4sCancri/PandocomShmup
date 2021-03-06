﻿// Public variable that contains the speed of the enemy
public var velocity : int = -5;
public var amplitude : float = 1;
public var frequency : float = .7; 

function Start() {
    var r2d = GetComponent("Rigidbody2D");

    r2d.velocity.x = velocity;

    // make the enemy rotate on itself
    //r2d.angularVelocity = Random.Range(-200, 200);
}


// Update Function
function Update(){ 
    transform.position += amplitude * (Mathf.Sin(2 * Mathf.PI * frequency * Time.time) - Mathf.Sin(2 * Mathf.PI * frequency*(Time.time - Time.deltaTime))) * transform.up;

    transform.position.z = 0;
    if (transform.position.x < -8f) { Destroy(gameObject); }	//left bound
}


/*function OnCollisionEnter ( col : Collision ) {
	//Destroy(gameObject);
}*/


function OnCollisionEnter2D(col : Collision2D) {

    if (col.gameObject.tag == "Player") {
        Death();
    }
}

function Death() {
	//to do
	Destroy(gameObject);
}