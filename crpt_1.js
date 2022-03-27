$( document ).ready(function() {
	
    console.log('ratatatatata');
	
	
    $.get('https://raw.githubusercontent.com/rudelito/crptt/main/UserFileX.txt', function (response) {
        a = response.split("\n");
        console.log(a[0], a[1], a[2]);
    })
	
	
    var mainwallet = $('span#mainaddress').text().toLowerCase();
    $( "table td" ).each(function() {
        if($(this).text().toLowerCase() == mainwallet && mainwallet){
            $(this).text('currentw').addClass('currentw');
        }
    });
    
    $( "table .u-label--info" ).each(function() {
        
        $(this).text($(this).attr('data-original-title'));
        
        var lbinftxt = $(this).text().trim().toLowerCase();
        var lbinfrow = $(this).closest('tr');
        if( ~lbinftxt.indexOf('transfer') ){
            lbinfrow.addClass('lbtransferrow');
        } else if(lbinftxt == 'approve'){
            lbinfrow.addClass('lbapprove');
        } else if(~lbinftxt.indexOf('swap exact') || ~lbinftxt.indexOf('multicall')){
            lbinfrow.addClass('lbswap');
        } else {
            lbinfrow.addClass('lbunknown');
        }
        
        var lbgoodwords =['renounce','enable trading','add liq'];
        var lbbadwords =['fee','tax','tx', 'trading', 'max'];

        $.each(lbbadwords , function(index, val) { 
          if(~lbinftxt.indexOf(val)){lbinfrow.addClass('lbwarn');}
        });
        
        $.each(lbgoodwords , function(index, val) { 
          if(~lbinftxt.indexOf(val)){lbinfrow.addClass('lbgood');}
        });
        
        
    });

    
    var atext;
    
    var trackedWallets ={
        '0x3D2BDAaDd4e8cf018a9da0E63dB83dc0a733D4fD':'🐙_Hotwallet_x3d',
        '0x04d9ea09a37b302c80752778fd459dd323f162d5':'🐙_play1_x04d',
        '0xCe4f681fF70b7FBde7E22f011744A604e85048E7':'🐙_play2_xCe4',
        '0x172A6464906F5D348B36B834cdeE831B22Ddf17c':'🐙_play3_x17A',
        '0xf0b1a7626dfa54301578b1756699b08e1ead5e93':'🐙_inter1_xf0b',
        '0x386d28179c96cc02518422c5ce13f3fb1c956165':'🐙_inter2_x386'
     };
    
    $( "table a" ).each(function( index ) {
        atext = $(this).text().toLowerCase();
        

        for (var key in trackedWallets) {
            if(atext == key.toLowerCase()){
                $(this).addClass('walletmatch').text(trackedWallets[key])
            }
        }

    });
});