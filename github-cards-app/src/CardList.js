import Card from './Card';
import testData from './TestData';

const CardList = (props) => (
  <div>
    {testData.map((profile) => (
      <Card {...profile} key={profile.id} />
    ))}
  </div>
);

export default CardList;
