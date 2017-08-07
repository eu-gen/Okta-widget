// JavaScript source code



    var orgUrl = 'https://atelier.oktapreview.com';
var redirectUrl = 'https://eu-gen.github.io/widget/loggedin.html';
// var oktaSignIn = new OktaSignIn({baseUrl: orgUrl});
var oktaSignIn = new OktaSignIn({
    baseUrl: orgUrl,
  //  logo: '/sysnopsyslogo.png',

    features: {
			rememberMe: true,
			smsRecovery: true,
            multiOptionalFactorEnroll: true,
            autoPush: true,
            callRecovery: true,
            windowsVerify: true,
			selfServiceUnlock: true
		},
        language: function (supportedLanguages, userLanguages) {
  // supportedLanguages is an array of languageCodes, i.e.:
  // ['cs', 'da', ...]
  //
  // userLanguages is an array of languageCodes that come from the user's
  // browser preferences
  return supportedLanguages[0];
}

    /* helpLinks: {
        help: 'http://acme.example.com/custom/help/page',
        forgotPassword: 'http://acme.example.com/custom/forgot/pass/page',
        unlock: 'http://acme.example.com/custom/unlock/page',
        custom: [
          { text: 'Dehydrated Boulders Support', href: 'http://acme.example.com/support/dehydrated-boulders' },
          { text: 'Rocket Sled Questions', href: 'http://acme.example.com/questions/rocket-sled' }
        ]
    }, */

    // See the contents of the 'okta-theme.css' file for a full list of labels.
    labels: {
        'primaryauth.title': 'Widget Testing',
        'primaryauth.username': 'Username',
        'primaryauth.username.tooltip': 'Enter your email ID',
        'primaryauth.password': 'Password',
        'primaryauth.password.tooltip': 'Enter your secret password'
    }
});

oktaSignIn.renderEl(
  { el: '#okta-login-container' },
  function (res) {
      if (res.status === 'SUCCESS') {
          console.log('User %s successfully authenticated %o', res.user.profile.login, res.user);
          res.session.setCookieAndRedirect(redirectUrl);
      }
  }
);

function myFunction() {
   oktaSignIn.signOut(function () {
window.location.href='/widget/index.html';

    });
}
