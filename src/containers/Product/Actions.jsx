import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ActionIcon } from "../../components/ActionIcon";
import { setToggleNotificationService } from "../../services/product";
import { Alert } from "../../layouts/admin/utils/alert";
import { StockContex } from "../../context/stockContex";

export const Actions = ({
  item,
  handelDeleteProduct,
  setEditProduct,
  handelToggleNot,
}) => {
  const navigate = useNavigate();
  const { numctx } = useContext(StockContex);
  return (
    <>
    {item.stock <= numctx && (
        <ActionIcon
          icon={` fas text-info ${
            item.has_notification === 1 ? "fa-eye-slash" : "fa-eye"
          } `}
          pTitle="delete_product"
          title="تغییر وضعیت محصول"
          onClick={() => handelToggleNot(item)}
        />
      )}

      <ActionIcon
        icon="fas fa-edit text-warning"
        pTitle="update_product"
        title="ویرایش محصول"
        onClick={() =>
          navigate("/product/add-product", { state: { productEdit: item } })
        }
      />
      <ActionIcon
        icon="fas fa-receipt text-success"
        pTitle="create_product_attr"
        title="افزودن ویژگی"
        onClick={() =>
          navigate("/product/set-attr", { state: { selectedProduct: item } })
        }
      />
      <ActionIcon
        icon="fas fa-image text-primary"
        pTitle="create_product_image"
        title="گالری تصاویر"
        onClick={() =>
          navigate("/product/gallery", { state: { selectedProduct: item } })
        }
      />
      
      <ActionIcon
        icon="fas fa-times text-danger"
        pTitle="delete_product"
        title="حذف محصول"
        onClick={() => handelDeleteProduct(item)}
      />
    </>
  );
};
