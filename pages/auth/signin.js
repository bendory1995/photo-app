import { getProviders, signIn as SignIntoProvider} from "next-auth/react";
import Header from "../../components/Header";

function signin({ providers }) {
  return (
    <>
      <Header />
      <div className ="flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center">
          <img className = "w-80"src = "https://www.seekpng.com/png/full/131-1310384_png-file-diary-icon-png.png" alt = ""/>
          <p className ="font-xs italic" >
              This is an Interactive Diary. Sign up to post your diaries and interact with your friends!
          </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => SignIntoProvider(provider.id, {callbackUrl: "/"})}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
export default signin;
