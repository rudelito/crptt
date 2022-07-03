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

});