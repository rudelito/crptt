$( document ).ready(function() {
    searchforCA();
});

let lastUrl = location.href; 
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    onUrlChange();
  }
}).observe(document, {subtree: true, childList: true});
 
 
function onUrlChange() {
  searchforCA();
}

function searchforCA() {
	var chain;
	var url = window.location.href;

	if (url.indexOf("bsc") > -1 || url.indexOf("poocoin") > -1) {chain='bsc'}
	if (url.indexOf("eth") > -1) {chain='eth'}
	if (url.indexOf("avax") > -1 || url.indexOf("avalanche") > -1) {chain='avax'}

	
	var tokenaddress = '';
	
	//wait for tokenaddress to appear and trigger links
    if(!$('.tokenlinks').length){
		var checkExistCA = setInterval(function() {
			
			if  (url.indexOf("dextools") > -1){
				if ($('.social-icons a[href*="/token/"], iframe[id*="tradingview"]').length) {
					tokenaddress = $('.social-icons a[href*="/token/"]').attr('href');
					tokenaddress = tokenaddress.substring(tokenaddress.lastIndexOf("/") + 1);
					
					generateTokenLinks(tokenaddress, chain, url);
					
					clearInterval(checkExistCA);
				}
			} else if (url.indexOf("dexscreener") > -1){
				if ($('a.chakra-link.chakra-button[href*="/token/"]').length) {
					tokenaddress = $('a.chakra-link.chakra-button[href*="/token/"]').attr('href');
					tokenaddress = tokenaddress.substring(tokenaddress.lastIndexOf("/") + 1);
					
					generateTokenLinks(tokenaddress, chain, url);
					
					clearInterval(checkExistCA);
				}
			} else if (url.indexOf("poocoin") > -1){
				if ($('.unpad-2').length) {
					tokenaddress = url.substring(url.lastIndexOf('/') + 1);
					
					generateTokenLinks(tokenaddress, chain, url);
					
					clearInterval(checkExistCA);
				}
			}

		}, 1000);
	}
}



function generateTokenLinks(tokenaddress, chain, url) {
	
	var honeyapi_chain = '';
	var honey_chain = '';
	var dext_chain = '';
	var bog_def_dethp_chain = '';
	var scan_chain = '';
	var dscreen_chain = '';
	var moonarch_chain = '';
	
	tokenaddress = tokenaddress.toLowerCase()

	if  (chain === 'eth'){
		honeyapi_chain = 'eth';
		honey_chain = 'ethereum';
		dext_chain = 'ether';
		bog_def_dethp_chain = 'eth';
		scan_chain = 'etherscan.com';
		dscreen_chain = 'ethereum';
		moonarch_chain = 'eth.';
	} else if (chain === 'bsc'){
		honeyapi_chain = 'bsc2';
		honey_chain = '';
		dext_chain = 'bsc';
		bog_def_dethp_chain = 'bsc';
		scan_chain = 'bscscan.com';
		dscreen_chain = 'bsc';
		moonarch_chain = '';
	} else if (chain === 'avax'){
		honeyapi_chain = '';
		honey_chain = '';
		dext_chain = 'avalanche';
		bog_def_dethp_chain = 'avax';
		scan_chain = 'snowtrace.io';
		dscreen_chain = 'avalanche';
		moonarch_chain = 'avax.';
	}
	
	// swap links
	var linkbog = '<a class="btn-base tokenblack" href="https://app.bogged.finance/'+bog_def_dethp_chain+'/swap?tokenOut='+tokenaddress+'&inputCurrency='+bog_def_dethp_chain+'&chain=mainnet" target="_blank"><img src="https://charts.bogged.finance/img/logo.3645a631.png"></a>';
	var linkuniswap = '<a class="btn-base tokenblack" href="https://app.uniswap.org/#/swap?outputCurrency='+tokenaddress+'&inputCurrency=ETH&chain=mainnet" target="_blank"><img src="https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png"></a>';
	
	var linkkyber = '<a class="btn-base tokenblack" href="https://kyberswap.com/#/swap?outputCurrency='+tokenaddress+'&inputCurrency=ETH" target="_blank"><img src="https://s2.coinmarketcap.com/static/img/coins/200x200/9444.png"></a>';
	var linktraderjoe = '<a class="btn-base tokenblack" href="https://traderjoexyz.com/trade?outputCurrency='+tokenaddress+'&tokenIn=AVAX" target="_blank"><img src="https://traderjoexyz.com/static/media/logo.bc60f78d.png"></a>';
	
	//chart links
	var linkpoo = '<a class="btn-base chartpoo tokenbrown" href="https://poocoin.app/tokens/'+tokenaddress+'" target="_blank"><img src="https://poocoin.app/images/logo/poocoin512.png"></a>';
	var linkdext = '<a class="btn-base chartdext tokenteal" href="https://www.dextools.io/app/'+dext_chain+'/pair-explorer/'+tokenaddress+'" target="_blank"><img src="https://www.dextools.io/app/assets/img/logo/dext-white-small.png"></a>';
	var linkdscreen = '<a class="btn-base chartdscreen tokenblack" href="https://dexscreener.com/'+dscreen_chain+'/'+tokenaddress+'" target="_blank"><img src="https://dexscreener.com/img/apple-touch-icon.png"></a>';
	var linkdefined = '<a class="btn-base chartdef tokenpurp" href="https://www.defined.fi/'+bog_def_dethp_chain+'/'+tokenaddress+'" target="_blank"><img src="https://assets.coingecko.com/coins/images/13626/small/BicSg26r_400x400.png?1610418623"></a>';
	var linkcoinscan = = '<a class="btn-base chartcscan tokenyellow" href="https://www.coinscan.com/token/'+tokenaddress+'" target="_blank"><img src="https://pbs.twimg.com/profile_images/1499644821492822017/hURTTHMk_400x400.jpg"></a>';
	
	
	
	//tester links
	var linkhoney = '<a class="btn-base testhp tokenhoney" href="https://honeypot.is/'+honey_chain+'?address='+tokenaddress+'" target="_blank"><img src="https://img.icons8.com/offices/344/honey.png"></a>';
	var linkmoonarch = '<a class="btn-base tokenblue" href="https://'+moonarch_chain+'moonarch.app/token/'+tokenaddress+'" target="_blank"><img src="https://assets.coingecko.com/coins/images/15567/large/android-chrome-256x256.png?1621222240"></a>';
    var linksniffer = ' <a class="btn-base tokenblack" href="https://tokensniffer.com/token/'+tokenaddress+'" target="_blank"><img src="https://pbs.twimg.com/profile_images/1443120044850888707/dNlFr2Z-_400x400.png"></a>';
	var linkmm = '<a class="btn-base testmm tokengreen" href="https://app.marketmove.ai/token/'+tokenaddress+'/audit" target="_blank"><img src="https://app.marketmove.ai/favicon.ico"></a>'
	var linkdetecthp = '<a class="btn-base testdethp tokenhoney" href="https://detecthoneypot.com/scan?chain='+bog_def_dethp_chain+'&address='+tokenaddress+'" target="_blank"><img src="https://img.icons8.com/offices/344/honey.png"></a>'
	
	//scan links
	var linkcatransac = '<a class="btn-base btn-noimg" target="_blank" href="https://'+scan_chain+'/address/'+tokenaddress+'">$</a>';
	var linkcacode = '<a class="btn-base btn-noimg" target="_blank" href="https://'+scan_chain+'/address/'+tokenaddress+'#code">📄</a>';
	
	var linkcatransfer = '<a class="btn-base btn-noimg" target="_blank" href="https://'+scan_chain+'/token/'+tokenaddress+'">↔</a>';
	var linkcaholders = '<a class="btn-base btn-noimg" target="_blank" href="https://'+scan_chain+'/token/'+tokenaddress+'#balances">👥</a>';
	
	//group links
	var charts_links = linkpoo+linkdscreen+linkdext+linkdefined+linkcoinscan;
	var swap_links = '';
	var scan_links = linkcatransac+linkcacode+linkcaholders+linkcatransfer;
	var tester_links = linkmoonarch+linkmm+linksniffer+linkhoney+linkdetecthp;

	if  (chain === 'eth'){
		swap_links = linkuniswap+linkkyber;
		
	} else if (chain === 'bsc'){
		swap_links = linkbog;
		
	} else if (chain === 'avax'){
		swap_links = linkbog+linktraderjoe;
	}
	
	var tokenlinks = '<div class="tokenlinks"><div style="margin-bottom: 5px;"><div>'+ swap_links + '</div><span class="lgap"></span><div>' + charts_links + '</div></div><div><div>' + tester_links + '</div><span class="lgap"></span><div>'+ scan_links +'</div></div></div>'

	var hplocation = "";
	var specificcss='<style>.tokenlinks{margin:0 5px;background: black;padding: 10px 10px;}</style>';

	if  (url.indexOf("dextools") > -1){
		$('.shared-button').after(tokenlinks);
		hplocation = '.graph-header';
		$('.chartdext').hide();
		
	} else if (url.indexOf("dexscreener") > -1){
		$('.css-by5b94').before(tokenlinks);
		hplocation = '.css-1t20zb6';
		$('.chartdscreen').hide();
		
	} else if (url.indexOf("poocoin") > -1){
		$(tokenlinks).prependTo('body');
		hplocation = '.token_top_num';
		specificcss = '<style>.tokenlinks{margin:0 5px;background: black;padding: 10px 10px;max-width: 280px;position: fixed;z-index: 1;left: 50px;}</style>';
		$('.chartpoo').hide();
		
	}
	
	if  (chain === 'eth'){
		$('.testdethp, .testmm').hide();
		$('.chartpoo').hide();
		
	} else if (chain === 'bsc'){
		$('.testdethp').hide();
		
	} else if (chain === 'avax'){
		$('testhp, .testmm').hide();
		$('.chartpoo').hide();
	}
	
	
	$('body').prepend(specificcss)
	
	/**Insert honeypot check**/
	if((chain === 'bsc' || chain === 'eth') && !(hplocation === "") ){
        $.getJSON( "https://aywt3wreda.execute-api.eu-west-1.amazonaws.com/default/IsHoneypot?chain="+honeyapi_chain+"&token="+tokenaddress, function( data ) {
          var items = [];
          $.each( data, function( key, val ) {
            items.push( "<span id='" + key + "'><span class='honeykey'>" + key + ":</span><span class='honeyval'>" + val + "</span></span>" );
          });
         
          $( "<div/>", {
            "class": "honeypotcheck",
            html: items.join( "" )
          }).appendTo( hplocation );
        });
	}

}

//General CSS
$('body').prepend(
	`
	<style>
	/**additonal buttons**/
	.btn-base {
		margin: 1px 3px;
		padding:0px;
		cursor: pointer;
		outline: 0;
		color: #fff;
		background: black;
		display: inline-flex;
		align-items: center;justify-content: center;
		line-height: 1;
		text-align: center;
		border-radius: 50%;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
		width: 23px;
		height: 23px;
		overflow:hidden;
	}
	a.btn-base img{width:21px;height:21px}

	a.btn-noimg{font-size: 17px;background: rgb(240, 188, 21);color:black}

	a.btn-base.tokenwhite {background:#fff;}
	a.btn-base.tokenblue {background: #008eff;}
	a.btn-base.tokengreen {background: #4caf50;}
	a.btn-base.tokenblack {background: #1c1c1c;}
	a.btn-base.tokenbrown {background:#825c3c;}
	a.btn-base.tokenhoney {background:rgb(255 194 120)}
	a.btn-base.tokenteal {background:#04a8cd}
	a.btn-base.tokenpurp {background:#2909a9}

	.lgap{display:inline-block;width:5px;background:grey;margin:0 5px}
	.tokenlinks > div{display:flex;align-items: center;min-width:218px}
	.tokenlinks > div > div{min-width: 117px!important;}
	</style>
	`
);