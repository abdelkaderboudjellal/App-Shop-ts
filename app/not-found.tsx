import Image from "next/image";

type Props = {};

const PageNotfound = () => {
  return (
    <>
      <Image
        alt=""
        width={1000}
        height={1000}
        objectFit="cover"
        src="/images/pagenofound.png"
        priority 
      />
    </>
  );
};
export default PageNotfound;
