import React from 'react';
import { BlitzPage } from 'blitz';
import Layout from 'app/core/layouts/Layout';
import { CharacterForm } from 'app/core/components/CharacterForm';

// const UserInfo = () => {
//   const currentUser = useCurrentUser();
//   const [logoutMutation] = useMutation(logout);

//   if (currentUser) {
//     return (
//       <>
//         <button
//           className="button small"
//           onClick={async () => {
//             await logoutMutation();
//           }}
//         >
//           Logout
//         </button>
//         <div>
//           User id: <code>{currentUser.id}</code>
//           <br />
//           User role: <code>{currentUser.role}</code>
//         </div>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Link href={Routes.SignupPage()}>
//           <a className="button small">
//             <strong>Sign Up</strong>
//           </a>
//         </Link>
//         <Link href={Routes.LoginPage()}>
//           <a className="button small">
//             <strong>Login</strong>
//           </a>
//         </Link>
//       </>
//     );
//   }
// };

const Home: BlitzPage = () => {
  return (
    <div>
      <main className="max-w-3xl p-4 mx-auto">
        <CharacterForm />
      </main>

      <footer></footer>
    </div>
  );
};

Home.suppressFirstRenderFlicker = true;
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>;

export default Home;
