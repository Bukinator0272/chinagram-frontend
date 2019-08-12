import {Like} from "./Like";

export class Photo {
  public id: string;
  public date: Date;
  public likes: Like[]

  constructor(public description: string) {
    this.description = description;
  }
}
