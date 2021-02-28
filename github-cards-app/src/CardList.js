import Card from './Card';
const CardList = (props) => (
  <div>
    {props.profiles.map((profile) => (
      <Card {...profile} key={profile.id} />
    ))}
  </div>
);

export default CardList;
