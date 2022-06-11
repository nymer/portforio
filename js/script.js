//--------------------------------------------------------
//Loading画面
//--------------------------------------------------------
// テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
  easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
  duration: 2100,//時間指定(1000＝1秒)
  // strokeWidth: 0.2,//進捗ゲージの太さ
  // color: 'rgba(216,230,121,1)',//進捗ゲージのカラー
  // trailWidth: 0.2,//ゲージベースの線の太さ
  // trailColor: '#fff',//ゲージベースの線のカラー
  // text: {//テキストの形状を直接指定       
  //   style: {//天地中央に配置
  //     position: 'absolute',
  //     left: '50%',
  //     top: '50%',
  //     padding: '0',
  //     margin: '-30px 0 0 0',//バーより上に配置
  //     transform:'translate(-50%,-50%)',
  //     'font-size':'1rem',
  //     color: 'rgba(216,230,121,1)',
  //   },
  //   autoStyleContainer: false //自動付与のスタイルを切る
  // },
  // step: function(state, bar) {
  //   bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  // }
});

//アニメーションスタート
bar.animate(0.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#splash_text").fadeOut(10);//フェイドアウトでローディングテキストを削除
  $(".loader_cover-up").addClass("coveranime");//カバーが上に上がるクラス追加
  $(".loader_cover-down").addClass("coveranime");//カバーが下に下がるクラス追加
  $("#splash").fadeOut(2000);//#splashエリアをフェードアウト
});

//--------------------------------------------------------
// ページ共通_文字の動き（スクロール読み込みをトリガーに）
//--------------------------------------------------------
// 指定タグに対してクラス名fadeUpTriggerを追加
$(window).on('load', function(){
	var arrTag_AddClass_fadeUpTrigger = ['h2','h3','p','img']//fadeUpTriggerクラスを入れたいタグを指定
	for (var i = 0; i < arrTag_AddClass_fadeUpTrigger.length; i++) {
		var elm = document.getElementsByTagName(arrTag_AddClass_fadeUpTrigger[i]);
		
		for (var j = 0; j < elm.length; j++) {
			var elm_sub = elm[j];
			elm_sub.classList.add('fadeUpTrigger');//fadeUpTriggerというクラス名を追記
		}
	}
});
// 指定クラスに対してクラス名fadeUpTriggerを追加
$(window).on('load', function(){
	var arrClass_AddClass_fadeUpTrigger = ['skill-item']//fadeUpTriggerクラスを入れたいクラスを指定
	for (var i = 0; i < arrClass_AddClass_fadeUpTrigger.length; i++) {
		var elm = document.getElementsByClassName(arrClass_AddClass_fadeUpTrigger[i]);
		
		for (var j = 0; j < elm.length; j++) {
			var elm_sub = elm[j];
			elm_sub.classList.add('fadeUpTrigger');//fadeUpTriggerというクラス名を追記
		}
	}
});

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){
  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

// 画面をスクロールしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });
	// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

// =================
// ヘッダー
// =================
// ページヘッダーを初期表示非表示にする
$('.page-header').toggle();
// メニューボタンをクリックでメニューの表示/非表示の切り替え
$(".openbtn").click(function () {
		$(this).toggleClass('active');
		$('.page-header').fadeToggle(200);
});
// メニューアイテムをクリックでメニューの表示/非表示の切り替え
$(".menu-item").click(function () {
	$(".openbtn").toggleClass('active');
	$('.page-header').fadeToggle(200);
});

// =================
// セクションHOME
// =================

// 背景の星がキラキラ
particlesJS("particles-js", {
	"particles":{
		"number":{
			"value":350,//この数値を変更すると星の数が増減できる
			"density":{
				"enable":true,
				"value_area":800
			}
		},
		"color":{
			"value":"#ffffff"
		},
		"shape":{
			"type":"circle",//形状はcircleを指定
			"stroke":{
				"width":0
			},
			},
		"opacity":{
			"value":1,//シェイプの透明度
			"random":true,//シェイプの透明度をランダムにする
			"anim":{
				"enable":true,//シェイプの透明度をアニメーションさせる
				"speed":3,//シェイプの透明度をアニメーションさせる
				"opacity_min":0,//透明度の最小値０
				"sync":false//全てを同時にアニメーションさせない
			}
		},
		"size":{
			"value":1.4,//星の大きさ（最大値）
			"random":true,
			"anim":{
				"enable":false,
				"speed":4,
				"size_min":0.3,//星の大きさ（最小値）
				"sync":false
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":150,//この数値を小さくするとゆっくりな動きになる
		"direction":"none",//方向指定なし
		"random":true,//動きはランダムに
		"straight":true,//動きをとどめる
			"out_mode":"out",
			"bounce":false,
			"attract":{
				"enable":false,
				"rotateX":600,
				"rotateY":600
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
			},
			"onclick":{
				"enable":false,
			},
			"resize":true
		}
	},
	"retina_detect":true
});



// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 100;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".TextTyping");
	element.each(function () {
		var text = $(this).html();
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);

	});

	TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述