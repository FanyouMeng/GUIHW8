//
// Name: Fanyou Meng
// Email: Fanyou_Meng@student.uml.edu
//
// 91.61 GUI Programming I
// Assignment 7:  Using the jQuery Validation Plugin with Your Dynamic Table
// Description: This is the javascript file for Assignment 7.
// It tries to use jquery plugin validate to check the user's inputs.
// If the inputs are validate, it generates a multiplication table.


$(function() {
  $("#tabs").tabs();
  $("#removeTabs").click(function() {
    var tabIndex = parseInt($("#indexNum").val(), 10);
    var tab = $( "#tabs" ).find(".ui-tabs-nav li:eq(" + tabIndex + ")").remove();
    $("#tabs").tabs("refresh");
  })
});

function save(){
  var bool1 = document.getElementById("tab1").hasChildNodes();
  var bool2 = document.getElementById("tab2").hasChildNodes();
  var bool3 = document.getElementById("tab3").hasChildNodes();
  if(!bool1){
    var itm = document.getElementById("box").lastChild;
    var cln = itm.cloneNode(true);
    document.getElementById("tab1").appendChild(cln);
  }
  else if (!bool2) {
    var itm = document.getElementById("box").lastChild;
    var cln = itm.cloneNode(true);
    document.getElementById("tab2").appendChild(cln);
  }
  else if (!bool3){
    var itm = document.getElementById("box").lastChild;
    var cln = itm.cloneNode(true);
    document.getElementById("tab3").appendChild(cln);
  }

}



$( function() {
  var handle1 = $( "#custom-handle1" );
  var $personalLoanSlider = $( "#HlowerSlider" ).slider({
    orientation: "horizontal",
    step: 1,
    min: 1,
    max: 15,
    value: 1,
    // create: function() {
    //   handle1.text( $( this ).slider( "value" ) );
    // },
    slide: function( event, ui ) {
      // handle1.text(formatINR(ui.value ));
      $('#Hlower').val(formatINR(ui.value ));
    }
  });
  function formatINR(unit){
    return unit;
  }
  $(document).on('input', '#Hlower', function(e) {
    var value = e.target.value;
    var validSliderValue = Number(value.replace(/\D+/g, ''));
    $personalLoanSlider.slider( "option", "value", validSliderValue );
  });


  var handle2 = $( "#custom-handle2" );
  var $mySlider2 = $( "#HlargerSlider" ).slider({
    orientation: "horizontal",
    step: 1,
    min: 1,
    max: 15,
    value: 1,
    // create: function() {
    //   handle2.text( $( this ).slider( "value" ) );
    // },
    slide: function( event, ui ) {
      // handle2.text(formatINR(ui.value));
      $('#Hlarger').val(formatINR(ui.value ));
    }
  });

  $(document).on('input', '#Hlarger', function(e) {
    var value = e.target.value;
    var validSliderValue = Number(value.replace(/\D+/g, ''));
    $mySlider2.slider( "option", "value", validSliderValue );
  });

  var handle3 = $( "#custom-handle3" );
  var $mySlider3 = $( "#VlowerSlider" ).slider({
    orientation: "horizontal",
    step: 1,
    min: 1,
    max: 15,
    value: 1,
    // create: function() {
    //   handle3.text( $( this ).slider( "value" ) );
    // },
    slide: function( event, ui ) {
      // handle3.text(formatINR(ui.value ));
      $('#Vlower').val(formatINR(ui.value ));
    }
  });
  $(document).on('input', '#Vlower', function(e) {
    var value = e.target.value;
    var validSliderValue = Number(value.replace(/\D+/g, ''));
    $mySlider3.slider( "option", "value", validSliderValue );
  });


  var handle4 = $( "#custom-handle4" );
  var $mySlider4 = $( "#VlargerSlider" ).slider({
    orientation: "horizontal",
    step: 1,
    min: 1,
    max: 15,
    value: 1,
    // create: function() {
    //   handle4.text( $( this ).slider( "value" ) );
    // },
    slide: function( event, ui ) {
      // handle4.text(formatINR(ui.value ));
      $('#Vlarger').val(formatINR(ui.value ));
    }
  });
  $(document).on('input', '#Vlarger', function(e) {
    var value = e.target.value;
    var validSliderValue = Number(value.replace(/\D+/g, ''));
    $mySlider4.slider( "option", "value", validSliderValue );
  });



});

$(function (){
  $("#myForm").validate({

    rules:{
      Hlower:{
        required: true,
        digits: true,
        range:[1,15]
      },
      Hlarger:{
        required: true,
        digits: true,
        range:[1,15]
      },
      Vlower:{
        required: true,
        digits: true,
        range:[1,15]
      },
      Vlarger:{
        required: true,
        digits: true,
        range:[1,15]
      }
    },

    messages:{
      Hlower:{
        required: "This field is required.",
        digits: "Please enter only positive integers."

      },
      Hlarger:{
        required: "This field is required.",
        digits: "Please enter only positive integers."

      },
      Vlower:{
        required: "This field is required.",
        digits: "Please enter only positive integers."

      },
      Vlarger:{
        required: "This field is required.",
        digits: "Please enter only positive integers."

      }
    }

  });


});

function myFunction() {
  if(!($('#myForm').valid())) {
    console.log("!!!");
    return false;
  }
  //get inputs
  var input = document.getElementById("myForm").elements.namedItem("Hlower").value;
  var x = parseInt(input, 10);

  input = document.getElementById("myForm").elements.namedItem("Hlarger").value;
  var y = parseInt(input, 10);

  input = document.getElementById("myForm").elements.namedItem("Vlower").value;
  z = parseInt(input, 10);

  input = document.getElementById("myForm").elements.namedItem("Vlarger").value;

  var w = parseInt(input, 10)


  //gengerate the table

  var horizontal = [];
  var i, lower;
  if(x < y)
  {
    lower = x;
  }
  else{
    lower = y;
    y = x;
    x = lower;
  }

  for (i = 0; i < (y-x+1) ;i++) {
      horizontal[i] = lower+i;
  }

  var vertical = [];

  if(z < w)
  {
    lower = z;
  }
  else{
    lower = w;
    w = z;
    z = lower;
  }
  for (i = 0; i < (w-z+1) ;i++) {
      vertical[i] = lower+i;
  }

  var textNode;
  var j;

  var oldForm = document.getElementById("demo");
  if (oldForm != null){
    oldForm.parentNode.removeChild(oldForm);
  }
  document.getElementById("box").innerHTML = "<table class=\"table table-dark table-striped table-bordered\" id=\"demo\"></table>";
  //create thead
  textnode = vertical[i];
  var headElem = document.createElement('thead');
  var rowHeadElem = document.createElement('tr');
  var head = document.createElement('th');
  head.appendChild(document.createTextNode('#'));
  rowHeadElem.appendChild(head);

  for (j = 0; j < horizontal.length; j++)
  {
    textNode = horizontal[j];
    head = document.createElement('th');
    head.appendChild(document.createTextNode(textNode));
    rowHeadElem.appendChild(head);
  }
  headElem.appendChild(rowHeadElem);
  document.getElementById("demo").appendChild(headElem);


  var tableBody = document.createElement('tbody');
  for (i = 0; i < vertical.length; i++)
  {
    // <th scope="row">2</th>
    textNode = vertical[i];
    head = document.createElement('th');
    head.appendChild(document.createTextNode(textNode));
    rowElem = document.createElement('tr');
    rowElem.appendChild(head);
    for (j = 0; j < horizontal.length; j++)
    {
      textNode = vertical[i]*horizontal[j];
      colElem = document.createElement('td');
      colElem.appendChild(document.createTextNode(textNode));
      rowElem.appendChild(colElem);
    }
    tableBody.appendChild(rowElem);
  }

  document.getElementById("demo").appendChild(tableBody);

  return false;
}
