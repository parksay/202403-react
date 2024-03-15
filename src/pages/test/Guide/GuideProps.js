const GuideProps = (props) => {
  console.log("props >>", props);
  const propsVal = props.myval;
  return (
    <div>
      <h2>{propsVal}</h2>
    </div>
  );
};

export default GuideProps;
