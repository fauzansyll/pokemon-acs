import Image from "next/image";
import React, { Fragment } from "react";

const Logo = () => {
  return (
    <Fragment>
      <Image
        src={"/Poke Ball icon.svg"}
        width={50}
        height={50}
        alt="Pokeball"
      />
    </Fragment>
  );
};

export default Logo;
