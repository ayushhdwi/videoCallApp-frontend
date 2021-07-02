chatFlag = 0;
videoFlag = 0;
muteFlag = 0;

toggleChat = () => {
	if(chatFlag == 0) {
		// remove chat box
		// $(".grid-container").css("grid-template-columns", "auto 0");
		$(".toggle-chat").css("color", "white");
		$(".chat-section").css("display","none");
		$(".video-screen").css("width", "100vw");
		
		if(screen.width < 610) {
			$(".video-screen").css("display", "flex");
		}

		if($(".video-screen").css("display") == "none") {
			$(".video-screen").css("display", "flex");
		}

		chatFlag = 1;
	}
	else {
		// open chat box
		// let width = screen.width;
		// if(width >= 900) {
		// 	$(".grid-container").css("grid-template-columns", "auto 20vw");
		// } else if(width >= 786) {
		// 	$(".grid-container").css("grid-template-columns", "auto 25vw");
		// } else if(width >= 610) {
		// 	$(".grid-container").css("grid-template-columns", "auto 30vw");
		// } else {
		if(screen.width < 610) {
			// $(".grid-container").css("grid-template-columns", "auto 0vw");
			$(".video-screen").css("display", "none");
		}
		$(".video-screen").css("width", "");
		$(".toggle-chat").css("color", "#939aff");
		$(".chat-section").css("display","block");
		chatFlag = 0;
	}
}

toggleMute = () => {
	if (muteFlag == 0) {
		$(".toggle-mute").css("color", "#d42845");
		muteFlag = 1;
    } else {
		$(".toggle-mute").css("color", "white");
		muteFlag = 0;
    }
}

toggleVideo = () => {
	if (videoFlag == 0) {
		$(".toggle-cam").css("color", "#d42845");
        videoFlag = 1;
    } else {
		$(".toggle-cam").css("color", "white");
        videoFlag = 0;
    }
}

// endCall = () => {
// 
// }