import { API_CLIENT } from "./settings";

export default {
  GET_BLOCKS() {
    return API_CLIENT.get("/items");
  }
};
