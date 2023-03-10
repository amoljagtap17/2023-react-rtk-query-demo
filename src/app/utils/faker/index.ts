import { faker } from "@faker-js/faker";
import { iUser } from "app/types";

export function getRandomUser(): iUser {
  const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const email = faker.helpers.unique(faker.internet.email, [
    firstName,
    lastName,
  ]);

  return {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    email,
    firstName,
    lastName,
  };
}
