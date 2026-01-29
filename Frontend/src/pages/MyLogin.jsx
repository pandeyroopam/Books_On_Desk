import { GoogleLogin } from '@react-oauth/google';

export default function MyLogin() {
  return (
    <>

    helo
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      ;
    </>
  );
}
