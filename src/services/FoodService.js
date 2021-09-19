import HttpService from "./HttpService";

class FoodService extends HttpService {
  async getAll() {
    try {
      const { data } = await this.client.get("foods.json");
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }

  async get(id) {
    try {
      const { data } = await this.client.get(`foods/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async add(newFood, userData) {
    try {
      const { data } = await this.client.post("orders.json", {
        meal: newFood,
        orderUser: userData,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async edit(id, food) {
    try {
      const { data } = await this.client.put(`foods/${id}`, food);
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async delete(id) {
    try {
      const { data } = await this.client.delete(`foods/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}

export default new FoodService();
