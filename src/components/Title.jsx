const Title = (props) => {
  console.log(props);

  return <h1 style={{ fontSize: "32px", color: "pink" }}>{props.name}</h1>;
};

export default Title;
