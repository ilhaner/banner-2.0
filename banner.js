/* ********************************************************** */
/*    Programlayan : Ýlhan Er     2014  (Ver 1.1)             */
/*     Data'lar                                               */

var reklam = 
[
	[ 
	"http://www.worldtravelchannel.com.tr/_banner/images/2014-11-18_frekanslarimiz.png",
	"http://www.wtc.com.tr/Frekans-Bilgisi", 
	"_top",
	"normal", 
	"01/13/2014", "02/01/2099", "161", "82", 
	"float: right; text-align: right; margin-left: 10px;"
	],			
	[ 
	"http://www.worldtravelchannel.com.tr/_banner/images/2014-12-22_Emitt.gif",
	"http://www.emittistanbul.com/",  
	"_blank",
	"normal", 
	"12/21/2000", "01/25/2015", "220", "120", 
	"border:1px solid #333333;"
	],
	[ 
	"http://www.worldtravelchannel.com.tr/_banner/images/ftm_2014-4_kis.jpg", 
	"http://fashiontravelmagazine.com/tr/", 
	"_blank",
	"normal", 
	"01/13/2014", "02/01/2099", "240", "320",  
	""
	],
	[ 
	"http://www.worldtravelchannel.com.tr/_banner/images/2014-09-02_Travel-Turkey-izmir.swf", 
	"-", 
	"_blank",
	"normal", 
	"01/01/2000", "02/12/2000", "220", "190", 
	""
	],
	[ 
	"http://www.worldtravelchannel.com.tr/_banner/images/2015-02-16_Ace-of-Mice Exhibition-600.gif", 
	"http://www.ameistanbul.com/", 
	"_blank",
	"normal", 
	"01/13/2014", "02/28/2099", "600", "80", 
	""
	]
];
	
/* *************************************************************************************************************************************************** */
/*  Reklam [Dosya Adý], [Link], [Reklam Tipi:normal,...], [Baþlama Tarihi], [Bitiþ Tarihi], [En], [Boy], [Div Style]                                   */ 
/*                                                                                                                                                     */
/*  [Dosya Adý]       = Dosyanýn bulunduðu link.                                                                                                       */
/*  [Link]            = Bannerin Link Adresi (Resim ise).  
/*  [Target]          = Link Target                                                                                            */
/*  [Reklam Tipi]     = Eðer tek banner ise "normal" yazýlýr. Eðer birkaç banner üst üste gösterilecekse aralarýna "," konulup array numarasý yazýlýr. */
/*  [Baþlama Tarihi]  = Bannerin gösterilmeye baþlanacaðý tarih (mm/dd/yyy)                                                                            */
/*  [Bitiþ Tarihi]    = Bannerin gösterilmeye bitirileceði tarih (mm/dd/yyy)                                                                           */
/*  [En]              = Bannerin geniþliði (piksel)                                                                                                    */
/*  [Boy]             = Bannerin yüksekliði (piksel)                                                                                                   */
/*  [Div Style]       = Bannerin etrafýna bir div uygular. Bu div in stili.                                                                            */
/*                                                                                                                                                     */
/* *************************************************************************************************************************************************** */

/*  Program  */

function BannerGoster (param)
{
	var DosyaAdi = reklam[param][0];
	var Link = reklam[param][1];
	var Target = reklam[param][2];
	var ReklamTipi = reklam[param][3];
	var BaslamaTarih = reklam[param][4];
	var BitisTarih = reklam[param][5];
	var W = reklam[param][6];
	var H = reklam[param][7];
	var DivStyle = reklam[param][8];

	var dtFrom = new Date(BaslamaTarih);
	var dtTo = new Date(BitisTarih);
	var dtNow = new Date();
	if (dtNow >= dtFrom && dtNow <= dtTo) 
	{
		if (ReklamTipi.indexOf(",") !=-1) 
		{
			var array = ReklamTipi.split(",");
			var sayi=(array.length - 1) + 1;
			var gosterilecek = rand(sayi);
			var gosterilecek_banner=array[gosterilecek-1];
			
			var GDosyaAdi = reklam[gosterilecek_banner][0];
			var GLink = reklam[gosterilecek_banner][1];
			var GLinkT = reklam[gosterilecek_banner][2];
			var GW = reklam[gosterilecek_banner][6];
			var GH = reklam[gosterilecek_banner][7];
			var GDivStyle = reklam[gosterilecek_banner][8];
			
			Goster(GDosyaAdi,GLink,GLinkT,GW,GH,GDivStyle);
			
		}
		else
		{
			Goster(DosyaAdi,Link,Target,W,H,DivStyle);
		}
	}

}



/* ************* */
/*  Function     */
/* ************* */
function Goster(RDosyaAdi,RLink,RLinkT,RW,RH,RDivStyle)
{
	var HTML="";
	var FileExt = RDosyaAdi.split('.').pop();
	switch(FileExt)
	{
		case "jpg":
		case "gif":
		case "png":
			HTML += "<div style='width:" +  RW + "px;height:" +  RH + "px;" +  RDivStyle + "'>";
			if (RLink != '-') { HTML += "<a href='" +  RLink + "' target='"+ RLinkT +"'>"; } 
			HTML += "<img src='" +  RDosyaAdi + "' alt='' width='" +  RW + "' height='" +  RH + "' />";
			if (RLink != '-') { HTML += "</a>"; }
			HTML += "</div>";
			break;
		case "swf":
			HTML += "<div style='width:" +  RW + "px;height:" +  RH + "px;" +  RDivStyle + "'>";
			HTML += "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' width='" +  RW + "' height='" +  RH + "' codebase='http://active.macromedia.com/flash5/cabs/swflash.cab#version=5,0,0,0'>";
			HTML += "<param name='movie' value='" +  RDosyaAdi + "' />";
			HTML += "<param name='wmode' value='transparent' />";
			HTML += "<param name='play' value='true' />";
			HTML += "<param name='loop' value='true' />";
			HTML += "<param name='quality' value='high' />";
			HTML += "<param name='scale' value='noborder' />";
			HTML += "<embed src='" +  RDosyaAdi + "' wmode='transparent' width='" +  RW + "' height='" +  RH + "' play='true' loop='true' quality='high' scale='noborder' pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?p1_prod_version=shockwaveflash'>";
			HTML += "</embed>";
			HTML += "</object>";
			HTML += "</div>";
			break;
		case "flv":
			HTML += "<div style='width:" +  RW + "px;height:" +  RH + "px;" +  RDivStyle + "'>";	
			HTML += "<object id='player1' width='" +  RW + "' height='" +  RH + "' classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0'>";
			HTML += "<param name='flashvars' value='file=" +  RDosyaAdi + "&amp;autostart=true' />";
			HTML += "<param name='allowfullscreen' value='true' />";
			HTML += "<param name='allowscriptaccess' value='always' />";
			HTML += "<param name='src' value='player.swf' />";
			HTML += "<embed id='player1' width='" +  RW + "' height='" +  RH + "' type='application/x-shockwave-flash' src='player.swf' flashvars='file=" +  RDosyaAdi + "&amp;autostart=true' allowfullscreen='true' allowscriptaccess='always' />";
			HTML += "</object>";
			HTML += "</div>";
			break;  
	}
document.write(HTML);
}

function rnd() 
{
	rnd.today=new Date();
	rnd.seed=rnd.today.getTime();
	rnd.seed = (rnd.seed*9301+49297) % 233280;
	return rnd.seed/(233280.0);
};

function rand(number) 
{
	var result = Math.ceil(rnd()*number);
	if (!result)result++;
		return result
};

/* ********************************************************** */

