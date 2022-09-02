import { apiClient } from '../erudio';

export interface Options {
  filter?: string;
  page?: number;
  limit?: number;
  sort?: string;
}

export class Structure {
  private base_url: string;

  constructor(base_url: string) {
    this.base_url = base_url;
  }

  public async listNodes(namespace: string, options?: Options): Promise<any> {
    const url = this.base_url + `/structures/${namespace}/nodes/`;
    try {
      return await apiClient.get(url, { params: options });
    } catch (error) {
      return error;
    }
  }
}
