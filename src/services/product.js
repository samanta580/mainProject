import { convertDataToFormdata } from "../layouts/admin/utils/convertData";
import httpService from "./httpService";

export const getProductsService = (page, countOnPage, searchChar) => {
  return httpService(`/api/admin/products?page=${page}&count=${countOnPage}&searchChar=${searchChar}`, "get");
};
export const getAllProductsService = () => {
  return httpService(`/api/admin/products/all_titles`, "get");
};
export const getOneProductsService = (id) => {
  return httpService(`/api/admin/products/${id}`, "get");
};
export const deleteProductService = (id) => {
  return httpService(`/api/admin/products/${id}`, "delete");
};
export const editProductService = (id,data) => {
  return httpService(`/api/admin/products/${id}`, "put",data);
};
export const addProductAttrService = (id,data) => {
  return httpService(`/api/admin/products/${id}/add_attr`, "post",data);
};

export const createnewProductService = (data) => {
  return httpService('/api/admin/products', 'post', data.image ? convertDataToFormdata(data) : data)
};
//immage services

export const addProductImageService = (productId, data)=>{
  return httpService(`/api/admin/products/${productId}/add_image`, 'post', data)
}

export const deleteProductImageService = (imageId)=>{
  return httpService(`/api/admin/products/gallery/${imageId}`, 'delete')
}

export const setMainProductImageService = (imageId)=>{
  return httpService(`/api/admin/products/gallery/set_main/${imageId}`, 'get')
}
export const setFewerProductsService = (imageId)=>{
  return httpService(`/api/admin/products/fewer_products`, 'get')
}
export const setToggleNotificationService = (id)=>{
  return httpService(`/api/admin/products/toggle_notification/${id}`, 'get')
}



