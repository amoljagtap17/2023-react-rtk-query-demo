import { faker } from "@faker-js/faker";
import { iPost, iUser } from "app/types";

export function getRandomUser(): iUser {
  const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const email = faker.helpers
    .unique(faker.internet.email, [firstName, lastName])
    .toLowerCase();

  return {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    email,
    firstName,
    lastName,
    createdAt: new Date(),
  };
}

export function getRandomPost(userId: string): iPost {
  return {
    id: faker.datatype.uuid(),
    title: faker.lorem.lines(1),
    slug: faker.lorem.slug(),
    userId,
    body: faker.lorem.paragraphs(4),
    createdAt: new Date(),
  };
}
