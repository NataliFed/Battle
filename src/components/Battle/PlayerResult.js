export const PlayerResult = (props) => {
  return (
    <div>
      <div className="column">
        <img src={props.avatar} alt="Avatar" className="avatar" />
        <h2 className="username">{props.username}</h2>
      </div>
      {props.children}
    </div>
  );
};
export default PlayerResult;
