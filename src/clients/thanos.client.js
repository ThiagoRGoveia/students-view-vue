export class ThanosClient {
  async getStudents() {
    const response = await fetch(
      "http://thanos.icmc.usp.br:4567/api/v1/defesas"
    );
    const body = await response.json();
    return {
      data: body.items,
      headers: body.hs,
    };
  }
}

export default new ThanosClient();
