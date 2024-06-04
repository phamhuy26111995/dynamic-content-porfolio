import React, {useEffect, useState} from "react";
import {Link} from "react-scroll";
import {database, provider, auth} from "../firebaseConfig";
import {useTranslation} from "react-i18next";
import {onValue, ref} from 'firebase/database';
import {signInWithPopup } from 'firebase/auth';
import {useRecoilState} from "recoil";
import {firstnameSelector, surnameSelector} from "../recoil/selectors.js";

const Header = () => {
  const {t: translate} = useTranslation();
  const [firstname, setFirstname] = useRecoilState(firstnameSelector);
  const [surname, setSurname] = useRecoilState(surnameSelector);


  useEffect(() => {
    const headerRef = ref(database, 'header/leftContent');
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setFirstname(data.firstname)
      setSurname(data.surname)
    });

  }, []);


  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth,provider);
      console.log(result)
      setUser(result.user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };


  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <p className="text-2xl font-bold text-gradient">{surname}</p>
            <p className="text-2xl font-bold text-gradient">{firstname}</p>
          </a>

         <div>
           <Link smooth="true" spy="true" to="contact">
             <button className="btn btn-sm">{translate('workWithMe')}</button>
           </Link>
           <div>
             {user ? (
               <div>
                 <h2>Welcome, {user.displayName}</h2>
                 <button onClick={signOut}>Sign Out</button>
               </div>
             ) : (
               <button onClick={signInWithGoogle}>Sign In with Google</button>
             )}
           </div>
         </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
