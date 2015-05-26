/* Form Rules
================================================== */
$(document)
  .ready(function() {

    $('.ui.dropdown')
      .dropdown()
    ;

    $('.ui.form')
      .form({

        fname: {
          identifier  : 'fname',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your first name'
            }
          ]
        },
        lname: {
          identifier  : 'lname',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your last name'
            }
          ]
        },
        email: {
          identifier: 'email',
          rules: [{
            type: 'empty',
            prompt: 'Please enter your e-mail address'
          }, {
            type: 'email',
            prompt: 'Please enter a valid e-mail address'
          }]
        },
        telephone: {
          identifier : 'telephone',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your mobile telephone number'
            }
          ]
        },
        inquiryType: {
          identifier  : 'inquiryType',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please select the nature of your inquiry'
            }
          ]
        },
        msg: {
          identifier : 'msg',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please compose your message'
            }
          ]
        }


      })
    ;

    $('#contact_form')
      .form('validate form', {
        inline : true,
        on     : 'blur'
      })
    ;

    /* S-UI: Close Message */
    $('.message .close').on('click', function() {
      $(this).closest('.message').fadeOut();
    });


    /* Form Processing
    ================================================== */
    jQuery(function($) {

        $('#contact_form').submit(function() {
            var email = $('#email').val(); // get email field value
            var msg   = $('#msg').val(); // get message field value
            var name  = $('#fname').val() + ' ' +
                        $('#lname').val();
            var subjectHeading =  $('#fname').val() + ' ' +
                                  $('#lname').val() + ' | ' + 're:' + ' ' +
                                  $('#inquiryType').val() + ' | ' +
                                  $('#telephone').val() + ' | ' +
                                  $('#email').val();

    //    $('#contact_form').form(validationRules, { onSuccess: submitForm });

                $.ajax({
                    type: 'POST',
                    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
                    data: {
                        'key': 'pUDTb_c3pGAoW1jG57A5nA',
                        'message': {
                            'from_email': email,
                            'from_name': name,
                            'headers': {
                                'Reply-To': email
                            },
                            'subject': subjectHeading,
                            'text': msg,
                            'to': [{
                                'email': 'blarenberghe@gmail.com',
                                'name': 'New Orleans Glassworks',
                                'type': 'to'
                            }]
                        }
                    }
                })

                .done(function(response) {
//                    alert('Your message has been submitted. Thank you!'); // show success message
                    $('#successMessage').removeClass('hidden'); // show success message
                    $('#email').val(''); // reset field after successful submission
                    $('#fname').val(''); // reset field after successful submission
                    $('#lname').val(''); // reset field after successful submission
                    $('#telephone').val(''); // reset field after successful submission
                    $('.inquiry-select').dropdown('clear'); // reset field after successful submission
                    $('#msg').val(''); // reset field after successful submission
                })

                .fail(function(response) {
                    alert('There was an error in sending your message.');
                });

                return false; // prevent page refresh
        });
    }); // End Form Processing

  })
;
