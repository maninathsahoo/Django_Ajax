$(document).ready(function(){
        setInterval(function(){
            $.ajax({
                type: "GET",
                url : "data/",
                success: function(response){
                    $('#display').empty();
                    for (var key in response.data)
                    {
                        var temp="<tr><th scope='row'>"+response.data[key].name+"</th><td>"+response.data[key].age+"</td><td>"+response.data[key].salary+"</td><td></td></tr>"
                        $("#display").append(temp);

                    }
                },error:function(response){

                alert("No data found");
                }
            });


        },1000);

    });


