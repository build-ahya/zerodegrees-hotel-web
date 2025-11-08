export default function errorMessage(code: string) {
    let response = '';
  
    if (Array.isArray(code)) {
      return code.map((m, i) => m.massage).join('\n');
    }
  
    switch (code) {
      case 'auth/user-not-found':
      case 'auth/invalid-credential':
        response =
          'There is no existing user record corresponding to the provided credentials.';
        break;
  
      case 'auth/wrong-password':
        response = 'Email or Password is incorrect';
        break;
  
      case 'auth/email-already-exists':
      case 'auth/email-already-in-use':
        response =
          'An account already existing with this email address\n login instead.';
        break;
  
      case 'auth/invalid-phone-number':
        response =
          'The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.';
        break;
  
      case 'auth/phone-number-already-exists':
        response =
          'An account already existing with this phone number\n Use another phone number or login instead';
        break;
  
      case 'auth/uid-already-exists':
        response =
          'The provided uid is already in use by an existing user.\n Each user must have a unique uid. login instead.';
        break;
  
      case 'auth/invalid-action-code':
        response = 'This link is expired or invalid';
        break;
  
      case 'auth/network-request-failed':
        response = 'Unable to connect! check your network connection & try again';
        break;
  
      case 'auth/too-many-requests':
        response =
          'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.';
        break;
      default:
        response = code || 'Unknown error';
        break;
    }
  
    return response;
  }