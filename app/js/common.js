$(function () {
	setTimeout(function () {
		$(".thank_overlay").css("display", "block");
		$('#player').attr('src',
			$('#player').attr('data-src'));
	}, 1200);
	new WOW().init();
	$("a[href*='#']").mPageScroll2id();
	$("#backtotop").click(function () {
		$("html, body").animate({
				scrollTop: 0
			},
			800
		);
		return false;
	});
	$(".hamburger").on("click", function () {
		$(this).toggleClass("is-active");
		if ($(".header_menu__mobile").is(":visible")) {
			$(".header_menu__mobile").css("opacity", "0");
			// $(".logo_box").css("position", "relative");
			setTimeout(function () {
				$(".header_menu__mobile").css("display", "none");
			}, 200);
		} else {
			$(".header_menu__mobile").css("display", "block");
			// $(".logo_box").css("position", "absolute");

			setTimeout(function () {
				$(".header_menu__mobile").css("opacity", "1");
			}, 200);
		}
	});
	$(".speakers_findmore").on("click", function () {
		$(".speakers_btn").toggleClass("btn-active");
		if ($(".hidden_speakers").is(":visible")) {
			$(".hidden_speakers").css("opacity", "0");
			setTimeout(function () {
				$(".hidden_speakers").css("display", "none");
			}, 1500);
		} else {
			$(".hidden_speakers").css("display", "block");
			setTimeout(function () {
				$(".hidden_speakers").css("opacity", "1");
			}, 200);
		}
	});

	var document_height = $(window).scrollTop();

	$(window).scroll(function () {
		// $("#main_cross").css({
		// 	"rotate": document_height + "deg"
		// });
		$("#main_cross").addClass("spin");
	});

	$(".speaker1_btn").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false
	})
	$(".speaker2_btn").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false
	})
	$(".speaker3_btn").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false
	})
	$(".speaker4_btn").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false
	})
	$(".speaker5_btn").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false
	})
	$(".thank_close").on("click", function () {
		// $(".thank_overlay").css("opacity", "0");
		$(".thank_overlay").toggleClass("thank_closed");
		setTimeout(function () {
			$(".thank_closed").css("opacity", "0");
			$(".thank_closed").css("display", "none");
		}, 200);
		var video = $("#player").attr("src");
		$("#player").attr("src", "");
	});
	$(".owl-carousel").owlCarousel({
		loop: true,
		items: 3,
		dots: true,
		nav: true
	});

	$(".gallery_img_1").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_2").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_3").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_4").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_5").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_6").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_7").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_8").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_9").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_10").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_11").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_12").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_13").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_14").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_15").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_16").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_17").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_18").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_19").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_20").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_21").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_22").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_23").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_img_24").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_vid_1").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$(".gallery_vid_2").magnificPopup({
		type: "inline",
		closeOnContentClick: false,
		closeBtnInside: true,
	});
	$("#gallery_btn3").on("click", function () {
		$(".gallery_download").css("display", "none");
	})
	$("#gallery_btn2").on("click", function () {
		$(".gallery_download").css("display", "block");
	})
	$("#gallery_btn1").on("click", function () {
		$(".gallery_download").css("display", "block");
	})
});

document.body.onload = function () {
	setTimeout(function () {
		var preloader = document.getElementById("page-preloader");
		if (!preloader.classList.contains("done")) {
			preloader.classList.add("done");
		}
	}, 1000);
};