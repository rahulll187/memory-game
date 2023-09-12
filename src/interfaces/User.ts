interface NameIF {
  title: string;
  first: string;
  last: string;
}
interface PictureIF {
  large: string;
  medium: string;
  thumbnail: string;
}
interface DobIF {
  date: string;
  age: string;
}
export interface UserIF {
  name: NameIF;
  gender: string;
  dob: DobIF;
  phone: string;
  email: string;
  picture: PictureIF;
}
