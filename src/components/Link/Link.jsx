const Link = ({route}) => {
  return (
    <li className="mr-10">
      <a href={route.path}></a>
      {route.name}
    </li>
  );
};

export default Link;
