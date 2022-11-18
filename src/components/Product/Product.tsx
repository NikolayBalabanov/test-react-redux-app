import React from "react"
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IProduct } from "../../types/product";
import { DeleteButton } from "../UI/DeleteButton/DeleteButton";
import { LikeButton } from "../UI/LikeButton/LikeButton";
import './Product.css'

interface IProductProps {
    product: IProduct
}

export function Product({ product }: IProductProps) {
    const { products} = useTypedSelector(state => state.products)
    const {deleteProduct, likeProduct} = useActions()

    function deleteProd() {
      deleteProduct(products, product.id)
    }

    function likeProd() {
      likeProduct(products, product.id)
    }

    return (
      <div className="products__item product">
          <img className="product__img" src={product.image} alt={product.title} />
          <div className="product__content">
            <div className="product__text">
              <p className="product__title">{product.title}</p>
              <p className="product__price">$ {product.price}</p>
              <p className="product__descr">{product.description}</p>
              <p className="product__rate">Rate: <span style={{fontWeight: 'bold'}}>{product.rating?.rate}</span></p>
            </div>
            <div className="product__btns">
              <DeleteButton deleteFn={deleteProd}/>
              <LikeButton like={product.like} likeFn={likeProd}/>
            </div>
          </div>
      </div>
    )
}
