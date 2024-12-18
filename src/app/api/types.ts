export interface Posts {
  id: number;
  userId: number;
  body: string;
  title?: string;
  username?: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  completed: boolean;
}
export interface Users {
  id: number;
  title?: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  body: string;
  completed: boolean;
}

export interface Todos {
  userId: number;
  email: string;

  username: string;
  id: number;
  title: string;
  completed: boolean;
  body: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
}
