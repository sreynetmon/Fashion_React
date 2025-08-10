
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
    if (githubUser) return 'GitHub';
    if (facebookUser) return 'Facebook';
    if (googleUser) return 'Google';
    return '';
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
        <div className='mx-auto justify-items-center'>
          <h2>Welcome, {currentUser.displayName || currentUser.email}!</h2>
          <p>You are logged in with {getProvider()}</p>
          <div style={{ margin: '10px 0' }}>
            {console.log("The profile user: ", currentUser?.photoURL)}
             
             <img
                src={`${userProfile}`}
                alt="Profile" className='w-8 h-8 rounded-full border-1'
            
                onError={(e) => {
                  console.log('Image failed to load:', currentUser?.photoURL);
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            {/* {currentUser?.phtoURL? (
              <img
                src={currentUser?.photoURL}
                alt="Profile"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  border: '2px solid #ccc'
                }}
                onError={(e) => {
                  console.log('Image failed to load:', currentUser?.photoURL);
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null} */}
            {/* <div className='w-8 h-8 rounded-2xl bg-blue-500 flex text-2xl font-bold'
            >
              {(currentUser.displayName || currentUser.email || 'U').charAt(0).toUpperCase()}
            </div> */}
          </div>
          <button className="border-1 rounded-2xl w-[100px] h-[40px]" onClick={handleLogout}>
            {isPending ? "Signing out..." : "Sign Out"}
          </button>
        </div>
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
