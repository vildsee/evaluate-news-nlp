function checkForName(inputUrl) {
    // console.log("::: Running checkForName :::", inputUrl);
    var res = inputUrl.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null){
        console.log('false');
        return false;
    }
        else {
            console.log('true');
            return true;
    }
}

export { checkForName }
