$(document).ready(function() {

    $("#Submit").click(calcTotal());

    function calcTotal(event) {

        event.preventDefault();
        //--
        var Quantity1 = $("#Qty1").val();
        var Quantity2 = $("#Qty2").val();
        //--
        var total1 = Quantity1 * 39.99;
        var total2 = Quantity2 * 14.99;
        var grandTotal = Quantity1 + Quantity2;
        //--
        $("#total1").text(total1);
        $("#total2").text(total2);
        $("#grandTotal").text(grandTotal);

    }

    function update() {

    }
});