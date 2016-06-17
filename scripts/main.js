  $(document).ready(function() {

    $('#contact_form').bootstrapValidator({
       
        feedbackIcons: {
            valid: null,
            invalid: null,
            validating: null
        },
        fields: {
            fiscal_year: {
                trigger: 'blur',
                validators: {
                     between: {
                        min: 2014,
                        max: 2016,
                        message: 'Please enter a valid fiscal year, YYYY'
                    },
                    notEmpty: {
                        message: 'Required'
                    }
                }
            },
             req_number: {
                trigger: 'blur',
                validators: {
                     stringLength: {
                        min: 8,
                        max: 8,
                        message: 'Please enter a valid 8 digit requisition number'
                    },
                    notEmpty: {
                        message: 'Required'
                    }
                }
            },
            created_date: {
                trigger: 'blur',
                Validators: {
                    date: {
                        min: 2015,
                        message: 'Please enter a valid date, mm/dd/yyyy'
                    },
                    notEmpty: {
                        message: 'Required'
                    }
                }
            },
            department: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 15,
                        message: 'Please enter this department instead: &#40;120&#41; Dianne&#39;s Department'
                    },
                    notEmpty: {
                        message: 'Required'
                    }
                }
            },
            commodity: {
                trigger: 'blur',
                validators: {
                     stringLength: {
                        min: 3,
                        message: 'Please enter a valid commodity value'
                    },
                    notEmpty: {
                        message: 'Required'
                    }
                }
            },
            description: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Please enter a description'
                    }
                }
            },
            buyer: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Please enter a buyer'
                    }
                }
            },
            type: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 11,
                        max: 11,
                        message: 'Please enter &#40;E&#41 EXPORTED instead'
                    },
                    notEmpty: {
                        message: 'Required'
                    }
                }
            },
            needed_by: {
                trigger: 'blur',
                Validators: {
                    date: {
                        min: 06/17/2016,
                        message: 'Please enter a valid date, mm/dd/yyyy'
                    },
                    notEmpty: {
                        message: 'Required'
                    }
                }
            }

        }
    });


            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');

            

        });




