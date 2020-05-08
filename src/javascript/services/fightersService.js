import { callApi, getFighterById } from '../helpers/apiHelper';

class FighterService {
  async getFighters() {
    // eslint-disable-next-line no-useless-catch
    try {
      const endpoint = 'fighters.json';
      const apiResult = await callApi(endpoint, 'GET');

      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  // sync
  getFighterDetails(id) {
    // todo: implement this method
    // endpoint - `details/fighter/${id}.json`;
    const endpoint = `details/fighter/${id}.json`;
    const res = getFighterById(endpoint);

    return res;
  }
}

export const fighterService = new FighterService();
