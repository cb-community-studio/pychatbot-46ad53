
import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
tags: faker.word.adjective(8),
patterns: faker.datatype.array(),
Response: faker.datatype.array(),

        };
        data = [...data, fake];
    }
    return data;
};
