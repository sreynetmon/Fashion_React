
import FacebookLogo from './assets/image/Facebook.png'
import GithubLogo from './assets/image/github.png'
import GoogleLogo from './assets/image/Google.png'
import { useLoginWithFacebook } from './Components/auth/loginFacebook';
import { useLoginWithGithub } from './Components/auth/loginithub';
import { useLoginWithGoogle } from './Components/auth/loginGoogle';

function App() {
  const { login: githubLogin, logout: githubLogout, isPending: githubPending, user: githubUser } = useLoginWithGithub ();
  const { facebookLogin, logout: facebookLogout, isPending: facebookPending, user: facebookUser } = useLoginWithFacebook();
  const { googleLogin, logout: googleLogout, isPending: googlePending, user: googleUser } = useLoginWithGoogle();
  // Use whichever user is logged in (since they all use the same Firebase auth)
  const currentUser = githubUser || facebookUser || googleUser;
  const isPending = githubPending || facebookPending || googlePending;
  // Determine which provider is being used
  const getProvider = () => {
    if (!currentUser || !currentUser.providerData || currentUser.providerData.length === 0) {
      return 'Unknown';
    }
    const providerId = currentUser.providerData[0].providerId;
    if (providerId.includes('google')) return 'Google';
    if (providerId.includes('github')) return 'GitHub';
    if (providerId.includes('facebook')) return 'Facebook';
    if (providerId.includes('password')) return 'Email/Password';
    return 'Unknown';
  };
  // Use the logout function from whichever service the user is logged in with
  const handleLogout = () => {
    if (githubUser) {
      githubLogout();
    } else if (facebookUser) {
      facebookLogout();
    } else if (googleUser) {
      googleLogout();
    }
  };
  const userProfile = currentUser?.photoURL;
  console.log("the currentUser=====?:", userProfile);

  return (
    <div>
      {currentUser ? (
        // User is logged in
        (
          <div className='flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg space-y-4 text-center'>
          <h2 className='text-2xl font-semibold text-gray-800'>Welcome, {currentUser.displayName || currentUser.email}!</h2>
          <p className='text-gray-600'>You are logged in with {getProvider()}</p>
          
          <div className='my-4 flex justify-center items-center'>
            {currentUser.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt="Profile"
                className='w-12 h-12 rounded-full border-2 border-gray-300 object-cover'
                // This onError handler provides a fallback for broken image URLs
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.querySelector('.fallback-avatar').style.display = 'flex';
                }}
              />
            ) : null}
            {/* Fallback avatar with the user's initial */}
            <div
              className='fallback-avatar w-12 h-12 rounded-full bg-blue-500 text-white text-xl font-bold flex items-center justify-center border-2 border-gray-300'
              style={{ display: currentUser.photoURL ? 'none' : 'flex' }}
            >
              {(currentUser.displayName || currentUser.email || 'U').charAt(0).toUpperCase()}
            </div>
          </div>
          
          <button
            className="w-full px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-200"
            onClick={handleLogout}
          >
            {isPending ? "Signing out..." : "Sign Out"}
          </button>
        </div>
        )
      )
      : (
          // User is not logged in
          <div className="flex flex-col gap-4">
            {/* Google Login Button */}
            <div className="border border-gray-300 rounded-2xl mx-auto w-full">
              <button className="flex flex-row justify-center items-center gap-2 p-2 rounded-2xl" onClick={googleLogin}>
                {googlePending ? "Loading..." : (
                  <>
                    <img src={GoogleLogo} alt="Google Logo" className='w-5 h-5' />
                    <span>Login With Google</span>
                  </>
                )}
              </button>
            </div>
            {/* GitHub Login Button */}
            <div className='border border-gray-300 rounded-2xl mx-auto w-full'>
              <button className="flex flex-row justify-center items-center gap-2 p-2 rounded-2xl" onClick={githubLogin}>
                {githubPending ? "Loading..." : (
                  <>
                    <img src={GithubLogo} alt="GitHub Logo" className='w-5 h-5' />
                    <span>Login With GitHub</span>
                  </>
                )}
              </button>
            </div>
            {/* Facebook Login Button */}
            <div className='border border-gray-300 rounded-2xl mx-auto w-full'>
              <button className="flex flex-row justify-center items-center gap-2 p-2 rounded-2xl " onClick={facebookLogin}>
                {facebookPending ? "Loading..." : (
                  <>
                    <img src={FacebookLogo} alt="Facebook Logo" className='w-5 h-5' />
                    <span>Login With Facebook</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
    </div>
  )
}

export default App
