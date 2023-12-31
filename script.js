function aidenify(str) {
  var str = str.toLowerCase().split('');

  var newStr = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] == 'a') {
      newStr.push('aiden');
    } else if (str[i] == 'e') {
      newStr.push('epre');
    } else if (str[i] == 'i') {
      newStr.push('ipri');
    } else if (str[i] == 'o') {
      newStr.push('opro');
    } else if (str[i] == 'u') {
      newStr.push('upru');
    } else if (str[i] == ' ') {
      newStr.push(' ');

    } else if (/[^a-z]/.test(str[i])) {
      newStr.push(str[i])
      
    } else if (/[^aiueo ]/.test(str[i]) && str[i + 1] == ' ' && str[i - 1] + str[i] != 'ng' && str[i - 1] + str[i] != 'ny') {
      newStr.push(str[i] + 'es');
    } else if (i == str.length - 1 && /[^aiueo ]/.test(str[i]) && str[i - 1] + str[i] != 'ng' && str[i - 1] + str[i] != 'ny') {
      newStr.push(str[i] + 'es');

    } else  if (/[^aiueo ]/.test(str[i])) {
      if (str[i + 1] == 'g' && str[i] == 'n') {
        newStr.push('stre' + str[i]);
      } else if (/[aiueo]/.test(str[i + 2]) && str[i + 1] == 'y' && str[i] == 'n') {
        newStr.push(str[i]);
      } else if (/[^aiueo]/.test(str[i + 2]) && str[i + 2] == ' ' && str[i + 1] == 'y' && str[i] == 'n') {
          newStr.push(str[i]+'es');
      } else if (/[^aiueo ]/.test(str[i + 1]) && str[i] + str[i + 1] != 'ng' && i != str.length - 1) {
        newStr.push(str[i] + 'es');
      }else if (/[^aiueo ]/.test(str[i + 1]) && str[i] + str[i + 1] != 'ny' && i != str.length - 1) {
          newStr.push(str[i] + 'es');
      } else {
        newStr.push(str[i]);
      }
    } 
  }
  return newStr.join('');
}

function normalize(str) {
  str = str.toLowerCase().split('');
  
  var newStr = [];
  
  for (var i = 0; i < str.length; i++) {
          if (str[i + 1] == 'y' && str[i] == 'n'){
            newStr.push(str[i]);
            continue;
          } else if (str[i] + str[i + 1] + str[i + 2] + str[i + 3] + str[i + 4] == 'aiden') {
            newStr.push('a');
            i += 4;
            continue;
          } else if (str[i] + str[i + 1] + str[i + 2] + str[i + 3] == 'epre') {
            newStr.push('e')
            i += 3;
            continue;
          } else if (str[i] + str[i + 1] + str[i + 2] + str[i + 3] == 'ipri') {
            newStr.push('i');
            i += 3;
            continue;
          } else if (str[i] + str[i + 1] + str[i + 2] + str[i + 3] == 'opro') {
            newStr.push('o');
            i += 3;
            continue;
          } else if (str[i] + str[i + 1] + str[i + 2] + str[i + 3] == 'upru') {
            newStr.push('u');
            i += 3;
            continue;
          

          } else if (/[^aiueo ]/.test(str[i]) && (/[aiueo]/.test(str[i + 1]) && i != str.length - 1 && str[i - 1] + str[i] != 'ng')) {
            newStr.push(str[i]);
          } else if (str[i] == ' ') {
            newStr.push(' ');
          } else if (/[^a-z]/.test(str[i])) {
            newStr.push(str[i]);
          } else if (str[i] + str[i + 1] + str[i + 2] + str[i + 3] + str[i + 4] + str[i + 5] == 'streng') {
            newStr.push('ng');
            i += 4;
            continue;
          } else if (/[^aiueo ]/.test(str[i]) && str[i + 1] + str[i + 2] == 'es') {
            newStr.push(str[i]);
            i++;
            continue;
          }
        }
  
  return newStr.join('');
}

var toAiden = true;

$('.fa-exchange-alt').click(function() {
  var a = $('#input').val();
  var b = $('#result').val();
  var temp;

  temp = a;
  a = b;
  b = temp;

  $('#input').val(a);
  $('#result').val(b);

  if (toAiden) {
    $('.left-lang').html('Umandana');
    $('.right-lang').html('Normal');
    $('#input').attr('placeholder', 'Masukkan teks Umandana yang mau diubah');
    $('#result').attr('placeholder', 'Terjemahan');
  } else {
    $('.left-lang').html('Normal');
    $('.right-lang').html('Umandana');
    $('#input').attr('placeholder', 'Masukkan teks yang mau diubah');
    $('#result').attr('placeholder', 'Terjemahan');
  }
  toAiden = !toAiden;
});

$('#input').keyup(function() {
  if (toAiden) {
    $('#result').val(aidenify($('#input').val()));
  } else {
    $('#result').val(normalize($('#input').val()));
  }
});