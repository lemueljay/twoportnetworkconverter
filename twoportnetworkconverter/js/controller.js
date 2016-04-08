/**
 * Created by Lemmeister on 4/6/2016.
 */

$(document).ready(function() {

    /*
        Event listener for reset button.
     */

    $('#reset').click(function() {
        $('input').each(function() {
            $(this).val('');
        });
        $('#label11').text('--');
        $('#label12').text('--');
        $('#label21').text('--');
        $('#label22').text('--');
        $('#notifier').addClass('hidden');
    })

    /*
        Event listener when "From Selection" is clicked. Ths changes the label positions.
     */

    var fromIDold = 1;

    $('select[name="fromparameter"]').click(function() {
        var fromIDnew = $('select[name="fromparameter"]').val();
        if(fromIDnew == fromIDold) {

        } else {
            switch(fromIDnew) {
                case '1':
                    $('.changeparam').each(function() {
                        $(this).text('z');
                    });
                    break
                case '2':
                    $('.changeparam').each(function() {
                        $(this).text('y');
                    });
                    break
                case '3':
                    $('.changeparam').each(function() {
                        $(this).text('h');
                    });
                    break
                case '4':
                    $('.changeparam').each(function() {
                        $(this).text('g');
                    });
                    break
                case '5':
                    $('.changeparam').each(function() {
                        $(this).text('T');
                    });
                    break
                case '6':
                    $('.changeparam').each(function() {
                        $(this).text('t');
                    });
                    break
            }
            fromIDold = fromIDnew;
        }
    })

    /*
        Event listener for transforming the parameters.
     */


    $('select[name="toparameter"]').click(function() {
        var result = getInput();
        var ans11 = parseString(result[0][0], result[0][1]);
        var ans12 = parseString(result[1][0], result[1][1]);
        var ans21 = parseString(result[2][0], result[2][1]);
        var ans22 = parseString(result[3][0], result[3][1]);

        ans11 = math.eval(ans11);
        ans12 = math.eval(ans12);
        ans21 = math.eval(ans21);
        ans22 = math.eval(ans22);

        $('#label11').text(ans11);
        $('#label12').text(ans12);
        $('#label21').text(ans21);
        $('#label22').text(ans22);
    })

    function parseString(str1, str2) {
        var str = '';
        var numerator = '';
        var denominator = '';

        if(str1[1] > 0) {
            numerator = str1[0] + " + " + str1[1] + "i";
        } else if (str1[1] == 0) {
            numerator = str1[0];
        } else if (str1[1] < 0) {
            numerator = str1[0] + " - " + (str1[1] * -1 + "i");
        }

        if(str2[1] > 0) {
            denominator = str2[0] + " + " + str2[1] + "i";
        } else if (str2[1] == 0) {
            denominator = str2[0];
        } else if (str2[1] < 0) {
            denominator = str2[0] + " - " + (str2[1] * -1 + "i");
        }

        if (denominator == '1') {
            str = numerator;
        } else {
            str = "( " + numerator + " ) / ( " + denominator + " )";
        }

        return str;
    }

    function getInput() {

        if(filterInput($('#r11').val()) && $('#r12').val() && $('#r21').val() && $('#r22').val() && $('#i11').val() && $('#i12').val() && $('#i21').val() && $('#i22').val()) {
            var matreal = [fractodec($('#r11').val()), fractodec($('#r12').val()), fractodec($('#r21').val()), fractodec($('#r22').val())];
            var matimag = [fractodec($('#i11').val()), fractodec($('#i12').val()), fractodec($('#i21').val()), fractodec($('#i22').val())];
            var fromID = $('select[name="fromparameter"]').val();
            var toID = $('select[name="toparameter"]').val();

            switch(toID) {
                case '1':
                    $('.changetoparam').each(function() {
                        $(this).text('z');
                    });
                    break
                case '2':
                    $('.changetoparam').each(function() {
                        $(this).text('y');
                    });
                    break
                case '3':
                    $('.changetoparam').each(function() {
                        $(this).text('h');
                    });
                    break
                case '4':
                    $('.changetoparam').each(function() {
                        $(this).text('g');
                    });
                    break
                case '5':
                    $('.changetoparam').each(function() {
                        $(this).text('T');
                    });
                    break
                case '6':
                    $('.changetoparam').each(function() {
                        $(this).text('t');
                    });
                    break
            }

            if (fromID == 1 && toID == 1) {
                var result = zToz(matreal, matimag);

            } else if (fromID == 1 && toID == 2) {
                var result = zToy(matreal, matimag);

            } else if (fromID == 1 && toID == 3) {
                var result = zToh(matreal, matimag);

            } else if (fromID == 1 && toID == 4) {
                var result = zTog(matreal, matimag);

            } else if (fromID == 1 && toID == 5) {
                var result = zToT(matreal, matimag);

            } else if (fromID == 1 && toID == 6) {
                var result = zTot(matreal, matimag);

            } else if (fromID == 2 && toID == 1) {
                var result = yToz(matreal, matimag);

            } else if (fromID == 2 && toID == 2) {
                var result = yToy(matreal, matimag);

            } else if (fromID == 2 && toID == 3) {
                var result = yToh(matreal, matimag);

            } else if (fromID == 2 && toID == 4) {
                var result = yTog(matreal, matimag);

            } else if (fromID == 2 && toID == 5) {
                var result = yToT(matreal, matimag);

            } else if (fromID == 2 && toID == 6) {
                var result = yTot(matreal, matimag);

            } else if (fromID == 3 && toID == 1) {
                var result = hToz(matreal, matimag);

            } else if (fromID == 3 && toID == 2) {
                var result = hToy(matreal, matimag);

            } else if (fromID == 3 && toID == 3) {
                var result = hToh(matreal, matimag);

            } else if (fromID == 3 && toID == 4) {
                var result = hTog(matreal, matimag);

            } else if (fromID == 3 && toID == 5) {
                var result = hToT(matreal, matimag);

            } else if (fromID == 3 && toID == 6) {
                var result = hTot(matreal, matimag);

            } else if (fromID == 4 && toID == 1) {
                var result = gToz(matreal, matimag);

            } else if (fromID == 4 && toID == 2) {
                var result = gTot(matreal, matimag);

            } else if (fromID == 4 && toID == 3) {
                var result = gToh(matreal, matimag);

            } else if (fromID == 4 && toID == 4) {
                var result = gTog(matreal, matimag);

            } else if (fromID == 4 && toID == 5) {
                var result = gToT(matreal, matimag);

            } else if (fromID == 4 && toID == 6) {
                var result = gTot(matreal, matimag);

            } else if (fromID == 5 && toID == 1) {
                var result = TToz(matreal, matimag);

            } else if (fromID == 5 && toID == 2) {
                var result = TToy(matreal, matimag);

            } else if (fromID == 5 && toID == 3) {
                var result = TToh(matreal, matimag);

            } else if (fromID == 5 && toID == 4) {
                var result = TTog(matreal, matimag);

            } else if (fromID == 5 && toID == 5) {
                var result = TToT(matreal, matimag);

            } else if (fromID == 5 && toID == 6) {
                var result = TTot(matreal, matimag);

            } else if (fromID == 6 && toID == 1) {
                var result = tToz(matreal, matimag);

            } else if (fromID == 6 && toID == 2) {
                var result = tToy(matreal, matimag);

            } else if (fromID == 6 && toID == 3) {
                var result = tToh(matreal, matimag);

            } else if (fromID == 6 && toID == 4) {
                var result = tTog(matreal, matimag);

            } else if (fromID == 6 && toID == 5) {
                var result = tToT(matreal, matimag);

            } else if (fromID == 6 && toID == 6) {
                var result = tTot(matreal, matimag);

            }
            $('#notifier').addClass('hidden');
            return result;
        } else {
            $('#label11').text('--');
            $('#label12').text('--');
            $('#label21').text('--');
            $('#label22').text('--');
            $('#notifier').removeClass('hidden');
        }
    }

    function filterInput(input) {
        var len = input.length;
        if(len == 0) {
            return false;
        } else if(input.charAt(0) == '/' || input.slice(-1) == '/') {
            return false;
        } else {
            for(var x = 0; x < len; x++) {
                var i = input.charAt(x);
                if(i == '1' || i == '2' || i == '3' || i == '4' || i == '5' || i == '6' || i == '7' || i == '8' || i == 9 || i == '0' || i == '/') {
                    if(input.charAt(x+1) == '/' && i == '/') {
                        return false;
                    }
                } else {
                    return false;
                }
            }
            return true;
        }

    }

    function fractodec(input) {
        var len = input.length;
        //search for any division operator
        var count = [0];
        var j = 0;
        for(var x = 1; x < len; x++) {
            var i = input.charAt(x);
            if(i == '/') {
                count.push(x);
                j++;
            }
        }
        var temp = [];
        for(var a = 0 ; a < count.length; a++) {
            temp.push(input.slice(count[a], count[a+1]));
        }
        //clean
        var clean = [temp[0]];
        for(var a = 1 ; a < count.length; a++) {
            var m = temp[a].slice(1)
            clean.push(m);
        }


        //operate
        var floats = [];
        for(var a = 0 ; a < clean.length; a++) {
            floats.push(parseFloat(clean[a]));
        }

        for(var a = 1 ; a < floats.length; a++) {
            var total = floats[0];
            total = total / floats[a];
            floats[0] = total;
        }


        return floats[0];


    }

})
