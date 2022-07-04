import { Card } from "../ui";

const UserItem = ({ item }) => {
  return (
    <Card>
      <li>
        <div>
          <p>Id: {item.id}</p>
        </div>
        <div>
          <p>Name: {item.name}</p>
        </div>
        <div>
          <p>Username: {item.username}</p>
        </div>
        <div>
          <p>Email: {item.email}</p>
        </div>
        <div>
          <div>
            <p>Address</p>
          </div>
          <div>
            <div>
              <p>Street: {item.address.street}</p>
            </div>
            <div>
              <p>Suite: {item.address.suite}</p>
            </div>
            <div>
              <p>City: {item.address.city}</p>
            </div>
            <div>
              <p>Zipcode: {item.address.zipcode}</p>
            </div>
            <div>
              <div>
                <p>Geo</p>
              </div>
              <div>
                <div>
                  <p>Latitud: {item.address.geo.lat}</p>
                </div>
                <div>
                  <p>Longitud: {item.address.geo.lng}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </Card>
  );
};

export default UserItem;
