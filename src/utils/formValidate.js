const formValidate = (firstName, lastName, email) => {
  // let errors = {};
  // let formIsValid = true;
  let formValidation ={
    formIsValid: true,
    errors: {}
  }

  // Validate first name
  if (!firstName) {
    formValidation.formIsValid = false;
    formValidation.errors["firstname"] = "Please enter your first name.";
  }

  if (typeof firstName !== "undefined") {
    if (!firstName.match(/^[a-zA-Z ]*$/)) {
      formValidation.formIsValid = false;
      formValidation.errors["firstname"] = "Please enter alphabet characters only.";
    }
  }

  // Validate last name
  if (!lastName) {
    formValidation.formIsValid = false;
    formValidation.errors["lastname"] = "Please enter your last name.";
  }

  if (typeof lastName !== "undefined") {
    if (!lastName.match(/^[a-zA-Z ]*$/)) {
      formValidation.formIsValid = false;
      formValidation.errors["lastname"] = "Please enter alphabet characters only.";
    }
  }

  // Validate email
  if (!email) {
    formValidation.formIsValid = false;
    formValidation.errors["email"] = "Please enter your email.";
  }

  if (typeof email !== "undefined") {
    //regular expression for email validation
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(email)) {
      formValidation.formIsValid = false;
      formValidation.errors["email"] = "Please enter valid email.";
    }
  }


  // this.setState({
  //   errors: errors
  // });
  return formValidation;
}

export default formValidate;