
$(function() {
        $("#form_year_added").on("click",function () {
            var number_year = $("#form_year_number").text() -(-1);
            //$("#form_year_number").html(number_year);
            $("#form_year_number").html(number_year);
            $("<div class='param  wow rotateInUpRight' data-wow-duration='.35s'>  <input type='text'  id='year_" + number_year + "' name='year[]' placeholder='значення' value=''><img src='img/xpow.png' ><label for='year_" + number_year + "'> " + (number_year-1) + " + </label></div>" ).appendTo( ".list_year" );
        })
        $("#form_status_added").click(function () {
            $("<div class='param'><input type='text' name='status_vendor[]' placeholder='input power'> <input type='text' name='status_name[]' placeholder='input power'> <input type='text' name='status_specialization[]' placeholder='input power'> <input type='text' name='status_year[]' placeholder='input power'></div>" ).insertBefore("#form_status_added");
        })
     });

    // input / outut from teg <input > elements

    var name = 'year[]';
    
        function check(){   
            var year = document.getElementsByName(name);
            var msg = ['корені знайдені!'];
            
            for (var i=0; i<year.length; i++)
            {
               // msg.push(" "+i+": "+year[i].value);
                console.log(" "+i+": "+year[i].value);
            }
            var tmp = 1;
           for (var i=0; i<year.length; i++)
            {
                tmp = tmp + year[i].value;
                
            }

console.log(tmp);
if (tmp != 1 && tmp != 0){
 
var koef = [];

 for (var i=0; i<year.length; i++)
            {
              koef[i] = year[i].value;
                
            }
//reverse////////////////////
   koef.reverse();
console.log("koef = " + koef);

        var st1 = [] ;
        var st2 = [] ;
        var st3 = [] ;
        var rez = [] ;
var kol_chl = koef.length;
        var proverka= 1;
        var shetcik = 0;
        var i = 0;

        // all  = 0

        for ( i=0; i < kol_chl; i++)
        {
                st1[i]=0;
                st2[i]=0;
                st3[i]=0;
                rez[i]=0;
        }

        do {

                        // st1 = koef ^ 2 
                        for ( i=0; i < kol_chl; i++)
                        {
                                st1[i]=Math.pow(koef[i],2);
                        }

                        //-2 a i-1 a i+1
                        for ( i=1; i < kol_chl - 1; i++)
                        {
                                st2[i]=-2*koef[i-1]*koef[i+1];
                        }
                        //2 a i-2 a i+2
                        for ( i=2; i < kol_chl - 2; i++)
                        {
                                st3[i]=2*koef[i-2]*koef[i+2];
                        }

                        // st1 + st2 + st3

                        for (i=0; i < kol_chl; i++)
                        {
                                koef[i]=st1[i]+st2[i]+st3[i];
                                if (koef[i] > 10E100)
                                        proverka=0;
                        }

                shetcik = shetcik+1;

        } while (proverka!=0);

        console.log("shetcik = " + shetcik);
       

        //2^shetcik
        var g=2;
        for ( i=1; i < shetcik; i++)
        {
                g = g*2;
                
                
        }console.log("g = "+g);
        
        var p = 1./g;
        
        console.log("p = " + p);

        //rezult
        for( i=0; i < kol_chl-1; i++)
        {
                var c =   koef[i+1]/koef[i];
                
                rez[i] = Math.pow((koef[i+1]/koef[i]), p) ;
                
               // console.log("result  x("+(i+1)+")="+rez[i].toFixed(4));
        }

////////////////////////////////////////////////////////////
   document.getElementById("demo1").innerHTML = "Корені рівняння методом Лобачевського";
    for (var i = 0; i < rez.length-1; i++) {
        rez[i] = "X(" + (i+1) + ")= " + rez[i].toFixed(4) + "<br>";
        console.log(rez[i]);
    };

    var tostr = rez.join(' ');

    document.getElementById("demo").innerHTML = tostr;

////////////////////////////////////////////////////////////

} else console.log("ERROR");

 return confirm(msg.join("\n"));

        }


