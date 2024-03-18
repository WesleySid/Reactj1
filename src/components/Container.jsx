import Title from "./Title";
import Text from "./Text";

const Container = (props) => {
  console.log(props);
  return (
    <div className="content">
      <Title />
      <Text />
    </div>
  );
};
export default Container;
