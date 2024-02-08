import { InnerClient } from "../InnerClient";

const Servercomponent = () => {
  // Can not use useEffect as it is an client side Hook
  // useEffect(() => {
  //   console.log("Clientcomponent effect", "client side");
  // }, []);

  return (
    <div style={{ border: "1px solid red", margin: 20 }}>
      <InnerClient />
      <div>Servercomponent</div>
    </div>
  );
};

export default Servercomponent;
