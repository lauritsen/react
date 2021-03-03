import Card from './Card';
const CardList = (props) => (
  <div>
    {props.profiles.map((profile) => (
      <Card profile={profile} key={profile.id} />
    ))}
  </div>
);

export default CardList;
