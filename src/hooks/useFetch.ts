import { EEndpoints } from "../enums/endpoints";
import { useAppSelector } from "./redux";

export async function usePatch(body: {}, endpoint: EEndpoints, id?: number) {
  id = 16;
  if (endpoint === EEndpoints.companies) id = 12;
  const token = localStorage.getItem("X-AUTH-TOKEN") || useAppSelector(state => state.tokenReducer.token);
  const response = await fetch(`http://135.181.35.61:2112/${endpoint}/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
  return [response]
}

export async function usePost(body: any, endpoint: EEndpoints, id?: number) {
  id = 16;
  if (endpoint === EEndpoints.companies) id = 12;
  const token = localStorage.getItem("X-AUTH-TOKEN") || useAppSelector(state => state.tokenReducer.token);
  const response = await fetch(`http://135.181.35.61:2112/${endpoint}/${id}/image`,
    {
      method: "POST",
      body: body,
      headers: {
        // "Content-Type": "multipart/form-data",
        "Authorization": token
      }
    })
  return [response]
}

export async function imgDelete(imgName: string, id = 12) {
  const token = localStorage.getItem("X-AUTH-TOKEN") || useAppSelector(state => state.tokenReducer.token);
  const response = await fetch(`http://135.181.35.61:2112/companies/${id}/image${imgName}`,
    {
      method: "DELETE",
      headers: {
        "Authorization": token
      }
    })
  return [response]
}
export async function companyDelete(id = 12) {
  const token = localStorage.getItem("X-AUTH-TOKEN") || useAppSelector(state => state.tokenReducer.token);
  const response = await fetch(`http://135.181.35.61:2112/companies/${id}`,
    {
      method: "DELETE",
      headers: {
        "Authorization": token
      }
    })
  return [response]
}

