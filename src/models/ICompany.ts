export interface ICompany {
  id: string;
  contactId: string;
  name: string;
  shortName: string;
  businessEntity: string;
  contract: TContract;
  type: string[];
  status: string;
  photos: TPhotos[];
}

export type TContract = {
  no: number | string;
  issue_date: string
}

export type TPhotos = {
  name: string;
  filepath: string;
  thumbpath: string;
}