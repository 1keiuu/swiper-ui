// FIXME: jest内でaxiosを呼ぶと、モックするしないに関わらず`TypeError: _axios.default.get is not a function`が出る
// 未解決の為、現状このテストは動かない
import { getUsers } from "../../../../src/lib/fetch";
import axiosMock from "../../../__mocks__/axios";
import axios from "axios";

jest.mock("axios");

describe("fetch", () => {
  test("method 'getUsers'", () => {
    getUsers(1).then((res) => {
      const users = [
        {
          Id: 0,
          Name: "Roberson Russell",
          ImgURL: "https://placekitten.com/g/758/594",
          Age: 24,
          Profile:
            "Excepteur ullamco Lorem deserunt velit nostrud consectetur ad consectetur et mollit nulla. Culpa elit aliqua sint commodo cupidatat deserunt mollit cillum nisi ad laboris eu. Mollit tempor amet ex cupidatat laborum sunt voluptate ullamco.\r\n",
        },
      ];
      const response = { data: users };
      axios.get.mockResolvedValue(response);
      expect(res.data).toEqual(users);
    });
  });
});
