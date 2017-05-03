
function renderOrgChart(p) {
    $.getJSON( "data/DIS.json", function( data ) {
        var transformed = JSON.parse(data.d);
        $.each(transformed, function (index, item) {
            
        });
    });
}