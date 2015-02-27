//Andromeda Model System Editor JavaScript Version 1.0 @ Copyright
//Black Horizon Studios

@CustomEditor (AndromedaModelSystem)
class AndromedaModelSystemEditor extends Editor {

    function OnInspectorGUI () {
    
        var thirdOfScreen : float = Screen.width/3-10;
		var sizeOfHideButtons : int = 18;
	
    	//Time Number Variables
    	EditorGUILayout.LabelField("Andromeda Model Hologram System", EditorStyles.boldLabel);
		EditorGUILayout.LabelField("By: Black Horizon Studios", EditorStyles.label);
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Hologram Options", EditorStyles.boldLabel);
		
		var hologramModel : boolean = !EditorUtility.IsPersistent (target);
        target.hologramModel = EditorGUILayout.ObjectField ("Hologram Model", target.hologramModel, GameObject, hologramModel);
		
		EditorGUILayout.Space();
		EditorGUILayout.Space();
    	
    	target.shakeIntensity = EditorGUILayout.Slider ("Shake Intensity", target.shakeIntensity, 0.0, 0.6);
    	
    	//target.shakeIntensity = EditorGUILayout.IntField ("Shake Intensity", target.shakeIntensity);
    	EditorGUILayout.Space();
    	
    	target.minFlicker = EditorGUILayout.Slider ("Min Static", target.minFlicker, -0.5, 0.5);
    	target.maxFlicker = EditorGUILayout.Slider ("Max Static", target.maxFlicker, 0.0, 2.0);
    	
    	EditorGUILayout.Space();
    	
    	target.xSpeed = EditorGUILayout.Slider ("Static Speed X", target.xSpeed, 0.1, 5.0);
    	target.ySpeed = EditorGUILayout.Slider ("Static Speed Y", target.ySpeed, 0.0, 5.0);
    	
    	EditorGUILayout.Space();

		//showAdvancedOptions = !showAdvancedOptions;
		target.rotateSpeed = EditorGUILayout.Slider ("Rotate Speed", target.rotateSpeed, 0.0, 1.0);

		
		EditorGUILayout.Space();

        
        GUILayout.BeginHorizontal();
        

        GUILayout.EndHorizontal();
    }

}