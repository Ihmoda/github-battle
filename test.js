var getProfilePic = function (username) {
    console.log('https://photo.fb.com/' + username)
    return 'https://photo.fb.com/' + username
  }
  var getProfileLink = function (username) {
    console.log('https://www.fb.com/' + username)
    return 'https://www.fb.com/' + username
  }
  var getProfileData = function (username) {
    return {
      pic: getProfilePic(username),
      link: getProfileLink(username)
    }
  }
  getProfileData('tylermcginnis').pic


