function trump_sprite () {
  
  var imgUrl        = 'trump_spritesheet2.png' ;
  var spriteCanvas  = image2canvas(imgUrl) ;
  var spriteContext = create_context(spriteCanvas) ;
  var bgColor       = undefined ; // [49, 164, 170] ;

	var trumpSprite    = {} ;
	trumpSprite.height = 170 ;

	var frameCount    = 2 ;
	var frameRowIndex = 0 ;
	var frameWidth    = 140 ;
	var frameOffsetX  = 0 ;
	var frameOffsetY  = 0 ;
	var padX          = 0 ;
	var framePadXl    = 0 ;
	var framePadXr    = 0 ;

	var trumpSpriteConfig    = {
		context: spriteContext,
		tileCount: frameCount,
		rowIndex: frameRowIndex,
		tileWidth: frameWidth,
		tileHeight: trumpSprite.height,
		offsetX: frameOffsetX,
		offsetY: frameOffsetY,
		padX: padX,
		bgColor: bgColor,
		tilePadXl: framePadXl,
		tilePadXr: framePadXr,
	} ;

	trumpSprite.hit = get_sprite (trumpSpriteConfig) ;

	trumpSprite.rest = [trumpSprite.hit[0]] ; // resting bitch face

	trumpSprite.hit = [trumpSprite.hit[1]] ;
	
	return trumpSprite ;

}