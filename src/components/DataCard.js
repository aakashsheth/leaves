import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


// export default class DataCard extends React.Component {      
//   render() {
//     return (
//       <div>
//         <Card>
//           <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
//           <CardBody>
//             <CardTitle>Paperless Coffee</CardTitle>
//             <CardText>More information about going paperless!</CardText>
//             <Button>More</Button>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
// }

export default function DataCard(props) {
  // Supposing your item shape is something like {name: 'foo'}
  const { item, index, itemsLength } = props;
  return <div>Item {index} of {itemsLength}: {item.name}</div>;
}