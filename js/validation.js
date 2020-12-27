ACC.validation = { 
    checkEmail: function(email) {
        console
        var isValid = false;
        var pattern = new RegExp(/^[^@]+@[^@]+\.[^@]+$/i);
        isValid = pattern.test(email) ? true : false;

        return isValid;
    }
}