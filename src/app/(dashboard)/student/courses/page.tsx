'use client';
import React from 'react';
import ReactPlayer from 'react-player';

// import { useLayoutContext } from '../../../../../context/LayoutContext';

const page = () => {
  // const { dispatch } = useLayoutContext();
  // useEffect(() => {
  //   dispatch({ type: "SET_NAVBAR", navbarType: "webNavbar" });
  //   dispatch({ type: "SET_SIDEBAR", sidebarType: "none" });

  //   return () => {
  //     dispatch({ type: "SET_NAVBAR", navbarType: "none" });
  //     dispatch({ type: "SET_SIDEBAR", sidebarType: "none" });
  //   };
  // }, [dispatch]);
  return (
    <div className="w-full grid gap-10">
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=NWnBxQjssvQ"
          className="react-player"
          controls
        />
      </div>
    </div>
  );
};

export default page;
